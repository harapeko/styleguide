# CSSコーディングガイド

## 設計
`ECSS` + `ITCSS` + `RSCSS` を参考にしています。

- [ECSS](http://ecss.io/) では命名規則の接頭辞と、捨て易さという思想を。
- [ITCSS](http://itcss.io/) ではCSSのファイル構成を。
- [RSCSS](http://rscss.io/) では命名規則と`>`による規則を。

### 捨て易さ
#### Variantは最小限に留めて、機能的、役割的なものにまとめるべき

WHY? 複数回のオーバーライドが必要になったり(多重の打ち消し、詳細度の上昇)、メンテナンスされないコードの発生を恒久的に許すことになる。

**悪い例**
```css
.exmaple-box {
  margin: 10px 20px
}
.exmaple-box.-large {
  margin: 20px;
}
.exmaple-box.-orange {
  background-color: orange;
}
```

**良い例**
```css
.exmaple-box {
  margin: 10px 20px;
}
.exmaple-box.-shop {
  margin: 20px;
  background-color: orange;
}
```

#### 文脈でコンポーネントを検討する。目指すのは共通化ではない

WHY? 粒度が大きくなる、ELEMENTが別物になる、オーバーライドが無制限になる、メンテナンスがしづらくなる。

**悪い例**
```scss
.exmaple-box {
  >.title.-shop {
    color: orange;
  }
  >.address {
    font-size: 10px;
  }
  >.title.-machine {
    color: skyblue;
  }
  >.maker {
    font-size: 12px;
  }
}
```

**良い例**
```scss
.shop-box {
  >.title {
    color: orange;
  }
  >.address {
    font-size: 10px;
  }
}
.machine-box {
  >.title {
    color: skyblue;
  }
  >.maker {
    font-size: 12px;
  }
}
```

## フォーマット
- インデントは2スペース
- IDセレクタは使わない
- 中括弧の開始、つまり { の前にスペースを1つ入れる
- プロパティにおいて、 : の前ではなく後ろにスペースを1つ入れる
- 中括弧の終了、つまり } の前に改行を入れる
- スタイルの宣言の間には少なくとも改行を1つ入れる

**悪い例**
```css
.avatar{
    border-radius:50%;
    border:2px solid white; }
#hero {
  // ...
}
```

## コメント
- 行末コメントをなるべく裂けて、コメント用に1行使う
- コメントはそれ自身がドキュメントとなるように詳細にコメントを書く


## JavaScriptフック
`.js-` という接頭辞を持つJavaScriptバインド専用のクラスを作ることを推奨します。

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

## `!important`
絶対にそうなるべきという時に使用しましょう。

主にユーティリティクラスで使うことになると思います。

## stylelint
- [rstacruz/stylelint-rscss](https://github.com/rstacruz/stylelint-rscss) を使います

ルール変更が必要になった場合は `.stylelintrc` を変更してください。(`RSCSS`では`table`などネストが深くなることでlinterrorが発生しやすいです)

ルールのドキュメント: [stylelint-rscss/docs/rules.md](https://github.com/rstacruz/stylelint-rscss/blob/master/docs/rules.md)

ルール変更が対応していない場合は、ここに追加してください `.stylelintignore`

## スタイルガイド

**※ スタイルガイドの整備は意外と時間かかるので、納期を優先してください**

[Nucleus](https://holidaypirates.github.io/nucleus/) を利用しています

[DEMO](https://holidaypirates.github.io/nucleus/demo/)

[Nucleus - Living style guide generator](https://holidaypirates.github.io/nucleus/getting-started.html) で記述方法を確認できます