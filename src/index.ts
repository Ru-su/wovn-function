import process from "process";
import { getStraightforwardTranslate } from "./functions/translate";

const translate = getStraightforwardTranslate();

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error(
    "Required arguments: source text, target language, screen name"
  );
  process.exit(1);
}

console.log(translate(args[0], args[1], args[2]));
translate(args[0], args[1], args[2]);
