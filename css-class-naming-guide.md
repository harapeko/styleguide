# CSSクラス命名ガイド

一貫したクラス名を、できるだけ考えないで命名するためのガイドです。

## Prefix(接頭辞)
略字 | 意味 | 説明
--- | --- | ---
`sg-` | SiteGlobal | サイト共通の大きなパーツ
`sc-` | SiteCommon | サイト共通の小さなパーツ
`ap-` | AboutPage | Aboutページ
`nf-` | NotFound | 404ページ

## Hierarchy,Order(序列、順序)
名前 | 説明
--- | ---
`primary` | 第一
`secondary` | 第二
`tertiary` | 第三
`quaternary` | 第四
`quinary` | 第五
`senary` | 第六
`reverse` | 逆、反対

## Layout(配置)
名前 | 説明
--- | ---
`grid` | グリッドレイアウト
`row` | 横並ぶ、列
`column` | 縦並ぶ、行
`list > item` | 一覧レイアウト。子要素は`item`と命名する。<br>子要素がの粒度が大きい場合は、`unit`と命名してもよい。
`media` | 画像とテキストが横並びになったレイアウト
`card` | 画像とテキストが縦並びになったレイアウト
`tile` | 同じようなものが繰り返しされるレイアウト
`hero` | ファーストビューに配置する大きいイメージ
`group` | 特徴が同じ「コンポーネント」をまとめておくブロック
`holder` | 特徴が異なる「コンポーネント」をまとめておくブロック
`bar` | 横並びに「コンポーネント」をまとめるレイアウト
`dropdown` | ドロップダウン
`accordion` | アコーディオン
`tab` | tab

## Containts(具体的な内容)
名前 | 説明
--- | ---
`home` | トップページ
`about` | 〜について
`Profile` | プロフィール
`company` | 会社
`product` | 製品
`case` | 事例
`info` | 情報
`news` | ニュース
`event` | イベント
`history` | 履歴、遠隔
`archive` | 保管
`concept` | 構想
`recommend` | おすすめ
`contact` | 問い合わせ、連絡
`access` | アクセス
`shop` | 店舗
`policy` | 個人情報の利用、個人情報保護方針
`guideline` | ガイドライン
`request` | 請求
`recruit` | リクルート
`service` | サービス
`flow` | 流れ
`feature` | 特徴
`topics` | トピック、話題
`toc` | 目次
`related` | 関連のある
`area` | 地域
`faq` | よくある質問(Frequently asked questions)
`help` | ヘルプ
`sitemap` | サイトマップ
`sounds` | 50音
`ad` | 広告

## Container(容器)
### タグと同名で使うもの
名前 | 説明
--- | ---
`header` | ヘッダー
`footer` | フッター
`article` | 記事
`sidebar` | 補足
`section` | 見出しの区域

### それ以外
名前 | 説明
--- | ---
`wrap > innner` | デザインを実現するためにネストする時に使う。<br>経験上、`inner`も子要素で入れておくとイレギュラーデザインでの耐久性が高い事が多い。<br>個人的には`body`直下には予めいれておくと耐久性が高い。
`outer` | 外部の
`inner` | 内部の
`head` | 上部の
`foot` | 下部の
`body` | 本体部分の
`list` | 一覧
`item` | 項目、品名
`menu` | メニュー
`unit` | 1つの単位、セット
`contents` | 内容を入れる箱
`info` | 詳細情報などを入れる箱
`popup` | 要素の上に覆いかぶさる箱(種別は問わない)
`dialog` | 要素の上に覆いかぶさる箱(ユーザに捜査を要求する)
`modal` | 要素の上に覆いかぶさる箱(ユーザに捜査を要求し、画面の捜査ができる)
`modeless` | 要素の上に覆いかぶさる箱(ユーザに捜査を要求し、画面の捜査ができない)
`tooltip` | マウスオーバーで補足情報を要素の上に表示する
`toast` | 要素の上に覆いかぶさる箱。(時間経過で消える)
`overlay` | ページ全体の上に覆いかぶさる箱
`button` | 押すことで特定のアクションを促す領域。
`menu` | メニュー
`box` | 汎用的な箱(名前が思いつかない時に)

### Image(画像)
名前 | 説明
--- | ---
`figure > (figoption + img)` | 図を説明するテキストとセットで使用する
`img` | 画像
`thumb` | 縮小画像
`avatar` | アバター画像
`banner` | バナー
`icon` | アイコン
`loading` | ローディング
`logo` | ロゴ
`map` | 地図
`chart` | 図表

### Text(テキスト、見出し)
名前 | 説明
--- | ---
`title` | 見出し、表題
`subtitle` | 見出し、表題
`doc` | 文書
`par` | 段落
`text` | テキスト
`intro` | 概要
`desc` | 説明
`lead` | 補足
`note` | 注釈
`announce` | お知らせ
`catch` | キャッチコピー
`author` | 著者
`tel` | 電話
`address` | 住所
`date` | 日付
`time` | 時刻
`update` | 更新
`seriese` | 一定の形態や傾向に基づいて連続する企画
`category` | カテゴリ、分類
`tag` | 識別になる目印
`label` | 項目名
`summary` | 概要
`more` | さらなる情報、もっと見るなど
`detail` | 詳細
`message` | メッセージ
`comment` | コメント
`data` | データ
`nodata` | データが無かったとき
`count` | 合計
`em` | 強調(emphasis)
`span` | 装飾(名前が思いつかない時に)
`copy` | コピーライト

### Form(フォーム)
名前 | 説明
--- | ---
`search` | 検索
`label` | 項目
`input` | インプット
`field` | テキストフィールド
`check` | チェックボックス
`select` | セレクトボックス
`signin` | ログイン
`signup` | 登録する
`cart` | カート
`submit` | 送信

### Navigation(ナビゲーション)
名前 | 説明
--- | ---
`breadcrumb` | パンくず
`pager` | ページネーション
`prev` | 前へ
`next` | 次へ
`first` | 最初へ
`last` | 最後へ
`totop` | 上部に戻る

## Variant
### Size(サイズ)
名前 | 説明
--- | ---
`mini` | 最小
`max` | 最大
`xxs` | かなり小さい
`xs` | より小さい
`s` | 小さい
`m` | 中間
`l` | 大きい
`xl` | より大きい
`xxl` | かなり大きい
`wide` | 広い
`narrow` | 狭い

### State(状態)
名前 | 説明
--- | ---
`show` | 表示
`hide` | 非表示
`open` | 開く
`close` | 閉じる
`enabled` | 有効
`disabled` | 無効
`current` | 現在
`selected` | 選択
`success` | 成功
`fail` | 失敗
`error` | エラー
`alert` | 警告
`caution` | 警告(`alert`より危険度が高い)
`warn` | 警告(`caution`より危険度が高い)
`danger` | 取り返しが付かない危険

## JavaScript
名前 | 説明
--- | ---
`toggle` | トグルする
`bind` | 連動する
`follow` | 追従