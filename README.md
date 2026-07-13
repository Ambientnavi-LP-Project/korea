# Halal Wagyu Korea — Myeongdong (Eleventy)

明洞2店舗のLP。デザインは既存 steak 版 `store.njk` に準拠。

## 生成されるページ

公開ドメイン: **https://korean-bbq.halal-food-wagyu.com**

| URL | 店舗 |
|---|---|
| `/` | トップ（2店舗への導線） |
| `/kbbq/` | ① Wagyu Korean BBQ Halal KBBQ Vegan Myeongdong |
| `/steakburgerpizza/` | ② Steak Hamburger Pizza Halal Wagyu Vegan Gluten Free Myeongdong |

`src/_data/stores.js` の `stores[]` に足すだけでページが増えます（`permalink: /{slug}/`）。
`slug` にスラッシュを入れれば階層も切れます（例: `myeongdong/kbbq`）。
`/sitemap.xml` と `/robots.txt` も自動生成されます。

## 開発

```bash
npm install
npm run dev     # http://localhost:8080
npm run build   # → _site/
```

Node 20+ 推奨（`.nvmrc` 同梱）。

## Vercel 接続

GitHub に push → Vercel で Import。設定は `vercel.json` に入っているので基本そのままでOK。

- Framework Preset: **Other**（`framework: null`）
- Build Command: `npm run build`
- Output Directory: `_site`

## ★ あとで差し替えるもの

### 1. 店舗情報（`src/_data/stores.js` の `// TODO:` 箇所）

両店とも以下が空です:

- `address_en` / `address_postal` — 住所
- `tel_display` / `tel_raw` — 電話（`tel_raw` は `+82...` 形式）
- `hours` / `hours_note` — 営業時間（仮で `11:00 – 23:00 / Open Daily`）
- `tablecheck_url` — 予約URL
- `maps_link` / `map_embed` — Googleマップ
- `rating` / `rating_count` / `rating_source` — 口コミ

補足:
- `tablecheck_url` が空 → 予約ボタンが**電話案内**に切り替わる
- `tablecheck_url` も `tel_raw` も空 → 予約ボタン自体が**非表示**（今の状態）
- `maps_link` が空 → 「Get Directions」非表示
- `rating` が空 → 口コミ / Tripadvisor セクションが**丸ごと非表示**

### 2. ブランド設定（`stores.js` の `brand`）

`domain` は `korean-bbq.halal-food-wagyu.com` 済み。`ga4_id` / `gtm_id` は **steak 版のまま**なので、計測を分けるなら差し替えてください。

### 3. 画像・動画（`src/assets/`）

**実写（差し替え不要）**

- `myeongdong-kbbq/kbbq-platter.jpg` — 焼肉プレート
- `myeongdong-steak/burger.jpg` — WAGYUバーガー
- `myeongdong-steak/pizza.jpg` — 和牛ピザ

**プレースホルダー（黒＋金枠の仮画像 / 要差し替え）**

| ファイル | 用途 |
|---|---|
| `hero-left-steak.mp4` | HERO左カラム動画 ※既存リポジトリの本物をコピーでOK |
| `myeongdong-kbbq/hero-2.jpg`, `hero-3.jpg` | KBBQ店 HERO中央・右（縦長） |
| `myeongdong-kbbq/menu-platter.jpg`, `menu-vegan.jpg` | KBBQ店メニュー |
| `myeongdong-steak/steak.jpg` | ステーキ店メニュー1枚目 |
| `interior.jpg` | 店内 |
| `wagyu-raw-hero.jpg` / `farm.jpg` | 和牛・牧場 |
| `family01–04.jpg` | お客様写真スライド |
| `google_rating.jpg` / `review_*.jpg` / `tripadvisor.jpg` | `rating` を入れた時だけ表示 |

## テンプレートの任意フィールド

`store.njk` は以下を店舗ごとに上書きできます（未指定なら steak 標準にフォールバック）:

| フィールド | 用途 |
|---|---|
| `asset_slug` | 画像フォルダ名（`slug` に `/` が入るため分離） |
| `concept` / `concept_kick` | H1・マーキー・キッカーの業態名 |
| `hero_label` | HERO上部のラベル |
| `visit_place` | 「We're Waiting for You in ○○」 |
| `country` | 住所末尾の国名 |
| `hero_cols[]` | HERO 3分割。`{type:"video", src, start}` または `{type:"images", src:[...]}` |
| `menu[]` | メニューカード。`{img, name, desc, price?}`、枚数自由 |
