// 表示の練習に使う固定値。
const total = 100;
const average = 20;

// 2つの値を文章につなぎ、観察ログに表示。
const message = "合計 " + total
  + "件 / 平均 " + average + "件";
const result = document.querySelector(
  "#observation-result"
);
result.textContent = message;
