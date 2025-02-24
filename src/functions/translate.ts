import { IData, ITranslationData, ITranslations } from "../types";
import { getStraightforwardTranslationsMap } from "./getStraightforwardTranslationsMap";

export function getStraightforwardTranslate(data?: IData) {
  const staticMap = getStraightforwardTranslationsMap(data);
  // const PatternList = getPatternTemplatesTranslationsList(data);

  return (sourceText: string, targetLanguage: string, screenName: string) => {
    // Solution optimized for Straightforward translation

    // Converting a string into a normalized form
    const normalizeSourceText = sourceText.normalize("NFKC");

    // Search for the straightforward translation
    if (!staticMap.has(normalizeSourceText)) {
      return normalizeSourceText;
    }

    const translationData = staticMap.get(
      normalizeSourceText
    ) as ITranslationData;

    if (
      Object.keys(translationData.translations).includes(targetLanguage) &&
      translationData.translations[targetLanguage].length > 0
    ) {
      const translation = translationData.translations[targetLanguage].reduce(
        (acc, item) => {
          if (acc.screen_name === screenName) return acc;
          if (item.screen_name === screenName) return item;
          if (acc.published_dst) {
            return acc;
          } else {
            return item;
          }
        },
        translationData.translations[targetLanguage][0]
      );

      return translation?.published_dst || normalizeSourceText;
    } else {
      return normalizeSourceText;
    }
  };
}
