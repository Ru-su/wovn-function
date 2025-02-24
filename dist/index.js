"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const translate_1 = require("./functions/translate");
const translate = (0, translate_1.getStraightforwardTranslate)();
const args = process_1.default.argv.slice(2);
if (args.length < 3) {
    console.error("Required arguments: source text, target language, screen name");
    process_1.default.exit(1);
}
console.log(translate(args[0], args[1], args[2]));
