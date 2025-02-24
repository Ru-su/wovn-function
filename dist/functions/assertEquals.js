"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEquals = assertEquals;
function assertEquals(translationExpexted, translation) {
    const response = translationExpexted.normalize("NFKC") === translation.normalize("NFKC");
    if (response) {
        console.log("Test case", translationExpexted, ":", `\x1b[32m${response}\x1b[0m`);
    }
    else {
        console.error("Test case", translationExpexted, ":", `\x1b[31m${response}\x1b[0m`);
    }
    return (translationExpexted.normalize("NFKC") === translation.normalize("NFKC"));
}
