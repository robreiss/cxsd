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

export async function handleConvert(
  urlRemote: string,
  opts: { [key: string]: any },
) {
  const fetchOptions: FetchOptions = {};

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

  const files: Record<string, string> = {};

  const jsWriter = useCache
    ? cacheWriter(new Cache(outJs, { indexName: "_index.js" }))
    : inMemoryWriter(files);
  const tsWriter = useCache
    ? cacheWriter(
        new Cache(outTs, {
          indexName: "_index.d.ts",
        }),
      )
    : inMemoryWriter(files);

  const schemaContext = new schema.Context();
  const xsdContext = new Context(schemaContext);
  const loader = new Loader(xsdContext, fetchOptions, opts["namespace"]);

  loader.import(urlRemote).then((namespace: Namespace) => {
    try {
      exportNamespace(xsdContext.primitiveSpace, schemaContext);
      exportNamespace(xsdContext.xmlSpace, schemaContext);

      const spec = exportNamespace(namespace, schemaContext);

      const addImports = new AddImports(spec);
      const sanitize = new Sanitize(spec);

      const importsAddedPromise = addImports.exec();

      let importsAddedResult: Output[];

      // Find ID numbers of all types imported from other namespaces.
      return importsAddedPromise
        .then((importsAdded) => {
          importsAddedResult = importsAdded;
          // Rename types to valid JavaScript class names,
          // adding a prefix or suffix to duplicates.
          return sanitize.exec();
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
