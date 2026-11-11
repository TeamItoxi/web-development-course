# 第19回 APIデータの検索・詳細表示

一覧から詳細を開くか、英語名 pikachu または番号 25 で検索。存在しない英語名では0件の案内。空入力や対象外の文字では通信せず入力案内。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4179/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-19 dev` で起動。
