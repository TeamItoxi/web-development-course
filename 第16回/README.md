# 第16回 HTTP・API・JSON・fetch

「No. 25 のデータを取得」を押し、PokéAPIから取得した pikachu が表示されることを確認。ブラウザーの開発者ツールの Network で、リクエスト、HTTPステータス、JSONを確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4176/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-16 dev` で起動。
