import { handleConvert } from "../src";
import * as fs from "fs";

describe("Document tests", () => {
  const filenames = fs
    .readdirSync("./test/input", { withFileTypes: true })
    .filter((item) => item.isFile() && item.name.split(".").pop() === "xsd")
    .map((item) => item.name);

  for (const file of filenames) {
    test(file, () => {
      handleConvert("./test/input/" + file, {});
    });
  }
});
