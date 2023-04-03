// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import "source-map-support/register";

import { program }from "commander";

import { Cache, FetchOptions } from "@wikipathways/cget";

import { Context } from "./xsd/Context";
import { Namespace } from "./xsd/Namespace";
import { Loader } from "./xsd/Loader";
import { exportNamespace } from "./xsd/Exporter";
import { AddImports, Output } from "./schema/transform/AddImports";
import { Sanitize } from "./schema/transform/Sanitize";
import * as schema from "./schema";
import { cacheWriter } from "./schema/exporter/CacheWriter";
import { inMemoryWriter } from "./schema/exporter/InMemoryWriter";

const projectVersion = require("../package.json").version;
program.version(projectVersion)
  .arguments("<url>")
  .description("XSD download and conversion tool")
  .option(
    "-L, --allow-local <boolean> (default true)",
    "Allow or disallow fetching files from local filesystem"
  )
  .option(
    "-H, --force-host <host>",
    'Fetch all xsd files from <host>\n    (original host is passed in GET parameter "host")'
  )
  .option(
    "-P, --force-port <port>",
    "Connect to <port> when using --force-host"
  )
  .option('-c, --cache', 'Cache downloaded XSD filed')
  .option("-o, --out <path>", "Output definitions and modules under <path>")
  .option("-t, --out-ts <path>", "Output TypeScript definitions under <path>. Overrides --out")
  .option("-j, --out-js <path>", "Output JavaScript modules under <path>. Overrides --out")
  .option("-n, --namespace <namespace>", "Use namespace <namespace> as namespace when file doesn't define a namespace.")
  .action(handleConvert)
  .parse(process.argv);

if (process.argv.length < 3) program.help();

function handleConvert(urlRemote: string, opts: { [key: string]: any }) {
  var schemaContext = new schema.Context();
  var xsdContext = new Context(schemaContext);

  var fetchOptions: FetchOptions = {};

  fetchOptions.allowLocal = opts.hasOwnProperty("allowLocal")
    ? opts["allowLocal"]
    : true;

  const useCache = opts["cache"] ? true : false;

  if (opts["forceHost"]) {
    fetchOptions.forceHost = opts["forceHost"];
    if (opts["forcePort"]) fetchOptions.forcePort = opts["forcePort"];

    if (useCache) {
      Cache.patchRequest();
    }
  }

  const defaultOut = "xmlns";
  const outJs = opts["outJs"] ?? opts["out"] ?? defaultOut;
  const outTs = opts["outTs"] ?? opts["out"] ?? defaultOut;

  const files: Record<string, string> = {}

  const jsWriter = useCache ? cacheWriter(new Cache(outJs, { indexName: "_index.js" })) : inMemoryWriter(files);
  const tsWriter = useCache ? cacheWriter(new Cache(outTs, {
    indexName: "_index.d.ts"
  })) : inMemoryWriter(files);

  var loader = new Loader(xsdContext, fetchOptions, opts['namespace']);

  loader.import(urlRemote).then((namespace: Namespace) => {
    try {
      exportNamespace(xsdContext.primitiveSpace, schemaContext);
      exportNamespace(xsdContext.xmlSpace, schemaContext);

      var spec = exportNamespace(namespace, schemaContext);

      var addImports = new AddImports(spec);
      var sanitize = new Sanitize(spec);

      var importsAddedPromise = addImports.exec();

      var importsAddedResult: Output[];

      // Find ID numbers of all types imported from other namespaces.
      importsAddedPromise
        .then((importsAdded) => {
          importsAddedResult = importsAdded
          // Rename types to valid JavaScript class names,
          // adding a prefix or suffix to duplicates.
          return sanitize.exec()
        })
        .then(() => sanitize.finish())
        .then(() => addImports.finish(importsAddedResult))
        .then(() => new schema.JS(spec, jsWriter).exec())
        .then(() => new schema.TS(spec, tsWriter).exec());
    } catch (err) {
      console.error(err);
      console.log("Stack:");
      console.error(err.stack);
    }
  });
}
