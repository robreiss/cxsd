import { Writer } from "./Exporter";

export const inMemoryWriter = (files: Record<string, string>): Writer => {
  return {
    write: async (name, contentGetter) => {
      files[name] = contentGetter();

      return new Promise((res) => res(true));
    },
    getPathTo: (name) => {
      return `./${name}`;
    },
  };
};
