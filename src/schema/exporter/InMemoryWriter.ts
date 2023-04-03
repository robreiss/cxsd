import { Writer } from "./Exporter";

export const inMemoryWriter = (files: Record<string, string>): Writer => {
    return {
        write: (name, contentGetter) => {
            files[name] = contentGetter();

            return true
        },
        getPathTo: (name) => {
          return `./${name}`;
        }
    }
}