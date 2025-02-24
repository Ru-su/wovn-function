"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assertEquals_1 = require("../functions/assertEquals");
const translate_1 = require("../functions/translate");
const translate = (0, translate_1.getStraightforwardTranslate)();
(0, assertEquals_1.assertEquals)("Static RecyclerView: 0518", translate("静的なRecyclerViewです:0518", "en", "Screen3"));
(0, assertEquals_1.assertEquals)("HtmlTextView: [Giá trị thứ hai] Được tạo ra ở Abyss", translate("HtmlTextView: [2番⽬の値] メイドインアビス", "vi", "Screen4"));
(0, assertEquals_1.assertEquals)("WOVN.io", translate("WOVN.io", "en", "SelectsActivity"));
(0, assertEquals_1.assertEquals)("WOVN.io - MainScreen", translate("WOVN.io", "en", "MainActivity"));
// Matching source: "[{{number:1}}番⽬の値] こんにちは、{{text[1,10]:1}}さん。 今は {{number:2}}時間 {{number:3}}分"
(0, assertEquals_1.assertEquals)("[Value number 15] Hello, John. It's now 10 hour(s) and 30 minute(s)", translate("[15番⽬の値] こんにちは、Johnさん。今は 10時間 30分", "en", "Screen4"));
// 15A is not a number
(0, assertEquals_1.assertEquals)("[15A番⽬の値] こんにちは、Johnさん。今は 10時間 30分", translate("[15A番⽬の値] こんにちは、Johnさん。今は 10時間 30分", "en", "Screen4"));
// Since JohnLongName has more than 10 characters, it does not match text[1,10]
(0, assertEquals_1.assertEquals)("[15番⽬の値] こんにちは、JohnLongNameさん。今は 10時間 30分", translate("[15番⽬の値] こんにちは、JohnLongNameさん。今は 10時間 30分", "en", "Screen4"));
(0, assertEquals_1.assertEquals)("[,-25536th value] Hello etytfyyh. It is now ,-25536 hours ,-25536 minutes", translate("[,-25536番目の値] こんにちは、etytfyyhさん。今は ,-25536時間 ,-25536分", "en", "Screen4"));
