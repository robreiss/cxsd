// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import "source-map-support/register";

import { program } from "commander";
import { handleConvert } from "./index";

const projectVersion = require("../package.json").version;
program
  .version(projectVersion)
  .arguments("<url>")
  .description("XSD download and conversion tool")
  .option(
    "-L, --allow-local <boolean> (default true)",
    "Allow or disallow fetching files from local filesystem",
  )
  .option(
    "-H, --force-host <host>",
    'Fetch all xsd files from <host>\n    (original host is passed in GET parameter "host")',
  )
  .option(
    "-P, --force-port <port>",
    "Connect to <port> when using --force-host",
  )
  .option("-c, --cache", "When present, cache downloaded XSD files")
  .option("-o, --out <path>", "Output definitions and modules under <path>")
  .option(
    "-t, --out-ts <path>",
    "Output TypeScript definitions under <path>. Overrides --out",
  )
  .option(
    "-j, --out-js <path>",
    "Output JavaScript modules under <path>. Overrides --out",
  )
  .option(
    "-n, --namespace <namespace>",
    "Use namespace <namespace> as namespace when file doesn't define a namespace.",
  )
  .action(handleConvert)
  .parse(process.argv);

if (process.argv.length < 3) program.help();
