# 第22回 総合制作の画面・データ設計と実装

一覧・詳細・お気に入りの3画面を移動。詳細からお気に入りを登録し、別画面から同じ詳細へ戻れることを確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4182/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-22 dev` で起動。
