import { readFileSync } from "fs";
import { IData, ITranslationData } from "../types";

export function getPatternTemplatesTranslationsList(obj?: IData) {
  // List for patterns
  const patternTemplates: ITranslationData[] = [];
  let data =
    obj ??
    (JSON.parse(
      readFileSync(require.resolve("../../json/data.json"), "utf8")
    ) as IData);

  if ("translation_data" in data) {
    for (const item of data.translation_data) {
      if (
        "source" in item &&
        "type" in item &&
        item.type === "RdbPatternValue"
      ) {
        patternTemplates.push(item);
      }
    }
  }

  return patternTemplates;
}
