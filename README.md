# 朝顔のLP

## 使用しているフレームワーク
- [Next.js](https://nextjs.org/) (TSXでコンポーネントを分けて書く方がHTMLで書くより修正しやすいと判断し導入しました)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)（クラス属性値を独自で書くよりも管理しやすいと判断し導入しました）

VSCodeを使っている場合、

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs)

等を入れると便利です。

## 開発

### 必要なコマンド
- docker（node環境のためだけ使っています。yarnが使える環境であればdockerを入れる必要はありません。）
- yarn（dockerを入れるとyarnを使える環境のコンテナを立ち上げられるため、直接ローカル環境にyarnをインストールする必要はありません。）

### Dockerの開発環境で進める場合

#### 1. Dockerのインストール
[こちら](https://docs.docker.com/get-docker/) からお願いします。

#### 2. プロジェクトのクローン

##### HTTPSの場合

```
git clone https://github.com/toshikisugiyama/asagao_lp.git
```

##### SSHの場合
```
git clone git@github.com:toshikisugiyama/asagao_lp.git
```

#### 3. コンテナの起動

```
cd asagao_lp
docker compose up
```

http://localhost:8006 にアクセスしてください。

## ビルド

```
docker compose exec app yarn build
```

生成された `app/landing_page` を公開してください。
#   t e m p _ f i l e s  
 