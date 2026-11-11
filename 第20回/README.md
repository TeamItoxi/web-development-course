# 第20回 検索・絞り込み・CRUD入門

表示中の12件をローカルで絞り込み。下のボタンでGET・POST・PATCH・DELETEを試し、開発者ツールのNetworkでメソッドと応答を比較。DummyJSONは書き込みを模擬し、サーバー側のデータは変更されない。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4180/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-20 dev` で起動。
