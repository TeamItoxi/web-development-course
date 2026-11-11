# 第12回 ReactのProps・一覧表示・条件分岐

配列から3枚のカードを表示。src/App.jsx の items={animals} を一時的に items={[]} に変え、0件の案内を確認。確認後に元へ戻す。

## 起動

1. Node.js 24系を使用。
2. このフォルダで `pnpm install`、`pnpm dev`。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4172/` を開く。停止は Ctrl+C。

リポジトリをまとめて取得した場合は、ルートで `pnpm install`、`pnpm --filter zukan-12 dev`。
