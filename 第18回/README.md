# 第18回 APIデータの一覧表示

初回は12件。次の12件と前の12件でAPIのoffsetが変わり、一覧が切り替わることを確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4178/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-18 dev` で起動。
