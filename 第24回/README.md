# 第24回 GitHub・Web公開・発表

`pnpm test`、`pnpm build`、`pnpm preview` で公開用の成果物を確認。`公開手順` の資料に従い、自分のリポジトリで公開。発表メモを使って3分で紹介。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4184/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-24 dev` で起動。
