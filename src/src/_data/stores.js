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
    ga4_id: "",                 // TODO: 韓国用 GA4 測定ID（空なら GA タグ自体を出力しません）
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
      address_en: "",           // TODO: 住所
      address_postal: "",       // TODO: 郵便番号

      // ===== 連絡先 ===== ★あとで差し替え
      tel_display: "",          // TODO: 電話（表示用）
      tel_raw: "",              // TODO: 8210xxxxxxxx（先頭の + は njk 側で付きます）

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

      // ===== 画像 =====
      hero_image: "/assets/kbbq/hero.jpg",
      gallery_images: [
        { img: "/assets/kbbq/hero.jpg",      label: "Wagyu galbi, charcoal-grilled" },
        { img: "/assets/kbbq/gallery-2.jpg", label: "Banchan & ssam" }   // TODO: 別カットに差し替え
      ],

      // ===== コース ===== ★内容は仮。実メニューに差し替えてください
      courses: [
        {
          name: "Wagyu KBBQ",
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
        philosophy_lead: "Every cut is built on three uncompromising commitments — to craft, to faith, and to the finest wagyu Japan has to offer.",
        pillars: [
          { num: "壱", title: "Michelin Supervised", text: "Every recipe and marinade overseen by a Michelin Bib Gourmand chef." },
          { num: "弐", title: "Halal Muslim Friendly", text: "Every ingredient, utensil and process — uncompromisingly, transparently halal-friendly." },
          { num: "参", title: "Authentic Wagyu", text: "Premium Japanese wagyu, grilled with restraint to honour its natural depth." }
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
      address_en: "",           // TODO: 住所
      address_postal: "",       // TODO: 郵便番号

      // ===== 連絡先 ===== ★あとで差し替え
      tel_display: "",          // TODO: 電話（表示用）
      tel_raw: "",              // TODO: 8210xxxxxxxx

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

      // ===== 画像 =====
      hero_image: "/assets/steakburgerpizza/hero.jpg",
      gallery_images: [
        { img: "/assets/steakburgerpizza/hero.jpg",      label: "Wagyu hamburger" },
        { img: "/assets/steakburgerpizza/gallery-2.jpg", label: "Wagyu pizza, stone-baked" }
      ],

      // ===== コース ===== ★内容は仮
      courses: [
        {
          name: "Steak &amp; Burger",
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
        philosophy_lead: "Every plate is built on three uncompromising commitments — to craft, to faith, and to the finest wagyu Japan has to offer.",
        pillars: [
          { num: "壱", title: "Michelin Supervised", text: "Every recipe, from patty to pizza dough, overseen by a Michelin Bib Gourmand chef." },
          { num: "弐", title: "Halal · Vegan · Gluten Free", text: "Halal-friendly throughout, with vegan and gluten-free options across the menu." },
          { num: "参", title: "Authentic Wagyu", text: "Premium Japanese wagyu, prepared with restraint to honour its natural depth." }
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
