# 第13回 ReactのuseState・イベント

カードごとにお気に入りを登録・解除。ペンギンを登録しても、ほかのカードのボタンは変わらないことを確認。再読み込みすると全カードが初期状態へ戻る。

## 起動

1. Node.js 24系を使用。
2. このフォルダで `pnpm install`、`pnpm dev`。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4173/` を開く。停止は Ctrl+C。

リポジトリをまとめて取得した場合は、ルートで `pnpm install`、`pnpm --filter zukan-13 dev`。
