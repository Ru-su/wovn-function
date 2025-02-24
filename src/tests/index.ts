import { assertEquals } from "../functions/assertEquals";
import { getStraightforwardTranslate } from "../functions/translate";

const translate = getStraightforwardTranslate();

assertEquals(
  "Static RecyclerView: 0518",
  translate("静的なRecyclerViewです:0518", "en", "Screen3")
);

assertEquals(
  "HtmlTextView: [Giá trị thứ hai] Được tạo ra ở Abyss",
  translate("HtmlTextView: [2番⽬の値] メイドインアビス", "vi", "Screen4")
);
assertEquals("WOVN.io", translate("WOVN.io", "en", "SelectsActivity"));
assertEquals(
  "WOVN.io - MainScreen",
  translate("WOVN.io", "en", "MainActivity")
);
// Matching source: "[{{number:1}}番⽬の値] こんにちは、{{text[1,10]:1}}さん。 今は {{number:2}}時間 {{number:3}}分"
assertEquals(
  "[Value number 15] Hello, John. It's now 10 hour(s) and 30 minute(s)",
  translate(
    "[15番⽬の値] こんにちは、Johnさん。今は 10時間 30分",
    "en",
    "Screen4"
  )
);
// 15A is not a number
assertEquals(
  "[15A番⽬の値] こんにちは、Johnさん。今は 10時間 30分",
  translate(
    "[15A番⽬の値] こんにちは、Johnさん。今は 10時間 30分",
    "en",
    "Screen4"
  )
);
// Since JohnLongName has more than 10 characters, it does not match text[1,10]
assertEquals(
  "[15番⽬の値] こんにちは、JohnLongNameさん。今は 10時間 30分",
  translate(
    "[15番⽬の値] こんにちは、JohnLongNameさん。今は 10時間 30分",
    "en",
    "Screen4"
  )
);

assertEquals(
  "[,-25536th value] Hello etytfyyh. It is now ,-25536 hours ,-25536 minutes",
  translate(
    "[,-25536番目の値] こんにちは、etytfyyhさん。今は ,-25536時間 ,-25536分",
    "en",
    "Screen4"
  )
);
