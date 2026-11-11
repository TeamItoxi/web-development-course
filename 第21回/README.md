# 第21回 総合制作の題材・利用者・必須機能

`企画.md` で利用者、使う場面、必須機能を決定。ブラウザーで3画面の見取り図を確認。受講者は自分の題材に置き換えてもよい。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4181/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-21 dev` で起動。
