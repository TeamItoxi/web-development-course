# 第6回 JavaScriptの変数・値・演算

第5回の図鑑に、計算結果を表示する観察ログを追加。

1. `index.html` をChromeまたはEdgeで開く。
2. 観察ログに「合計 5件 / 平均 2.5件」が出ることを確認。
3. F12で開発者ツールを開き、Consoleで `5 2.5 true` を確認。
4. `script.js` の `afternoonCount` を0に変えて保存・更新。画面は合計2件・平均1件、Consoleは `2 1 false`。

Node.jsやパッケージのインストールは不要。`style.css`、画像、発展用の `form-practice.html` は第5回から引き継ぎ。

## 固定値の表示練習

1. `index.html` 内の `src="script.js"` を `src="display-practice.js"` に変更。
2. 保存してブラウザを更新。`total = 100` と `average = 20` から「合計 100件 / 平均 20件」の表示を確認。
3. `src="script.js"` に戻して保存・更新。本編の合計5件・平均2.5件の表示へ復帰。
