/**
 * 店舗データ定義（韓国・明洞）
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 *
 * 任意フィールド（未指定なら steak 標準にフォールバック）:
 *   asset_slug / concept / concept_kick / hero_label / visit_place / country
 *   hero_cols[] / menu[]
 */
module.exports = {
  brand: {
    domain: "korean-bbq.halal-food-wagyu.com",
    ga4_id: "G-HQ62CMRJKR",                 // TODO: 韓国用に分けるなら差し替え
    gtm_id: "GTM-5DGT9H6L",                 // TODO: 同上
    brand_name: "Halal Wagyu Korea",
    brand_slug: "korea"
  },
  stores: [
    {
      // ===== URL/識別 =====
      // → https://korean-bbq.halal-food-wagyu.com/kbbq/
      region: "korea",        // GA4 の store_area 用（URLには使わない）
      slug: "kbbq",
      asset_slug: "myeongdong-kbbq",   // 画像フォルダ名（slug と別にしたい場合に指定）

      // ===== 店名 =====
      name_full_en: "Wagyu Korean BBQ Halal KBBQ Vegan Myeongdong Restaurant 明洞韩式烧烤",
      name_cn: "明洞韩式烧烤",
      hero_place: "Seoul's Myeongdong",

      // ===== 業態（このページ専用の文言） =====
      concept: "Wagyu Korean BBQ",
      concept_kick: "KOREAN BBQ",
      hero_label: "MYEONGDONG · SEOUL · 明洞",
      visit_place: "Myeongdong",
      country: "Korea",

      // ===== 立地 ===== ★あとで差し替え
      city: "Myeongdong, Seoul",
      station_en: "Myeongdong Station",
      address_en: "",              // TODO: 住所
      address_postal: "",          // TODO: 郵便番号

      // ===== 連絡先 ===== ★あとで差し替え
      tel_display: "",             // TODO: 電話（表示用）
      tel_raw: "",                 // TODO: +82...

      // ===== 営業 ===== ★あとで差し替え
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",

      // ===== 予約・地図 ===== ★あとで差し替え
      tablecheck_url: "",          // 空 → 予約ボタンは電話案内に。電話も空なら非表示
      maps_link: "",               // 空 → 非表示
      map_embed: "",

      // ===== 評価 =====（空 → 口コミ／Tripadvisor セクション非表示）
      rating: "",
      rating_count: "",
      rating_source: "",

      // ===== HERO 3分割 =====（steak / 丼の動画は業態違いなので使わない）
      // ※スマホは 1カラム目のみ表示 → 一番強い写真を先頭に
      hero_cols: [
        { type: "images", src: ["/assets/myeongdong-kbbq/kbbq-platter.jpg"] },
        { type: "images", src: ["/assets/myeongdong-kbbq/hero-2.jpg"] },  // TODO: 別カットに差し替え
        { type: "images", src: ["/assets/myeongdong-kbbq/hero-3.jpg"] }   // TODO: 別カットに差し替え
      ],

      // ===== メニュー =====
      menu: [
        {
          img: "/assets/myeongdong-kbbq/kbbq-platter.jpg",
          name: "Halal Wagyu Galbi BBQ Set",
          desc: "Japanese Wagyu short rib · Charcoal grilled at your table · Banchan & ssam set included"
        },
        {
          img: "/assets/myeongdong-kbbq/menu-platter.jpg",
          name: "Wagyu KBBQ Premium Platter",
          desc: "Assorted Wagyu cuts (Chadolbaegi, Galbisal, Ribeye) · Signature dipping sauces · For sharing"
        },
        {
          img: "/assets/myeongdong-kbbq/menu-vegan.jpg",
          name: "Vegan Korean BBQ Set",
          desc: "Plant-based BBQ · Grilled vegetables & mushrooms · Gluten-free sauce available"
        }
      ]
    },
    {
      // ===== URL/識別 =====
      // → https://korean-bbq.halal-food-wagyu.com/steakburgerpizza/
      region: "korea",        // GA4 の store_area 用（URLには使わない）
      slug: "steakburgerpizza",
      asset_slug: "myeongdong-steak",

      // ===== 店名 =====
      name_full_en: "Steak Hamburger Pizza Halal Wagyu Vegan Gluten Free Myeongdong Restaurant 明洞和牛餐厅",
      name_cn: "明洞和牛餐厅",
      hero_place: "Seoul's Myeongdong",

      // ===== 業態 =====
      concept: "Wagyu Steak, Burger & Pizza",
      concept_kick: "STEAK · BURGER · PIZZA",
      hero_label: "MYEONGDONG · SEOUL · 明洞",
      visit_place: "Myeongdong",
      country: "Korea",

      // ===== 立地 ===== ★あとで差し替え
      city: "Myeongdong, Seoul",
      station_en: "Myeongdong Station",
      address_en: "",              // TODO: 住所
      address_postal: "",          // TODO: 郵便番号

      // ===== 連絡先 ===== ★あとで差し替え
      tel_display: "",             // TODO: 電話（表示用）
      tel_raw: "",                 // TODO: +82...

      // ===== 営業 ===== ★あとで差し替え
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",

      // ===== 予約・地図 ===== ★あとで差し替え
      tablecheck_url: "",
      maps_link: "",
      map_embed: "",

      // ===== 評価 =====
      rating: "",
      rating_count: "",
      rating_source: "",

      // ===== HERO 3分割 =====（左のステーキ動画のみ流用可 / 右の丼動画は使わない）
      hero_cols: [
        { type: "video",  src: "/assets/hero-left-steak.mp4" },
        { type: "images", src: ["/assets/myeongdong-steak/burger.jpg", "/assets/myeongdong-steak/pizza.jpg"] },
        { type: "images", src: ["/assets/myeongdong-steak/pizza.jpg", "/assets/myeongdong-steak/burger.jpg"] }
      ],

      // ===== メニュー =====
      menu: [
        {
          img: "/assets/myeongdong-steak/steak.jpg",
          name: "Japanese Wagyu Steak Platinum",
          desc: "Japanese Wagyu (Tenderloin, Sirloin, Ribeye) · Premium cut · Chef's signature seasoning"
        },
        {
          img: "/assets/myeongdong-steak/burger.jpg",
          name: "Halal Wagyu Hamburger",
          desc: "100% Japanese Wagyu patty · Gluten-free bun available · Vegan patty option"
        },
        {
          img: "/assets/myeongdong-steak/pizza.jpg",
          name: "Wagyu Pizza (Vegan / Gluten Free)",
          desc: "Stone-baked crust · Wagyu topping · Vegan cheese & gluten-free dough available"
        }
      ]
    }
  ]
};
