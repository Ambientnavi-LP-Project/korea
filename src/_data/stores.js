/**
 * 店舗データ定義（韓国・明洞）
 *
 * Eleventy が /{slug}/index.html を生成します。
 *   → https://korean-bbq.halal-food-wagyu.com/kbbq/
 *   → https://korean-bbq.halal-food-wagyu.com/steakburgerpizza/
 *
 * store.njk が参照するフィールド:
 *   必須 : region, slug, name_full_en, name_short, city, pref, hero_image
 *   予約 : tablecheck_url（空なら tel_raw への電話リンクに自動フォールバック）
 *   情報 : tel_display, tel_raw, hours, hours_note, address_en, address_postal,
 *          maps_link, maps_embed, payment_note, seats, seats_note
 *   画像 : hero_image, gallery_images[{ img, label }]
 *   料理 : courses[{ name, items[] }]
 *   文言 : copy{...}  ← 未指定なら njk 側の元コピー（ラーメン/丼の文言）にフォールバック
 */
module.exports = {
  brand: {
    domain: "korean-bbq.halal-food-wagyu.com",
    ga4_id: "",                 // TODO: GA4 測定ID（空なら GA タグ自体を出力しません）
    meta_pixel_id: "",          // TODO: Meta ピクセルID（空なら出力しません）
    tiktok_pixel_id: "",        // TODO: TikTok ピクセルID（空なら出力しません）
    brand_name: "Halal Wagyu Korea",
    brand_slug: "korea"
  },
  stores: [
    {
      // ===== URL/識別 =====
      region: "korea",          // GA4 の store_area 用（URLには使いません）
      slug: "kbbq",

      // ===== 店名 =====
      name_full_en: "Wagyu Korean BBQ Halal KBBQ Vegan Myeongdong Restaurant 明洞韩式烧烤",
      name_short: "Myeongdong KBBQ",
      name_cn: "明洞韩式烧烤",

      // ===== 立地 ===== ★あとで差し替え
      city: "Myeongdong",
      pref: "Seoul",
      address_en: "1F, 23-3 Myeongdong 4-gil, Jung-gu",
      address_postal: "",       // TODO: 郵便番号（韓国の5桁。例 04536）

      // ===== 連絡先 =====
      tel_display: "010-3280-5765",
      tel_raw: "821032805765",  // +82 + 先頭の0を除いた番号

      // ===== 営業 ===== ★あとで差し替え
      hours: "11:00 – 23:00",
      hours_note: "",

      // ===== 予約・地図 ===== ★あとで差し替え
      tablecheck_url: "",       // 空 → 予約ボタンが電話リンクになります
      maps_link: "",
      maps_embed: "",

      // ===== 店舗情報 ===== ★あとで差し替え
      payment_note: "Cash · Credit card · QR payment",
      seats: "",                // 例: "42 seats"（空なら行ごと非表示）
      seats_note: "",

      // ===== 構造化データ（Google検索対策）=====
      address_country: "KR",
      currency: "KRW",
      price_range: "",          // TODO: 例 "₩₩₩"
      opens: "11:00",           // TODO: 実際の開店時刻（24h表記）
      closes: "23:00",          // TODO: 実際の閉店時刻
      geo_lat: "",              // TODO: 緯度（Googleマップから）
      geo_lng: "",              // TODO: 経度
      serves_cuisine: ["Korean BBQ", "Wagyu", "Halal", "Vegan"],

      // ===== 画像 =====
      hero_image: "/assets/kbbq/hero.jpg",
      // 写真が1枚しかないため、ギャラリーは1枚大きく表示（njk側のフォールバック）
      // 別カットが用意できたら下記のように2枚指定すれば2カラムになります
      // gallery_images: [
      //   { img: "/assets/kbbq/hero.jpg",      label: "Wagyu galbi, charcoal-grilled" },
      //   { img: "/assets/kbbq/gallery-2.jpg", label: "Banchan & ssam" }
      // ],
      gallery_images: [],


      // ===== Tripadvisor =====（url が入ったときだけセクションが表示されます）
      tripadvisor: {
        // image が空だとセクションごと非表示
        image: "/assets/tripadvisor.jpg",
        headline: "Our Ginza flagship store ranked <em>No.1</em> in the Gourmet &amp; Restaurant category in Tokyo on Tripadvisor.",
        // ⚠ 銀座本店のランキングであり「この店舗」の実績ではない旨を必ず明記
        note: "August 2025 – March 2026 · Among 103,647 restaurants. This No.1 ranking refers to our Ginza flagship store in Tokyo, not this location.",
        url: ""                 // TODO: Tripadvisor のページURL（空ならボタン非表示）
      },


      // ===== 文言の上書き =====（ラーメン/丼の表現を KBBQ に）
      copy: {
        meta_desc: "Wagyu Korean BBQ Halal KBBQ Vegan Myeongdong Restaurant — halal-friendly wagyu Korean BBQ in Myeongdong, Seoul. Muslim-friendly, vegan & gluten-free options.",
        og_desc: "Halal-friendly wagyu Korean BBQ in Myeongdong, Seoul.",
        hero_kicker: "WAGYU",
        hero_sub: "Halal · Korean BBQ",
        philosophy_title: "Three principles<br>One flame",
        philosophy_lead: "Every cut is built on three uncompromising commitments — to craft, to faith, and to the quality of the wagyu itself.",
        pillars: [
          { num: "01", title: "Halal Muslim Friendly", text: "Every ingredient, utensil and process — uncompromisingly, transparently halal-friendly." },
          { num: "02", title: "Vegan Options", text: "A full plant-based Korean BBQ set, grilled on a separate plate." },
          { num: "03", title: "Premium Wagyu", text: "Carefully selected wagyu, grilled at your table with restraint to honour its natural depth." }
        ],
        gallery_eyebrow: "The Grill",
        gallery_title: "A study in detail",
        gallery_label: "The signature cut",
        halal_text: "A halal-friendly menu, designed so Muslim guests can enjoy authentic wagyu Korean BBQ with confidence."
      }
    },
    {
      // ===== URL/識別 =====
      region: "korea",
      slug: "steakburgerpizza",

      // ===== 店名 =====
      name_full_en: "Steak Hamburger Pizza Halal Wagyu Vegan Gluten Free Myeongdong Restaurant 明洞和牛餐厅",
      name_short: "Myeongdong Steak",
      name_cn: "明洞和牛餐厅",

      // ===== 立地 ===== ★あとで差し替え
      city: "Myeongdong",
      pref: "Seoul",
      address_en: "1F, 23 Myeongdong 4-gil, Jung-gu",
      address_postal: "",       // TODO: 郵便番号

      // ===== 連絡先 =====
      tel_display: "010-9871-5765",
      tel_raw: "821098715765",  // +82 + 先頭の0を除いた番号

      // ===== 営業 ===== ★あとで差し替え
      hours: "11:00 – 23:00",
      hours_note: "",

      // ===== 予約・地図 ===== ★あとで差し替え
      tablecheck_url: "",
      maps_link: "",
      maps_embed: "",

      // ===== 店舗情報 ===== ★あとで差し替え
      payment_note: "Cash · Credit card · QR payment",
      seats: "",
      seats_note: "",

      // ===== 構造化データ（Google検索対策）=====
      address_country: "KR",
      currency: "KRW",
      price_range: "",          // TODO: 例 "₩₩₩"
      opens: "11:00",           // TODO: 実際の開店時刻（24h表記）
      closes: "23:00",          // TODO: 実際の閉店時刻
      geo_lat: "",              // TODO: 緯度（Googleマップから）
      geo_lng: "",              // TODO: 経度
      serves_cuisine: ["Steak", "Burger", "Pizza", "Wagyu", "Halal", "Vegan", "Gluten Free"],

      // ===== 画像 =====
      hero_image: "/assets/steakburgerpizza/hero.jpg",
      gallery_images: [
        { img: "/assets/steakburgerpizza/steak.jpg",        label: "Wagyu steak" },
        { img: "/assets/steakburgerpizza/steak-burger.jpg",  label: "Steak & wagyu burger" },
        { img: "/assets/steakburgerpizza/pizza.jpg",         label: "Wagyu pizza, stone-baked" }
      ],


      // ===== Tripadvisor =====（url が入ったときだけセクションが表示されます）
      tripadvisor: {
        // image が空だとセクションごと非表示
        image: "/assets/tripadvisor.jpg",
        headline: "Our Ginza flagship store ranked <em>No.1</em> in the Gourmet &amp; Restaurant category in Tokyo on Tripadvisor.",
        // ⚠ 銀座本店のランキングであり「この店舗」の実績ではない旨を必ず明記
        note: "August 2025 – March 2026 · Among 103,647 restaurants. This No.1 ranking refers to our Ginza flagship store in Tokyo, not this location.",
        url: ""                 // TODO: Tripadvisor のページURL（空ならボタン非表示）
      },


      // ===== 文言の上書き =====
      copy: {
        meta_desc: "Steak Hamburger Pizza Halal Wagyu Vegan Gluten Free Myeongdong Restaurant — halal wagyu steak, burgers and pizza in Myeongdong, Seoul.",
        og_desc: "Halal wagyu steak, burgers and pizza in Myeongdong, Seoul.",
        hero_kicker: "WAGYU",
        hero_sub: "Halal · Steak · Burger · Pizza",
        philosophy_title: "Three principles<br>One fire",
        philosophy_lead: "Every plate is built on three uncompromising commitments — to craft, to faith, and to the quality of the wagyu itself.",
        pillars: [
          { num: "01", title: "Halal Muslim Friendly", text: "Every ingredient, utensil and process — uncompromisingly, transparently halal-friendly." },
          { num: "02", title: "Vegan & Gluten Free", text: "Gluten-free buns and pizza dough, plus vegan patties and cheese, on request." },
          { num: "03", title: "Premium Wagyu", text: "Carefully selected wagyu — in the steak, in the patty, and on the pizza." }
        ],
        gallery_eyebrow: "The Plate",
        gallery_title: "A study in detail",
        gallery_label: "The signature plate",
        halal_text: "A halal-friendly menu with vegan and gluten-free options, designed so every guest can enjoy authentic wagyu with confidence."
      }
    }
  ]
};
