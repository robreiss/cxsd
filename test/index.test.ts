import { handleConvert } from "../src";
import * as fs from "fs";

describe("Document tests", () => {
  fs.rmSync("./test/output", { recursive: true, force: true });

  const filenames = fs
    .readdirSync("./test/input", { withFileTypes: true })
    .filter((item) => item.isFile() && item.name.split(".").pop() === "xsd")
    .map((item) => item.name);

  for (const file of filenames) {
    test(file, async () => {
      await handleConvert("./test/input/" + file, {
        cache: true,
        out: "./test/output",
        namespace: file,
      });
    });
  }
});
