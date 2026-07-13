# Halal Wagyu Korea — Myeongdong (Eleventy)

明洞2店舗のLP。デザインは送付いただいた `store.njk`（赤 × 金 / Anton・Oswald / MICHELIN オープニング / コース制メニュー）をそのまま使用。

公開ドメイン: **https://korean-bbq.halal-food-wagyu.com**

| URL | 店舗 |
|---|---|
| `/` | トップ（2店舗への導線） |
| `/kbbq/` | ① Wagyu Korean BBQ Halal KBBQ Vegan Myeongdong |
| `/steakburgerpizza/` | ② Steak Hamburger Pizza Halal Wagyu Vegan Gluten Free Myeongdong |
| `/sitemap.xml`, `/robots.txt` | 自動生成 |

`src/_data/stores.js` の `stores[]` に足すだけでページが増えます（`permalink: /{slug}/`）。

## 構成（halal-wagyu-ramen リポジトリと同じ形）

```
assets/            ← 画像（ルート直下。/assets/... で配信）
src/
  _data/stores.js
  store.njk
  index.njk
  sitemap.njk
  robots.txt
.eleventy.js
.gitignore
package.json
vercel.json
```

## 開発

```bash
npm install
npm run dev     # http://localhost:8080
npm run build   # → _site/
```

## Vercel

Framework Preset = **Other**。設定は `vercel.json` に入っています。

```
Build Command: npm run build
Output Directory: _site
```

Domains に `korean-bbq.halal-food-wagyu.com` を追加 → DNS に CNAME を1本。

## store.njk への変更点（デザインは未変更）

CSS・レイアウト・アニメーションは一切触っていません。ラーメン／丼前提のコピーだけ、店舗データから差し替えられるようにしました。

- `permalink` を `/{{ store.slug }}/` に変更（`region` 階層を廃止）
- `{% set C = store.copy or {} %}` を追加し、以下を上書き可能に:
  `meta_desc` / `og_desc` / `hero_kicker` / `hero_sub` / `philosophy_title` / `philosophy_lead` /
  `pillars[]` / `concept_title` / `concept_lead` / `concept_cells[]` /
  `gallery_eyebrow` / `gallery_title` / `gallery_label` / `menu_title` / `menu_lead` /
  `halal_text` / `footer_note`
- **未指定なら元の文言のまま**なので、既存サイトに転用しても壊れません。

## ★ TODO（届き次第うめます）

### 店舗データ（`src/_data/stores.js`）
- `address_en` / `address_postal`
- `tel_display` / `tel_raw`（`tel_raw` は `+` 抜きの `8210…` 形式。njk 側で `tel:+` を付けます）
- `hours` / `hours_note`（仮で 11:00–23:00）
- `tablecheck_url`（空 → 予約ボタンが電話リンクにフォールバック）
- `maps_link` / `maps_embed`
- `payment_note` / `seats` / `seats_note`
- `courses[]` — **内容は仮**。実メニューに差し替えてください
- `copy.hero_kicker` — 現在 `MICHELIN`。韓国店で出せないなら `HALAL` 等に

⚠ 現状 `tel_raw` も `tablecheck_url` も空なので、予約ボタンの href が `tel:+` になります。どちらか埋まれば解消します。

### ブランド（`brand`）
- `ga4_id` — 空です。入れると GA4 タグと click イベント計測が有効になります（空なら丸ごと出力されません）

### 画像（`src/assets/`）

**実写**
- `kbbq/hero.jpg` — 焼肉プレート
- `steakburgerpizza/hero.jpg` — WAGYUバーガー
- `steakburgerpizza/gallery-2.jpg` — 和牛ピザ

**プレースホルダー（要差し替え）**
- `farm.jpg` — Our Wagyu セクションの背景（CSSから参照）
- `kbbq/gallery-2.jpg` — ギャラリー2枚目

---

## LP改善で入れたもの（2026/07 更新）

### CVR（予約率）
- **死にリンクの防止** — `tablecheck_url` も `tel_raw` も無い場合、CTAを出力しない（従来は `tel:+` という壊れたリンクになっていた）
- **ヒーローに補助CTA** — 「Call」「Directions」。予約に踏み切れない人の受け皿
- **コース価格の表示** — `courses[].price` / `price_note`。高単価商材ほど価格提示で予約の質が上がる
- 住所・電話・地図は**データが空なら行ごと非表示**

### SEO
- **JSON-LD（`Restaurant` 構造化データ）** — 住所・電話・営業時間・価格帯・料理ジャンル・メニュー・予約アクション。Google検索での見え方が変わる
- **canonical / OGP / Twitter Card / favicon** — SNSシェア時にサムネイルが出るように
- 検証: [Rich Results Test](https://search.google.com/test/rich-results) で確認できます

### 広告
- **Meta Pixel / TikTok Pixel** — `brand.meta_pixel_id` / `brand.tiktok_pixel_id` に入れると出力（空なら出力しない）
- **コンバージョン計測** — 予約クリックで `Lead`(Meta) / `SubmitForm`(TikTok)、電話クリックで `Contact` を送信
- **表示速度** — ヒーロー画像を `preload` + `fetchpriority=high`
- **オープニング演出のスキップ** — 広告流入（`utm_*` / `gclid` / `fbclid` / `ttclid`）・再訪・モーション低減設定のときは、MICHELINアニメを飛ばして即ヒーロー表示。**広告流入は3秒で離脱するため、ここが効きます**

### 新しく増えたデータ項目（`stores.js`）
| 項目 | 用途 |
|---|---|
| `brand.meta_pixel_id` / `brand.tiktok_pixel_id` | 広告ピクセル |
| `courses[].price` / `price_note` / `price_value` | 価格表示＋構造化データ |
| `address_country` / `currency` / `price_range` | 構造化データ |
| `opens` / `closes` | 営業時間（24h表記） |
| `geo_lat` / `geo_lng` | 緯度経度 |
| `serves_cuisine[]` | 料理ジャンル |

### まだ入れていないもの
- **多言語対応（hreflang / 言語切替）** — 明洞は中華圏・東南アジア・ムスリム圏の客が主力なので効果は大きいはずですが、**翻訳コピーが必要**なため未着手。日本語/中国語/韓国語の文言が決まれば実装します。

### Tripadvisor セクション

既存LP（steak版）と同じ「見出し → 画像ドン」の構成。HALALセクションと店舗情報の間に入ります。

| 項目 | 内容 |
|---|---|
| `image` | **必須**。空だとセクションごと非表示。現在 `/assets/tripadvisor.jpg` |
| `headline` | 見出し。`<em>` で囲むと金色になります（HTML可） |
| `note` | 画像下の注記。**銀座本店の実績である旨の断り書き** |
| `url` | Tripadvisorページ。入れると「View on Tripadvisor」ボタンが出ます |

クリックは GA4 に `tripadvisor_click` として記録されます。

⚠ **注記（`note`）は消さないでください。** No.1 は銀座本店の実績であり、明洞の2店舗の実績ではありません。この断り書きが無いと、韓国の店舗が Tokyo No.1 を獲ったかのような誤認を与えます（画像内にも英語で同じ注記が入っています）。

※ Googleレビューのセクションは入れていません。


---

## 2026/07 の変更

### 削除
- **FARM / Our Wagyu セクションを全削除**（HTML・CSS・`assets/farm.jpg`）
- **産地に関する表記を全削除** — 「Miyazaki Wagyu」「Kobe Beef」「Japanese wagyu」「the finest ingredients Japan has to offer」など。**国産和牛ではないため、産地を示唆する表現は一切残していません。**
  - 「Authentic Wagyu」→「Premium Wagyu」
  - 「Premium Japanese wagyu」→「Carefully selected wagyu」
  - JSON-LD の `servesCuisine` からも `"Japanese"` を除去

### 予約導線（電話案内）
- `tablecheck_url` が空のあいだは、**全CTAが自動で電話案内の文言になります**（`resIsTel`）

| 場所 | TableCheck なし（今） | TableCheck あり |
|---|---|---|
| ヘッダー | Call | Reserve |
| ヒーロー | 📞 Call to reserve · 010-XXXX-XXXX | Reserve a seat |
| 予約セクション | 📞 010-XXXX-XXXX ＋「Reservations are taken by phone」 | Reserve now |
| 下部バー（スマホ） | Reservations by phone / Call | Check availability / Reserve |
| FAB（PC） | Call 010-XXXX-XXXX | Check availability |

`tablecheck_url` を入れた瞬間に、自動でオンライン予約の文言に戻ります。**コードの修正は不要です。**


---

## 画像の現状（プレースホルダーはゼロ）

| ファイル | 使用箇所 |
|---|---|
| `assets/kbbq/hero.jpg` | KBBQ店：ヒーロー背景 ＋ ギャラリー（1枚大表示） |
| `assets/steakburgerpizza/hero.jpg` | ステーキ店：ヒーロー背景（WAGYUバーガー） |
| `assets/steakburgerpizza/steak.jpg` | ステーキ店：ギャラリー左 |
| `assets/steakburgerpizza/steak-burger.jpg` | ステーキ店：ギャラリー右 |
| `assets/steakburgerpizza/pizza.jpg` | **未使用**（和牛ピザ。差し替え用にキープ） |
| `assets/tripadvisor.jpg` | 両店：Tripadvisorセクション |

**KBBQ店は写真が1枚しかないため、ギャラリーを「1枚大きく表示」にしています**（`gallery_images: []` にすると njk 側のフォールバックが効きます）。別カットが2枚そろったら、`stores.js` のコメントアウトを戻すだけで2カラムのギャラリーになります。
