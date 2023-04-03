// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Transform } from "../transform/Transform";
import { Type } from "../Type";
import { Namespace } from "../Namespace";

export interface Writer {
  write: (name: string, contentGetter: () => string) => Promise<boolean> | boolean;
  getPathTo: (name: string, namespace: Namespace) => string
}

export interface State {
  writer: Writer;
}

export abstract class Exporter extends Transform<Exporter, boolean, State> {
  constructor(doc: Type, writer: Writer) {
    super(doc);
    this.state = { writer: writer };
  }

  writeHeader() {
    var output: string[] = [];
    var importTbl = this.namespace.getUsedImportTbl();

    for (var shortName of Object.keys(importTbl).sort()) {
      var namespace = importTbl[shortName];
      var relativePath = this.state.writer.getPathTo(namespace.name, namespace);
      output.push(this.writeImport(shortName, relativePath, namespace.name));
    }

    return output;
  }

  abstract writeImport(
    shortName: string,
    relativePath: string,
    absolutePath: string
  ): string;

  /** Output namespace contents to cache, if not already exported. */

  prepare() {
    var doc = this.doc;
    if (!doc) return null;

    const outName = this.getOutName(doc.namespace.name);
    return this.state.writer.write(outName, this.writeContents.bind(this));
  }

  abstract writeContents(): string;

  protected abstract getOutName(name: string): string;

  protected state: State;
}
