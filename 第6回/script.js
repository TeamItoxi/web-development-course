// 午前・午後の観察件数と、1日の目標件数。
const morningCount = 2;
const afternoonCount = 3;
const goalCount = 5;

// 午前の件数から始め、午後の件数を足す。
let total = morningCount;
total = total + afternoonCount;

// 平均は1回あたりの件数。目標を達成したかも確認。
const average = total / 2;
const reachedGoal = total >= goalCount;
console.log(total, average, reachedGoal);

// 計算結果を文字につなぎ、観察ログの段落へ表示。
const message = "合計 " + total + "件 / 平均 " + average + "件";
const result = document.querySelector("#observation-result");
result.textContent = message;
