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

// 目標に届いたかで、観察ログの案内を切り替える。
const goalStatus = document.querySelector("#observation-status");
if (reachedGoal) {
  goalStatus.textContent = "観察目標を達成";
} else {
  const remaining = goalCount - total;
  goalStatus.textContent = "目標まであと " + remaining + "件";
}

// 1から合計件数まで、観察メモの番号を並べる。
const noteList = document.querySelector("#observation-notes");
for (let number = 1; number <= total; number = number + 1) {
  const note = document.createElement("li");
  note.textContent = "観察メモ " + number;
  noteList.append(note);
}
