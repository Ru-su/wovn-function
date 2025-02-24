"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStraightforwardTranslationsMap = getStraightforwardTranslationsMap;
const fs_1 = require("fs");
function getStraightforwardTranslationsMap(obj) {
    // Map for straightforward translations and array for patterns
    const staticMap = new Map();
    let data = obj !== null && obj !== void 0 ? obj : JSON.parse((0, fs_1.readFileSync)(require.resolve("../../json/data.json"), "utf8"));
    if ("translation_data" in data) {
        for (const item of data.translation_data) {
            if ("source" in item && "type" in item && item.type === "RdbTextValue") {
                staticMap.set(item.source.normalize("NFKC"), item);
            }
        }
    }
    return staticMap;
}
