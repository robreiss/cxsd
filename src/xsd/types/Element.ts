// This file is part of cxsd, copyright (c) 2015-2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { State } from "../State";
import { QName } from "../QName";
import { MemberBase } from "./MemberBase";
import * as types from "../types";

export interface ElementLike {
  id: string;
  minOccurs: string;
  maxOccurs: string;

  min: number;
  max: number;
}

/** <xsd:element> */

export class Element extends MemberBase implements ElementLike {
  static mayContain: () => types.BaseClass[] = () => [
    types.Annotation,
    types.SimpleType,
    types.ComplexType,
  ];

  init(state: State) {
    this.min = +this.minOccurs;
    if (this.maxOccurs == "unbounded") this.max = Infinity;
    else this.max = +this.maxOccurs;

    this.define(state, "element", this.min, this.max);
  }

  resolve(state: State) {
    this.resolveMember(state, "element");
    if (this.substitutionGroup) {
      // Add this as an alternative to the substitution group base element.
      const ref = new QName(this.substitutionGroup, state.source);
      const groupBase = this.scope.lookup(ref, "element") as Element;

      if (!groupBase) throw new types.MissingReferenceError("element", ref);

      this.substitutes = groupBase;
      groupBase.isSubstituted = true;
    }
  }

  isAbstract() {
    return this.abstract == "true" || this.abstract == "1";
  }

  minOccurs = "1";
  maxOccurs = "1";

  default: string | null = null;

  /** Abstract elements are disallowed in the XML document,
   * and another member of the same substitution group should be used. */
  abstract: string | null = null; // boolean
  substitutionGroup: string | null = null;

  substitutes: Element;
  isSubstituted: boolean;
}
