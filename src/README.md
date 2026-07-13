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
