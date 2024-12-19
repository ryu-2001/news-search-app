# ニュース検索アプリ

このプロジェクトは、ユーザーがキーワードを入力することで関連するニュース記事を取得して表示するウェブアプリケーションです。

## 主な機能

- ニュース記事の検索:
  - キーワードを入力して NewsAPI を使用してニュース記事を取得。
- 検索結果の表示:
  - カード形式でニュースのタイトル、説明、画像、リンクを表示。
- ダークモード:
  - ユーザーがボタンでダークモードとライトモードを切り替え可能。

## 使用技術

- フロントエンド:
  - HTML
  - CSS
  - JavaScript
- バックエンド:
  - Node.js
  - Express
  - Axios
- 外部API:
  - [NewsAPI](https://newsapi.org/)

## セットアップ手順

以下の手順でローカル環境にアプリをセットアップできます。

1. **リポジトリをクローンします**:
    ```bash
    git clone git@github.com:ryu-2001/news-search-app.git
    cd news-search-app
    ```

2. **依存関係をインストールします**:
    ```bash
    npm install
    ```

3. **NewsAPIのAPIキーを設定します**:
    - [NewsAPI](https://newsapi.org/) でAPIキーを取得します。
    - プロジェクトのルートディレクトリに `.env` ファイルを作成し、以下を記述します:
      ```plaintext
      NEWS_API_KEY=あなたのAPIキー
      ```

4. **サーバーを起動します**:
    ```bash
    node server.js
    ```

5. **ブラウザでアプリを確認します**:
    - [http://localhost:5000](http://localhost:5000) にアクセスしてください。

## ファイル構成

news-search-app/
├── frontend/           # フロントエンド関連ファイル
│   ├── index.html      # メインHTML
│   ├── style.css       # スタイルシート
│   ├── script.js       # フロントエンドJavaScript
├── node_modules/       # Node.jsモジュール
├── server.js           # バックエンドサーバーコード
├── package.json        # Node.jsパッケージ設定
├── .env                # APIキー設定 (環境変数)
└── README.md           # このファイル

## 注意事項

NewsAPI の無料プランでは1日に利用できるリクエスト数が制限されています。
