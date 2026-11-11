# 第14回 Reactのフォーム・状態共有

名前の入力、分類、お気に入りの条件を組み合わせる。ペンギンを登録して一覧から一度隠し、検索を戻したときに登録状態と件数が残ることを確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4174/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-14 dev` で起動。
