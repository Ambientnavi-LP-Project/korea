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

      // ===== コース ===== ★内容は仮。実メニューに差し替えてください
      courses: [
        {
          name: "Wagyu KBBQ",
          price: "",            // TODO: 例 "₩ 89,000"（空なら非表示）
          price_note: "per person · tax included",
          price_value: "",      // TODO: 構造化データ用の数値のみ 例 "89000"
          items: [
            "Assorted banchan &amp; fresh ssam",
            "Wagyu <em>chadolbaegi</em> — brisket, seared at the table",
            "Wagyu <em>galbisal</em> — marbled short rib",
            "Charcoal-grilled wagyu galbi, signature marinade",
            "Doenjang jjigae &amp; steamed rice",
            "Seasonal dessert"
          ]
        },
        {
          name: "Vegan &amp; Halal",
          price: "",            // TODO
          price_note: "per person · tax included",
          price_value: "",
          items: [
            "Assorted banchan (all plant-based)",
            "Grilled king oyster mushroom &amp; seasonal vegetables",
            "Plant-based bulgogi, gluten-free sauce",
            "Kimchi jjigae (vegan stock)",
            "Steamed rice",
            "Seasonal dessert"
          ]
        }
      ],

      // ===== 文言の上書き =====（ラーメン/丼の表現を KBBQ に）
      copy: {
        meta_desc: "Wagyu Korean BBQ Halal KBBQ Vegan Myeongdong Restaurant — halal-friendly wagyu Korean BBQ in Myeongdong, Seoul.",
        og_desc: "Halal-friendly wagyu Korean BBQ in Myeongdong, Seoul.",
        hero_kicker: "MICHELIN",       // TODO: 韓国店でミシュラン表記を出さないなら "HALAL" などに
        hero_sub: "Supervised",
        philosophy_title: "Three principles<br>One flame",
        philosophy_lead: "Every cut is built on three uncompromising commitments — to craft, to faith, and to the quality of the wagyu itself.",
        pillars: [
          { num: "壱", title: "Michelin Supervised", text: "Every recipe and marinade overseen by a Michelin Bib Gourmand chef." },
          { num: "弐", title: "Halal Muslim Friendly", text: "Every ingredient, utensil and process — uncompromisingly, transparently halal-friendly." },
          { num: "参", title: "Premium Wagyu", text: "Carefully selected wagyu, grilled with restraint to honour its natural depth." }
        ],
        concept_title: "Fire",
        concept_lead: "Fire is the theme of the experience — charcoal, smoke, and wagyu seared at your table.",
        concept_cells: ["Tableside charcoal", "Wagyu galbi", "Smoke"],
        gallery_eyebrow: "The Grill",
        gallery_title: "A study in detail",
        gallery_label: "The signature cut",
        menu_title: "Two courses,<br>one fire",
        menu_lead: "We serve tasting courses only. A complete experience of wagyu and Michelin-supervised cooking, grilled in front of you. Choose the course that best suits your evening.",
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
        { img: "/assets/steakburgerpizza/steak.jpg",       label: "Wagyu steak" },
        { img: "/assets/steakburgerpizza/steak-burger.jpg", label: "Steak & wagyu burger" }
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

      // ===== コース ===== ★内容は仮
      courses: [
        {
          name: "Steak &amp; Burger",
          price: "",            // TODO
          price_note: "per person · tax included",
          price_value: "",
          items: [
            "Amuse — wagyu tartare on gluten-free crisp",
            "Seasonal salad",
            "Wagyu steak — tenderloin or sirloin, seared to order",
            "Halal wagyu hamburger, gluten-free bun available",
            "Truffle fries",
            "Seasonal dessert"
          ]
        },
        {
          name: "Pizza &amp; Wagyu",
          price: "",            // TODO
          price_note: "per person · tax included",
          price_value: "",
          items: [
            "Amuse — marinated seasonal vegetables",
            "Stone-baked wagyu pizza, spicy mayo &amp; scallion",
            "Wagyu steak — chef's cut of the day",
            "Vegan cheese / gluten-free dough on request",
            "Focaccia or steamed rice",
            "Seasonal dessert"
          ]
        }
      ],

      // ===== 文言の上書き =====
      copy: {
        meta_desc: "Steak Hamburger Pizza Halal Wagyu Vegan Gluten Free Myeongdong Restaurant — halal wagyu steak, burgers and pizza in Myeongdong, Seoul.",
        og_desc: "Halal wagyu steak, burgers and pizza in Myeongdong, Seoul.",
        hero_kicker: "MICHELIN",       // TODO: ミシュラン表記の可否
        hero_sub: "Supervised",
        philosophy_title: "Three principles<br>One fire",
        philosophy_lead: "Every plate is built on three uncompromising commitments — to craft, to faith, and to the quality of the wagyu itself.",
        pillars: [
          { num: "壱", title: "Michelin Supervised", text: "Every recipe, from patty to pizza dough, overseen by a Michelin Bib Gourmand chef." },
          { num: "弐", title: "Halal · Vegan · Gluten Free", text: "Halal-friendly throughout, with vegan and gluten-free options across the menu." },
          { num: "参", title: "Premium Wagyu", text: "Carefully selected wagyu, prepared with restraint to honour its natural depth." }
        ],
        concept_title: "Fire",
        concept_lead: "Fire is the theme of the experience — the grill, the stone oven, and wagyu finished in front of you.",
        concept_cells: ["Seared wagyu steak", "Stone-baked pizza", "Smoke"],
        gallery_eyebrow: "The Plate",
        gallery_title: "A study in detail",
        gallery_label: "The signature plate",
        menu_title: "Two courses,<br>one fire",
        menu_lead: "We serve tasting courses only. A complete experience of wagyu and Michelin-supervised cooking, plated and finished in front of you. Choose the course that best suits your evening.",
        halal_text: "A halal-friendly menu with vegan and gluten-free options, designed so every guest can enjoy authentic wagyu with confidence."
      }
    }
  ]
};
