import { IData, ITranslationData } from "../types";
import { readFileSync } from "fs";

export function getStraightforwardTranslationsMap(obj?: IData) {
  // Map for straightforward translations and array for patterns
  const staticMap = new Map<string, ITranslationData>();
  let data =
    obj ??
    (JSON.parse(
      readFileSync(require.resolve("../../json/data.json"), "utf8")
    ) as IData);

  if ("translation_data" in data) {
    for (const item of data.translation_data) {
      if ("source" in item && "type" in item && item.type === "RdbTextValue") {
        staticMap.set(item.source.normalize("NFKC"), item);
      }
    }
  }

  return staticMap;
}
