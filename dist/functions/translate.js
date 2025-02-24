"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStraightforwardTranslate = getStraightforwardTranslate;
const getStraightforwardTranslationsMap_1 = require("./getStraightforwardTranslationsMap");
function getStraightforwardTranslate(data) {
    const staticMap = (0, getStraightforwardTranslationsMap_1.getStraightforwardTranslationsMap)(data);
    // const PatternList = getPatternTemplatesTranslationsList(data);
    return (sourceText, targetLanguage, screenName) => {
        // Solution optimized for Straightforward translation
        // Converting a string into a normalized form
        const normalizeSourceText = sourceText.normalize("NFKC");
        // Search for the straightforward translation
        if (!staticMap.has(normalizeSourceText)) {
            return normalizeSourceText;
        }
        const translationData = staticMap.get(normalizeSourceText);
        if (Object.keys(translationData.translations).includes(targetLanguage) &&
            translationData.translations[targetLanguage].length > 0) {
            const translation = translationData.translations[targetLanguage].reduce((acc, item) => {
                if (acc.screen_name === screenName)
                    return acc;
                if (item.screen_name === screenName)
                    return item;
                if (acc.published_dst) {
                    return acc;
                }
                else {
                    return item;
                }
            }, translationData.translations[targetLanguage][0]);
            return (translation === null || translation === void 0 ? void 0 : translation.published_dst) || normalizeSourceText;
        }
        else {
            return normalizeSourceText;
        }
    };
}
