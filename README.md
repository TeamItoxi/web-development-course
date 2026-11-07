# Web開発講座 完成コード

「自分だけのWeb図鑑」を作るWeb開発講座の、各回の終了時点のコード集。

## 各回の完成形

| 回 | 内容 | コード |
| --- | --- | --- |
| 第1回 | HTML・CSSによる図鑑の表紙 | [第1回](第1回/) |
| 第2回 | 画像・リンクの追加 | [第2回](第2回/) |
| 第3回 | CSSとボックスモデルによる紹介カード | [第3回](第3回/) |
| 第4回 | Flexbox・Gridによるレスポンシブ図鑑 | [第4回](第4回/) |

各フォルダに、その回の終了時点で必要なファイル一式を保存。前の回のフォルダに依存せず、単独で確認できる構成。

## 構成

~~~text
web-development-course/
├── 第1回/
│   ├── README.md
│   ├── index.html
│   └── style.css
├── 第2回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── red-panda.png
├── 第3回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── red-panda.png
├── 第4回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
~~~

## 第1回〜第4回の確認

1. GitHubの「Code」から「Download ZIP」でダウンロード、またはリポジトリをclone
2. ZIPの場合は展開
3. 確認したい回の `index.html` をChromeまたはEdgeで開く

第1回〜第4回はHTMLとCSSで動作。外部リンクの確認にはインターネット接続が必要。

## パッケージ管理

依存パッケージが必要になる回では、ディスク使用量を抑えやすいpnpmを基本に利用。現在の設定はpnpm 11.22.0、Node.js 24系。

~~~sh
pnpm install
~~~

npmでのインストールも利用可能。

~~~sh
npm install
~~~

現在は外部依存なし。上のコマンドを実行しても、授業用パッケージの追加は不要。

今後の回は、各フォルダのREADMEに起動手順を記載。pnpmとnpmに対応したワークスペース設定を用意し、pnpm専用の依存参照形式は使用しない方針。

ロックファイルの正本は `pnpm-lock.yaml`。npmではこのロックファイルを使用しないため、同じ依存バージョンでの再現にはpnpmを利用。npmが生成する `package-lock.json` はGit管理の対象外。

## 学習時の使い方

- 授業は自分の手でファイルを作成し、コードを入力
- 完成コードは復習・動作確認・困った箇所の比較用
- 次の回の追加時も、以前の回の完成形はその時点の状態を維持
- 教材の訂正時は、該当回のREADMEとGit履歴へ変更を記録

## 画像

第2回のレッサーパンダは、本講座向けにAI生成したイラスト。動物の実写写真ではない。

## 参考

- [pnpmのディスク使用量削減の仕組み](https://pnpm.io/motivation)
- [pnpmのワークスペース設定](https://pnpm.io/pnpm-workspace_yaml)
- [npmのワークスペース](https://docs.npmjs.com/cli/v11/using-npm/workspaces/)
