"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatternTemplatesTranslationsList = getPatternTemplatesTranslationsList;
const fs_1 = require("fs");
function getPatternTemplatesTranslationsList(obj) {
    // List for patterns
    const patternTemplates = [];
    let data = obj !== null && obj !== void 0 ? obj : JSON.parse((0, fs_1.readFileSync)(require.resolve("../../json/data.json"), "utf8"));
    if ("translation_data" in data) {
        for (const item of data.translation_data) {
            if ("source" in item &&
                "type" in item &&
                item.type === "RdbPatternValue") {
                patternTemplates.push(item);
            }
        }
    }
    return patternTemplates;
}
