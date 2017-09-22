# 画像ガイド

## ファイル名で使用する文字
- 半角英語(小文字)
- 数字(`01`、`001`など桁数を意識します)
- `_`(アンダースコア)
- `@2x` 解像度を表現します

またファイル名は半角英語ではじめます

## ディレクトリ構造
```
root
└── assets
    └── img
        ├── common
        ┃   └── `パーツ分類名`
        ├── components
        ┃   └── `cssコンポーネント名`
        └── pages
            └── `ページ分類名`
```

- `assets` はroot直下に `img` ディレクトリが置かれないのであれば、名前は問いません。
- サイト共通の画像は `common` に設置します
- cssコンポーネントに束縛される画像は `components` に設置します
- ページ分類に束縛される画像は `pages` に設置します

### デバイスごとに画像が必要な場合
```
root
└── assets
    ├── pc
    ┃   └── img
    └── sp
        └── img
```

### パーツ分類名
名前 | 説明
--- | ---
`arrow` | 矢印
`badge` | バッジアイコン
`banner` | バナー
`bg` | 背景
`button` | ボタン
`dummy` | ダミー画像
`icon` | アイコン
`logo` | ロゴ
`title` | タイトル

## 上記を踏まえたファイル名の例
### ディレクトリルールである程度は解決されるので、ファイル名は短くても大丈夫です。

`/assets/img/components/global-nav/shop.png`

### 細かく指定する必要があれば、次のルールに従います
```
{分類名}_{詳細}_{変種}_{連番}_{状態}
```

- それぞれ省略しても構いません。
- `{詳細}`は繰り返し冗長しても構いません。

`/assets/img/components/global-nav/menu_item_arrow_entertainment_on.png`

## 画像パス
ルートからのパスを指定しています

`/assets/img/common/icon/new.png`

## 最適化
`jpg` には MacGUI(有償)の `JPEGmini` を使用しています

`png` には [zopfli](https://github.com/google/zopfli) を使っています。

`find ./ -iname "*.png" -exec zopflipng -m -y '{}' '{}' \;`