"use strict";

/* ==========================================================================
   GadgetVerse Indonesia — Official Interactive Catalog Engine
   PAS 1 Interactive Catalog & DOM Manipulation Standard
   ========================================================================== */

// 1. OFFICIAL BRAND PARTNERS DATA
const brandsData = [
  { nama: "Apple iBox", ticker: "apple", altName: "Apple" },
  { nama: "Samsung TAM", ticker: "samsung", altName: "Samsung" },
  { nama: "Xiaomi", ticker: "xiaomi", altName: "Xiaomi" },
  { nama: "Google Pixel", ticker: "google", altName: "Google" },
  { nama: "Oppo TAM", ticker: "oppo", altName: "Oppo" },
  { nama: "Sony Audio", ticker: "sony", altName: "Sony" },
  { nama: "OnePlus", ticker: "oneplus", altName: "Oneplus" },
];

// 2. ENRICHED PRODUCTS CATALOG DATA (11 FLAGSHIP DEVICES & ACCESSORIES)
const productsData = [
  {
    ticker: "ip-15-p128T",
    hotStatus: true,
    nama: "iPhone 15 Pro 128GB Titanium",
    harga: 18999000,
    diskon: 5,
    kategori: "Featured Phone",
    badgeText: "PROMO UTAMA iBOX",
    badgeTipe: "sale",
    gambar: "assets/images/ip.jpeg",
    deskripsi:
      "Smartphone flagship Apple dengan kamera utama 48MP Pro, chip A17 Pro super cepat untuk gaming kelas konsol, bodi titanium kelas dirgantara, dan port USB-C 3.0 berkecepatan transfer 10 Gbps.",
    tags: [
      "Apple",
      "A17 Pro",
      "Titanium",
      "5G Ready",
      "Dynamic Island",
      "USB-C 3.0",
    ],
    garansi: "Garansi Resmi 1 Tahun iBox / TAM Indonesia",
    rating: 4.9,
    reviewCount: 342,
    stokText: "Ready Stock · Sisa 3 unit di gudang",
    specs: {
      layar: '6.1" Super Retina XDR OLED 120Hz ProMotion, 2000 nits, Dynamic Island',
      chipset: "Apple A17 Pro (3nm, 6-core CPU + 6-core GPU Hardware Ray Tracing)",
      baterai: "3.274 mAh, Fast Charging 50% dlm 30 menit, MagSafe 15W, USB-C 3.0",
      kameraAudio: "Triple: 48MP Utama + 12MP Ultra-wide + 12MP Telephoto 3x, Photonic Engine, Dolby Atmos",
      isiKotak: "iPhone 15 Pro, Kabel USB-C Woven 1m, Dokumentasi Resmi & SIM Ejector",
    },
  },
  {
    ticker: "smsg-gs24-256GB",
    hotStatus: false,
    nama: "Samsung Galaxy S24 256GB",
    harga: 13499000,
    diskon: 10,
    kategori: "Android Phone",
    badgeText: "GARANSI TAM",
    badgeTipe: "sale",
    gambar: "assets/images/smsg.jpeg",
    deskripsi:
      "Fitur revolusioner Galaxy AI, layar Dynamic AMOLED 2X super cerah hingga 2600 nits, dan performa baterai awet sepanjang hari untuk menunjang produktivitas dan kreasi konten.",
    tags: [
      "Samsung",
      "Galaxy AI",
      "Exynos 2400",
      "AMOLED 2X",
      "50 MP Camera",
      "IP68 Waterproof",
    ],
    garansi: "Garansi Resmi 1 Tahun Samsung Electronics Indonesia (SEIN)",
    rating: 4.8,
    reviewCount: 215,
    stokText: "Ready Stock · Tersedia pengiriman instan",
    specs: {
      layar: '6.2" Dynamic AMOLED 2X FHD+, 1-120Hz Adaptive, 2600 nits, Gorilla Glass Victus 2',
      chipset: "Samsung Exynos 2400 (4nm 10-core) dengan Galaxy AI NPU",
      baterai: "4.000 mAh, 25W Fast Charge, 15W Wireless Fast Charge, Wireless PowerShare",
      kameraAudio: "Triple: 50MP OIS + 12MP Ultra-wide + 10MP Telephoto 3x, Stereo Speakers AKG",
      isiKotak: "Galaxy S24, Kabel Data USB-C to USB-C, Ejector Pin, Quick Guide",
    },
  },
  {
    ticker: "apple-macbook-air-m3",
    hotStatus: true,
    nama: 'Apple MacBook Air 13" M3 256GB',
    harga: 16499000,
    diskon: 5,
    kategori: "Laptop",
    badgeText: "PROMO iBOX",
    badgeTipe: "sale",
    gambar:
      "assets/images/Apple-MacBook-Air-2-up-hero-240304-lp.jpg.landing-big_2x.jpg",
    deskripsi:
      "Ultrabook super tipis tanpa kipas bertenaga chip Apple M3 8-core, layar Liquid Retina 13.6 inci memukau, port MagSafe 3, dan daya tahan baterai hingga 18 jam pemakaian intensif.",
    tags: [
      "Apple",
      "Chip M3",
      "Liquid Retina",
      "18h Battery",
      "MagSafe 3",
      "Wi-Fi 6E",
    ],
    garansi: "Garansi Resmi 1 Tahun Apple iBox Indonesia",
    rating: 5.0,
    reviewCount: 189,
    stokText: "Ready Stock · Sisa 5 unit",
    specs: {
      layar: '13.6" Liquid Retina Display IPS, 2560x1664, 500 nits, True Tone, Wide Color P3',
      chipset: "Apple M3 Chip (8-core CPU, 8-core GPU, 16-core Neural Engine)",
      baterai: "52.6 Wh Lithium-Polymer, Daya Tahan hingga 18 jam, MagSafe 3 30W",
      kameraAudio: "Kamera FaceTime HD 1080p, Sistem 4 speaker dengan Audio Spasial",
      isiKotak: "MacBook Air 13 inci, Adaptor Daya USB-C 30W, Kabel USB-C ke MagSafe 3 (2 m)",
    },
  },
  {
    ticker: "xiaomi-pad-7",
    hotStatus: true,
    nama: "Xiaomi Pad 7 256GB",
    harga: 5499000,
    diskon: 8,
    kategori: "Tablet",
    badgeText: "BARU HADIR",
    badgeTipe: "sale",
    gambar: "assets/images/Xiaomi Pad 7 256GB.jpg",
    deskripsi:
      "Tablet produktivitas dengan layar 11.2 inci 3.2K 144Hz ultra tajam, chipset Snapdragon 7+ Gen 3 bertenaga, quad speaker Dolby Atmos imersif, dan pengisian cepat 45W Turbo Charge.",
    tags: [
      "Xiaomi",
      "Snapdragon 7+ Gen 3",
      "3.2K 144Hz",
      "8850mAh",
      "45W Turbo",
      "HyperOS",
    ],
    garansi: "Garansi Resmi 15 Bulan Xiaomi Indonesia",
    rating: 4.8,
    reviewCount: 156,
    stokText: "Ready Stock · Best Value Tablet",
    specs: {
      layar: '11.2" 3.2K (3200x2136) 144Hz, HDR10+, Dolby Vision, 800 nits',
      chipset: "Qualcomm Snapdragon 7+ Gen 3 (4nm TSMC)",
      baterai: "8.850 mAh, 45W Turbo Charge USB-C 3.2 Gen 1",
      kameraAudio: "Quad Speaker Stereo Dolby Atmos, Kamera Belakang 13MP + Depan 8MP",
      isiKotak: "Xiaomi Pad 7, Adaptor 45W Turbo, Kabel USB-C, Kartu Garansi",
    },
  },
  {
    ticker: "smsg-tab-s9-fe",
    hotStatus: false,
    nama: "Samsung Galaxy Tab S9 FE 128GB",
    harga: 6999000,
    diskon: 10,
    kategori: "Tablet",
    badgeText: "GARANSI TAM",
    badgeTipe: "sale",
    gambar: "assets/images/Samsung Galaxy Tab S9 FE 128GB.jpg",
    deskripsi:
      "Tablet tahan air dan debu bersertifikasi IP68 pertama di kelasnya yang sudah menyertakan S Pen presisi langsung dalam paket pembelian, ideal untuk catatan kuliah maupun ilustrasi kreatif.",
    tags: [
      "Samsung",
      "Include S Pen",
      "IP68 Tablet",
      "90Hz Display",
      "8000mAh",
      "DeX Mode",
    ],
    garansi: "Garansi Resmi 1 Tahun Samsung Indonesia (SEIN)",
    rating: 4.8,
    reviewCount: 112,
    stokText: "Ready Stock · Sudah termasuk S Pen",
    specs: {
      layar: '10.9" WQXGA 90Hz Smooth Display, Vision Booster, Sertifikasi Tahan Air IP68',
      chipset: "Samsung Exynos 1380 (5nm Octa-core)",
      baterai: "8.000 mAh, 45W Super Fast Charging",
      kameraAudio: "Dual Speaker AKG Dolby Atmos, Kamera 8MP Belakang + 12MP Ultra-wide Depan",
      isiKotak: "Galaxy Tab S9 FE, S Pen Presisi IP68, Kabel Data USB-C, Ejector Pin",
    },
  },
  {
    ticker: "oneplus-pad-2",
    hotStatus: false,
    nama: "OnePlus Pad 2 256GB",
    harga: 8499000,
    diskon: 7,
    kategori: "Tablet",
    badgeText: "FLAGSHIP TABLET",
    badgeTipe: "sale",
    gambar: "assets/images/OnePlus Pad 2 256GB.jpg",
    deskripsi:
      "Tablet flagship bertenaga Snapdragon 8 Gen 3 dengan rasio layar 7:5 ReadFit 12.1 inci 3K 144Hz, 6 speaker suara panorama, dan baterai monster 9510mAh 67W SuperVOOC.",
    tags: [
      "Oneplus",
      "Snapdragon 8 Gen 3",
      '12.1" 3K 144Hz',
      "9510mAh",
      "67W SuperVOOC",
      "Open Canvas",
    ],
    garansi: "Garansi Resmi 1 Tahun Distributor Indonesia",
    rating: 4.9,
    reviewCount: 88,
    stokText: "Sisa 2 unit eksklusif",
    specs: {
      layar: '12.1" 3K (3000x2120) ReadFit Ratio 7:5, 144Hz, 900 nits Peak, Dolby Vision',
      chipset: "Qualcomm Snapdragon 8 Gen 3 Flagship (4nm)",
      baterai: "9.510 mAh, 67W SuperVOOC Fast Charging",
      kameraAudio: "6 Speaker Hi-Res Panoramic Sound, Omnibearing Sound Field",
      isiKotak: "OnePlus Pad 2, Kabel USB SuperVOOC Type-C, Kartu Garansi, Buku Petunjuk",
    },
  },
  {
    ticker: "google-pixel-watch-3",
    hotStatus: true,
    nama: "Google Pixel Watch 3 45mm",
    harga: 6299000,
    diskon: 6,
    kategori: "Smartwatch",
    badgeText: "STOK EKSKLUSIF",
    badgeTipe: "sale",
    gambar: "assets/images/Google Pixel Watch 3 45mm.jpg",
    deskripsi:
      "Smartwatch Wear OS 5 dengan layar Actua 2000 nits yang sangat terang di bawah terik matahari, analitik lari & kebugaran Fitbit tingkat lanjut, serta deteksi denyut darurat pintar.",
    tags: [
      "Google",
      "Wear OS 5",
      "Actua 2000 nits",
      "Fitbit Health",
      "Snapdragon W5",
      "5ATM",
    ],
    garansi: "Garansi Resmi 1 Tahun Distributor Indonesia",
    rating: 4.9,
    reviewCount: 64,
    stokText: "Sisa 4 unit di etalase",
    specs: {
      layar: '1.4" Actua AMOLED Display 2000 nits, Always-on, 3D Corning Gorilla Glass 5',
      chipset: "Qualcomm Snapdragon W5 Gen 1 + Cortex M33 Co-processor, Wear OS 5",
      baterai: "307 mAh, Baterai 24 jam dengan Always-On, Pengisian Cepat USB-C Magnetik",
      kameraAudio: "Sensor Detak Jantung Multi-path, ECG/EKG, SpO2, Sensor Suhu Kulit",
      isiKotak: "Google Pixel Watch 3 45mm, Active Band (S & L), Kabel Pengisi Cepat USB-C",
    },
  },
  {
    ticker: "oppo-watch-x",
    hotStatus: false,
    nama: "OPPO Watch X Dual-Engine",
    harga: 5999000,
    diskon: 12,
    kategori: "Smartwatch",
    badgeText: "GARANSI RESMI",
    badgeTipe: "sale",
    gambar: "assets/images/OPPO Watch X Dual-Engine.jpg",
    deskripsi:
      "Smartwatch tangguh berlapis kaca Sapphire Crystal dan bodi stainless steel, arsitektur dual-engine hemat daya hingga 100 jam pemakaian aktif, serta GPS dual-frequency presisi tinggi.",
    tags: [
      "Oppo",
      "Sapphire Glass",
      "100h Battery",
      "Dual-Freq GPS",
      "MIL-STD-810H",
      "Wear OS",
    ],
    garansi: "Garansi Resmi 1 Tahun OPPO Indonesia",
    rating: 4.8,
    reviewCount: 75,
    stokText: "Ready Stock · Baterai hingga 100 jam",
    specs: {
      layar: '1.43" AMOLED 1000 nits, Kaca Sapphire Crystal, Bodi Stainless Steel',
      chipset: "Dual-Engine Architecture: Snapdragon W5 Gen 1 + BES2700, Wear OS by Google",
      baterai: "500 mAh, Hingga 100 Jam (Smart Mode) & 12 Hari (Power Saver), VOOC Flash Charge",
      kameraAudio: "Dual-frequency GPS L1+L5 presisi tinggi, Sensor Denyut Nadi 8-channel, SpO2",
      isiKotak: "OPPO Watch X, Charging Base VOOC Magnetik, Buku Manual, Kartu Garansi",
    },
  },
  {
    ticker: "sony-wh1000xm5",
    hotStatus: true,
    nama: "Sony WH-1000XM5 Wireless ANC",
    harga: 5199000,
    diskon: 15,
    kategori: "Audio Flagship",
    badgeText: "BEST SELLER AUDIO",
    badgeTipe: "sale",
    gambar: "assets/images/Sony WH-1000XM5 Wireless ANC.jpg",
    deskripsi:
      "Headphone over-ear peredam bising terbaik di kelasnya dengan 8 mikrofon, prosesor audio ganda V1 + QN1, transmisi Hi-Res Audio LDAC, serta daya tahan baterai awet hingga 30 jam.",
    tags: [
      "Sony",
      "Active Noise Cancelling",
      "30h Battery",
      "Hi-Res LDAC",
      "Multipoint",
      "8 Mic Call",
    ],
    garansi: "Garansi Resmi 1 Tahun Sony Indonesia",
    rating: 5.0,
    reviewCount: 410,
    stokText: "Ready Stock · Pilihan Utama Audiophile",
    specs: {
      layar: "Touch Sensor Control Panel & Speak-to-Chat Sensor",
      chipset: "Dual Processor HD Noise Cancelling QN1 + Integrated Processor V1, 8 Mikrofon",
      baterai: "Baterai 30 Jam (ANC On) / 40 Jam (ANC Off), Quick Charge 3 Menit = 3 Jam Playback",
      kameraAudio: "Driver 30mm Carbon Fiber, Hi-Res Audio Wireless LDAC, DSEE Extreme, 360 Reality Audio",
      isiKotak: "Sony WH-1000XM5, Carrying Case Mewah, Kabel Audio 3.5mm (1.2m), Kabel Charger USB-C",
    },
  },
  {
    ticker: "apple-airpods-pro-2",
    hotStatus: true,
    nama: "Apple AirPods Pro (2nd Gen) USB-C ANC",
    harga: 3899000,
    diskon: 8,
    kategori: "Audio Flagship",
    badgeText: "PROMO iBOX",
    badgeTipe: "sale",
    gambar: "assets/images/tws.jpeg",
    deskripsi:
      "TWS flagship Apple bertenaga chip H2 dengan Peredam Kebisingan Aktif hingga 2x lebih hening, Audio Adaptif cerdas, Audio Spasial personalisasi dengan pelacakan kepala, dan casing MagSafe USB-C IP54.",
    tags: [
      "Apple",
      "Chip H2",
      "Active Noise Cancellation",
      "Adaptive Audio",
      "MagSafe USB-C",
      "Spatial Audio",
    ],
    garansi: "Garansi Resmi 1 Tahun Apple iBox Indonesia",
    rating: 4.9,
    reviewCount: 284,
    stokText: "Ready Stock · USB-C MagSafe Case",
    specs: {
      layar: "Sensor Sentuh & Geser Kontrol Volume di Tangkai",
      chipset: "Apple H2 Headphone Chip + Chip U1 di Case untuk Presisi Pencarian",
      baterai: "Hingga 6 jam (30 jam dengan case pengisian MagSafe USB-C)",
      kameraAudio: "Driver Apple Ekskursi Tinggi Khusus & Amplifier Rentang Dinamis Tinggi Kustom",
      isiKotak: "AirPods Pro 2, Casing MagSafe USB-C, 4 Pasang Ujung Telinga Silikon (XS/S/M/L), Kabel USB-C",
    },
  },
  {
    ticker: "smsg-battery-pack-pd",
    hotStatus: false,
    nama: "Samsung 25W Battery Pack 20.000mAh",
    harga: 899000,
    diskon: 15,
    kategori: "Aksesori",
    badgeText: "GARANSI SEIN",
    badgeTipe: "sale",
    gambar: "assets/images/pb.jpeg",
    deskripsi:
      "Powerbank berkapasitas besar 20.000mAh dengan pengisian Super Fast Charging 25W USB-C Power Delivery, mampu mengisi daya 3 perangkat sekaligus dengan proteksi keamanan ganda standar internasional.",
    tags: [
      "Samsung",
      "Powerbank",
      "20000mAh",
      "25W Super Fast",
      "Triple Ports",
      "Garansi SEIN",
    ],
    garansi: "Garansi Resmi 1 Tahun Samsung Indonesia (SEIN)",
    rating: 4.8,
    reviewCount: 142,
    stokText: "Ready Stock · Flight Approved (Aman Pesawat)",
    specs: {
      layar: "LED Battery Indicator (4 Titik Indikator Kapasitas)",
      chipset: "Smart Power IC & Multiple Protection System (Anti Panas & Overcharge)",
      baterai: "20.000 mAh Li-ion (Dua Arah Super Fast Charging 25W)",
      kameraAudio: "3 Port Output (2x USB-C PD + 1x USB-A)",
      isiKotak: "Unit Power Bank 20.000mAh, Kabel USB-C to USB-C 20cm, Buku Panduan Resmi SEIN",
    },
  },
];

// 3. GLOBAL APPLICATION STATE MANAGEMENT
const state = {
  searchQuery: "",
  category: "all",
  priceRange: "all",
  sortBy: "featured",
  showWishlistOnly: false,
  appliedVoucher: null,
};

let wishlist = new Set();
try {
  const savedWishlist = JSON.parse(localStorage.getItem("gadgetverse-wishlist") || "[]");
  if (Array.isArray(savedWishlist)) {
    wishlist = new Set(savedWishlist);
  }
} catch {
  wishlist = new Set();
}

let keranjang = [];
try {
  const savedCart = JSON.parse(localStorage.getItem("gadgetverse-cart") || "[]");
  if (Array.isArray(savedCart)) {
    keranjang = savedCart
      .map((item) => {
        const prod = productsData.find((p) => p.ticker === item.ticker);
        return prod ? { product: prod, quantity: item.quantity || 1 } : null;
      })
      .filter(Boolean);
  }
} catch {
  keranjang = [];
}

let compareSet = new Set();

// 4. DOM ELEMENT CACHING
const totalElemen = document.querySelector(".brand-tag");
const elemenProduk = document.getElementById("main");
const cari = document.getElementById("product-search");
const searchClearBtn = document.getElementById("search-clear-btn");
const searchResults = document.getElementById("search-results");
const categoryFilters = document.getElementById("category-filters");
const priceFilters = document.getElementById("price-filters");
const productSort = document.getElementById("product-sort");
const resetFiltersBtn = document.getElementById("reset-filters-btn");
const trendingChips = document.getElementById("trending-chips");

const wishlistToggle = document.getElementById("wishlist-toggle");
const wishlistToggleLabel = document.getElementById("wishlist-toggle-label");

const cartButton = document.getElementById("cart-id");
const cartDrawer = document.getElementById("cart-drawer");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartCloseButton = document.getElementById("cart-close");
const cartItems = document.getElementById("cart-items");
const cartItemCount = document.getElementById("cart-item-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartDiscountRow = document.getElementById("cart-discount-row");
const cartDiscountVal = document.getElementById("cart-discount-val");
const cartGrandtotal = document.getElementById("cart-grandtotal");
const cartVoucherInput = document.getElementById("cart-voucher-input");
const cartVoucherApply = document.getElementById("cart-voucher-apply");
const cartVoucherMsg = document.getElementById("cart-voucher-msg");
const cartCheckoutBtn = document.getElementById("cart-checkout-btn");
const cartClearBtn = document.getElementById("cart-clear-btn");

const themeToggle = document.getElementById("theme-toggle");
const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");
const themeToggleLabel = document.getElementById("theme-toggle-label");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const toastRegion = document.getElementById("toast-region");

const compareDock = document.getElementById("compare-dock");
const compareCountBadge = document.getElementById("compare-count-badge");
const compareDockItems = document.getElementById("compare-dock-items");
const compareOpenBtn = document.getElementById("compare-open-btn");
const compareClearBtn = document.getElementById("compare-clear-btn");

const compareModal = document.getElementById("compare-modal");
const compareModalBackdrop = document.getElementById("compare-modal-backdrop");
const compareModalClose = document.getElementById("compare-modal-close");
const compareModalBody = document.getElementById("compare-modal-body");

const detailModal = document.getElementById("detail-modal");
const detailModalBackdrop = document.getElementById("detail-modal-backdrop");
const detailModalClose = document.getElementById("detail-modal-close");
const detailModalTitle = document.getElementById("detail-modal-title");
const detailModalBadge = document.getElementById("detail-modal-badge");
const detailModalBody = document.getElementById("detail-modal-body");

const checkoutModal = document.getElementById("checkout-modal");
const checkoutModalBackdrop = document.getElementById("checkout-modal-backdrop");
const checkoutModalClose = document.getElementById("checkout-modal-close");
const checkoutModalBody = document.getElementById("checkout-modal-body");

const imeiInput = document.getElementById("imei-input");
const imeiCheckBtn = document.getElementById("imei-check-btn");
const imeiResult = document.getElementById("imei-result");
const tradeinBrand = document.getElementById("tradein-brand");
const tradeinModel = document.getElementById("tradein-model");
const tradeinCondition = document.getElementById("tradein-condition");
const tradeinCalcBtn = document.getElementById("tradein-calc-btn");
const tradeinResult = document.getElementById("tradein-result");

let themeTransitionTimeout;
let toastTimeout;

// 5. HELPER SVG BUILDER (ZERO EMOJIS, PURE SVG PATHFILLS)
function createSvgIcon(pathDataList, viewBox = "0 0 24 24", strokeWidth = "1.9", fill = "none") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  pathDataList.forEach((d) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", fill);
    path.setAttribute("stroke", fill === "currentColor" ? "none" : "currentColor");
    path.setAttribute("stroke-width", strokeWidth);
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
  });

  return svg;
}

function formatHarga(harga) {
  return `Rp ${harga.toLocaleString("id-ID")}`;
}

function calculateInstallment(harga, tenor = 24) {
  const perBulan = Math.round(harga / tenor);
  return `Mulai ${formatHarga(perBulan)}/bln (${tenor}x 0%)`;
}

function saveWishlistToStorage() {
  try {
    localStorage.setItem("gadgetverse-wishlist", JSON.stringify([...wishlist]));
  } catch {
    // Ignore storage quota errors
  }
}

function saveCartToStorage() {
  try {
    const serialized = keranjang.map((item) => ({
      ticker: item.product.ticker,
      quantity: item.quantity,
    }));
    localStorage.setItem("gadgetverse-cart", JSON.stringify(serialized));
  } catch {
    // Ignore storage quota errors
  }
}

// 6. BRAND TICKER RENDERING
function brandTicker(daftarBrand, elemenBrand) {
  if (!elemenBrand) return;

  elemenBrand.textContent = "";
  const pecahan = document.createDocumentFragment();

  daftarBrand.forEach((i) => {
    const item = document.createElement("div");
    item.className = "brand-item";
    item.dataset.brandTicker = i.ticker;
    item.dataset.brandName = i.altName;
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", `Filter brand partner ${i.nama}`);

    const gambar = document.createElement("img");
    gambar.src = `assets/images/brand-${i.ticker}.png`;
    gambar.alt = `Logo ${i.nama}`;
    gambar.loading = "lazy";

    const nama = document.createElement("span");
    nama.textContent = i.altName;

    item.append(gambar, nama);
    pecahan.appendChild(item);
  });

  elemenBrand.appendChild(pecahan);
}

// 7. PRODUCT CARD RENDERING (CLEAN DOM, ZERO INNERHTML)
function getProducts(daftarProduk, elemenWadah) {
  if (!elemenWadah) return;

  elemenWadah.textContent = "";
  const pecahanProduk = document.createDocumentFragment();

  daftarProduk.forEach((p) => {
    const utama = document.createElement("article");
    utama.className = `card ${p.ticker}`;
    utama.dataset.ticker = p.ticker;

    // Header bar (Promo tag & Category)
    const kategori = document.createElement("div");
    kategori.className = "upspan";

    const dalamKategori1 = document.createElement("span");
    dalamKategori1.setAttribute("value", p.hotStatus ? "hot-org" : "cold-org");
    dalamKategori1.textContent = p.badgeText;

    const dalamKategori2 = document.createElement("span");
    dalamKategori2.setAttribute("value", "side-right");
    dalamKategori2.textContent = p.kategori;

    kategori.append(dalamKategori1, dalamKategori2);

    // Image container with discount badge & wishlist heart
    const gambarProduk = document.createElement("div");
    gambarProduk.className = "img";

    const diskon = document.createElement("span");
    diskon.setAttribute("value", "disc");
    diskon.textContent = `-${p.diskon}%`;

    const wishlistBtn = document.createElement("button");
    wishlistBtn.type = "button";
    wishlistBtn.className = "card-wishlist-btn";
    wishlistBtn.dataset.cardAction = "toggle-wishlist";
    wishlistBtn.dataset.ticker = p.ticker;
    const isWishlisted = wishlist.has(p.ticker);
    wishlistBtn.setAttribute("aria-pressed", String(isWishlisted));
    wishlistBtn.setAttribute(
      "aria-label",
      isWishlisted ? `Hapus ${p.nama} dari favorit` : `Simpan ${p.nama} ke favorit`,
    );

    const heartPath = [
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    ];
    const heartSvg = createSvgIcon(
      heartPath,
      "0 0 24 24",
      "1.9",
      isWishlisted ? "currentColor" : "none",
    );
    wishlistBtn.appendChild(heartSvg);

    const asset = document.createElement("img");
    asset.src = p.gambar;
    asset.alt = p.nama;
    asset.loading = "lazy";
    asset.dataset.cardAction = "quick-view";
    asset.dataset.ticker = p.ticker;

    gambarProduk.append(diskon, wishlistBtn, asset);

    // Rating & Review row
    const ratingRow = document.createElement("div");
    ratingRow.className = "card-rating-row";

    const starIcon = createSvgIcon(
      ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"],
      "0 0 24 24",
      "1.5",
      "currentColor",
    );
    starIcon.classList.add("star-icon");

    const ratingVal = document.createElement("span");
    ratingVal.className = "rating-score";
    ratingVal.textContent = p.rating ? String(p.rating.toFixed(1)) : "4.9";

    const reviewText = document.createElement("span");
    reviewText.className = "rating-reviews";
    reviewText.textContent = `(${p.reviewCount || 100}+ ulasan)`;

    const warrantyTag = document.createElement("span");
    warrantyTag.className = "card-warranty-pill";
    warrantyTag.textContent = "Garansi Resmi";

    ratingRow.append(starIcon, ratingVal, reviewText, warrantyTag);

    // Pricing block
    const priceBox = document.createElement("div");
    priceBox.className = "card-price-box";

    const harga = document.createElement("span");
    harga.setAttribute("value", "rp");
    harga.textContent = formatHarga(p.harga);

    const hargaCoret = document.createElement("span");
    hargaCoret.className = "card-price-original";
    const nominalOriginal = Math.round(p.harga / (1 - p.diskon / 100));
    hargaCoret.textContent = formatHarga(nominalOriginal);

    const installmentHint = document.createElement("p");
    installmentHint.className = "installment-hint";
    installmentHint.textContent = calculateInstallment(p.harga, 24);

    priceBox.append(harga, hargaCoret, installmentHint);

    // Title and description
    const judul = document.createElement("h2");
    judul.className = "card-title";
    judul.textContent = p.nama;
    judul.dataset.cardAction = "quick-view";
    judul.dataset.ticker = p.ticker;

    const keterangan = document.createElement("p");
    keterangan.className = "card-desc";
    keterangan.textContent = p.deskripsi;

    // Tags
    const tag = document.createElement("div");
    tag.className = "tag-item";
    p.tags.forEach((param) => {
      const isiTag = document.createElement("span");
      isiTag.textContent = param;
      tag.append(isiTag);
    });

    // Stock & Guarantee note
    const stockNote = document.createElement("div");
    stockNote.className = "card-stock-note";
    const stockDot = document.createElement("span");
    stockDot.className = "stock-dot";
    const stockText = document.createElement("span");
    stockText.textContent = p.stokText || "Ready Stock";
    stockNote.append(stockDot, stockText);

    // Toggle Spesifikasi (Fulfilling PAS 1 item #5 requirement)
    const desk = document.createElement("div");
    desk.classList.add("container-desk");
    desk.hidden = true;
    desk.setAttribute("aria-expanded", "false");

    const specGrid = document.createElement("div");
    specGrid.className = "spec-quick-grid";

    const specEntries = [
      { label: "Chipset", val: p.specs?.chipset || p.tags[1] || "-" },
      { label: "Layar", val: p.specs?.layar || p.tags[2] || "-" },
      { label: "Daya", val: p.specs?.baterai || p.tags[3] || "-" },
      { label: "Garansi", val: p.garansi || "Resmi Distributor 1 Tahun" },
    ];

    specEntries.forEach((item) => {
      const row = document.createElement("div");
      row.className = "spec-quick-row";
      const lbl = document.createElement("strong");
      lbl.textContent = `${item.label}: `;
      const val = document.createElement("span");
      val.textContent = item.val;
      row.append(lbl, val);
      specGrid.appendChild(row);
    });
    desk.appendChild(specGrid);

    // Action button row
    const beliSpec = document.createElement("div");
    beliSpec.dataset.ticker = p.ticker;
    beliSpec.className = "button";

    const beli = document.createElement("button");
    beli.type = "button";
    beli.setAttribute("value", "hlight");
    beli.dataset.ticker = p.ticker;
    beli.dataset.cardAction = "buy";
    beli.textContent = "Beli Sekarang";

    const spec = document.createElement("button");
    spec.type = "button";
    spec.setAttribute("value", "nhlight");
    spec.dataset.ticker = p.ticker;
    spec.dataset.cardAction = "toggle-spec";
    spec.setAttribute("aria-expanded", "false");
    spec.textContent = "Spesifikasi";

    const detailBtn = document.createElement("button");
    detailBtn.type = "button";
    detailBtn.className = "btn-quick-detail";
    detailBtn.dataset.ticker = p.ticker;
    detailBtn.dataset.cardAction = "quick-view";
    detailBtn.setAttribute("aria-label", `Lihat detail lengkap ${p.nama}`);
    detailBtn.textContent = "Detail";

    const compareBtn = document.createElement("button");
    compareBtn.type = "button";
    compareBtn.className = "btn-card-compare";
    compareBtn.dataset.ticker = p.ticker;
    compareBtn.dataset.cardAction = "toggle-compare";
    const isCompared = compareSet.has(p.ticker);
    compareBtn.setAttribute("aria-pressed", String(isCompared));
    compareBtn.textContent = isCompared ? "✓ Dibandingkan" : "+ Bandingkan";

    beliSpec.append(beli, spec, detailBtn);

    utama.append(
      kategori,
      gambarProduk,
      ratingRow,
      priceBox,
      judul,
      keterangan,
      tag,
      stockNote,
      desk,
      beliSpec,
      compareBtn,
    );

    pecahanProduk.appendChild(utama);
  });

  elemenWadah.appendChild(pecahanProduk);
}

// 8. CATEGORY FILTERS RENDERING
function renderCategoryFilters() {
  const categories = [...new Set(productsData.map((p) => p.kategori))];
  const options = [{ value: "all", label: "Semua produk" }].concat(
    categories.map((cat) => ({ value: cat, label: cat })),
  );

  const fragment = document.createDocumentFragment();
  options.forEach(({ value, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-filter";
    button.dataset.category = value;
    button.setAttribute("aria-pressed", String(value === state.category));
    button.textContent = label;
    fragment.appendChild(button);
  });

  categoryFilters.replaceChildren(fragment);
}

// 9. BRAND SELECTION SYNC
function syncBrandSelectionUI() {
  const query = state.searchQuery.trim().toLocaleLowerCase("id-ID");
  totalElemen.querySelectorAll(".brand-item").forEach((brandCard) => {
    const label =
      brandCard.querySelector("span")?.textContent.trim().toLocaleLowerCase("id-ID") ||
      "";
    const isSelected = Boolean(label) && query.includes(label);
    brandCard.classList.toggle("is-active", isSelected);
    brandCard.setAttribute("aria-pressed", String(isSelected));
  });
}

// 10. DOCUMENT TITLE SYNC
function updateDocumentTitle() {
  const defaultTitle = "GadgetVerse — Katalog Gadget & Aksesori Resmi";
  if (cartDrawer && !cartDrawer.hidden) {
    const totalItem = keranjang.reduce((total, item) => total + item.quantity, 0);
    document.title = `Keranjang (${totalItem}) | GadgetVerse`;
    return;
  }
  const query = state.searchQuery.trim();
  if (state.showWishlistOnly) {
    document.title = `Produk Favorit (${wishlist.size}) | GadgetVerse`;
  } else if (state.category !== "all" && query) {
    document.title = `${state.category} · "${query}" | GadgetVerse`;
  } else if (state.category !== "all") {
    document.title = `${state.category} · Katalog | GadgetVerse`;
  } else if (query) {
    document.title = `Cari "${query}" | GadgetVerse`;
  } else {
    document.title = defaultTitle;
  }
}

// 11. GSAP / MOTION REVEAL FOR PRODUCT CARDS
function animateProductCards() {
  const cards = elemenProduk.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.setProperty("--card-index", String(index));
  });

  if (
    window.gsap &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches &&
    cards.length > 0
  ) {
    window.gsap.fromTo(
      cards,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "transform,opacity",
      },
    );
  }
}

// 12. FILTER & SORT COMPUTATION
function computeFilteredProducts() {
  const query = state.searchQuery.trim().toLocaleLowerCase("id-ID");
  const keywords = query.split(/\s+/).filter(Boolean);

  let list = productsData.filter((product) => {
    // Wishlist-only filter
    if (state.showWishlistOnly && !wishlist.has(product.ticker)) {
      return false;
    }

    // Category filter
    if (state.category !== "all" && product.kategori !== state.category) {
      return false;
    }

    // Price range filter
    if (state.priceRange === "under-6m" && product.harga >= 6000000) {
      return false;
    }
    if (state.priceRange === "6m-12m" && (product.harga < 6000000 || product.harga > 12000000)) {
      return false;
    }
    if (state.priceRange === "above-12m" && product.harga <= 12000000) {
      return false;
    }

    // Search query matching
    if (keywords.length > 0) {
      const searchableText = [
        product.nama,
        product.kategori,
        product.badgeText,
        product.deskripsi,
        product.garansi,
        ...product.tags,
        ...(product.specs ? Object.values(product.specs) : []),
      ]
        .join(" ")
        .toLocaleLowerCase("id-ID");

      const matches = keywords.every((kw) => searchableText.includes(kw));
      if (!matches) return false;
    }

    return true;
  });

  // Sorting
  switch (state.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.harga - b.harga);
      break;
    case "price-desc":
      list.sort((a, b) => b.harga - a.harga);
      break;
    case "discount-desc":
      list.sort((a, b) => b.diskon - a.diskon);
      break;
    case "rating-desc":
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case "name-asc":
      list.sort((a, b) => a.nama.localeCompare(b.nama, "id-ID"));
      break;
    case "featured":
    default:
      // Featured / hotStatus first, then default order
      list.sort((a, b) => (b.hotStatus ? 1 : 0) - (a.hotStatus ? 1 : 0));
      break;
  }

  return list;
}

function renderFilteredProducts() {
  const hasilFilter = computeFilteredProducts();
  const hasActiveFilters =
    state.searchQuery.trim().length > 0 ||
    state.category !== "all" ||
    state.priceRange !== "all" ||
    state.sortBy !== "featured" ||
    state.showWishlistOnly;

  elemenProduk.classList.toggle("search-active", hasActiveFilters);
  elemenProduk.textContent = "";

  // Feedback status text
  let statusText = `Menampilkan ${hasilFilter.length} dari ${productsData.length} produk`;
  if (state.showWishlistOnly) {
    statusText += ` · Filter Favorit (${wishlist.size} item)`;
  }
  if (state.category !== "all") {
    statusText += ` · Kategori ${state.category}`;
  }
  if (state.priceRange !== "all") {
    const rangeLabels = {
      "under-6m": "< 6 Juta",
      "6m-12m": "6 - 12 Juta",
      "above-12m": "> 12 Juta",
    };
    statusText += ` · Budget ${rangeLabels[state.priceRange] || state.priceRange}`;
  }
  if (state.searchQuery.trim()) {
    statusText += ` · pencarian "${state.searchQuery.trim()}"`;
  }

  searchResults.textContent = statusText;
  resetFiltersBtn.hidden = !hasActiveFilters;
  searchClearBtn.hidden = state.searchQuery.trim().length === 0;

  if (hasilFilter.length === 0) {
    const notFound = document.createElement("div");
    notFound.className = "search-empty";

    const emptyIcon = createSvgIcon(
      ["M11 4a7 7 0 1 0 4.95 11.95L20 20M9 9l4 4m0-4l-4 4"],
      "0 0 24 24",
      "1.8",
    );
    emptyIcon.classList.add("search-empty-icon");

    const emptyTitle = document.createElement("h3");
    emptyTitle.textContent = state.showWishlistOnly
      ? "Belum ada produk di daftar favorit"
      : "Produk tidak ditemukan";

    const emptyDesc = document.createElement("p");
    emptyDesc.textContent = state.showWishlistOnly
      ? "Klik ikon hati pada produk mana pun untuk menyimpannya ke daftar ini."
      : "Coba gunakan kata kunci lain, kurangi filter, atau reset filter.";

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "empty-reset-btn";
    resetBtn.textContent = "Reset Semua Filter";
    resetBtn.addEventListener("click", handleResetFilters);

    notFound.append(emptyIcon, emptyTitle, emptyDesc, resetBtn);
    elemenProduk.appendChild(notFound);
  } else {
    getProducts(hasilFilter, elemenProduk);
    animateProductCards();
  }

  syncBrandSelectionUI();
  updateDocumentTitle();
  updateWishlistUI();
}

// 13. TOAST FEEDBACK SYSTEM
function showToast(message, type = "success") {
  if (!toastRegion) return;

  const toast = document.createElement("div");
  toast.className = `store-toast store-toast-${type}`;

  const iconWrap = document.createElement("span");
  iconWrap.className = "store-toast-icon";
  iconWrap.setAttribute("aria-hidden", "true");

  if (type === "heart") {
    iconWrap.appendChild(
      createSvgIcon(
        ["M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"],
        "0 0 24 24",
        "1.8",
        "currentColor",
      ),
    );
  } else if (type === "info") {
    iconWrap.appendChild(
      createSvgIcon(
        ["M12 9v4m0 4h.01M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"],
        "0 0 24 24",
        "1.8",
      ),
    );
  } else {
    iconWrap.appendChild(createSvgIcon(["M5 13l4 4L19 7"], "0 0 24 24", "2.2"));
  }

  const label = document.createElement("span");
  label.textContent = message;

  toast.append(iconWrap, label);
  toastRegion.replaceChildren(toast);

  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.add("is-leaving");
    window.setTimeout(() => {
      if (toast.parentNode === toastRegion) {
        toast.remove();
      }
    }, 240);
  }, 2500);
}

// 14. WISHLIST MANAGEMENT
function updateWishlistUI() {
  const count = wishlist.size;
  wishlistToggleLabel.textContent = `Favorit (${count})`;
  wishlistToggle.setAttribute("aria-pressed", String(state.showWishlistOnly));
  wishlistToggle.classList.toggle("is-active", state.showWishlistOnly);
}

function handleWishlistToggle(ticker) {
  const product = productsData.find((p) => p.ticker === ticker);
  if (!product) return;

  if (wishlist.has(ticker)) {
    wishlist.delete(ticker);
    showToast(`${product.nama} dihapus dari favorit`, "info");
  } else {
    wishlist.add(ticker);
    showToast(`${product.nama} ditambahkan ke favorit`, "heart");
  }

  saveWishlistToStorage();
  updateWishlistUI();

  // If in wishlist-only view, re-render to reflect removal
  if (state.showWishlistOnly) {
    renderFilteredProducts();
  } else {
    // Update individual card heart state
    const card = elemenProduk.querySelector(`.card[data-ticker="${ticker}"]`);
    if (card) {
      const btn = card.querySelector('.card-wishlist-btn');
      if (btn) {
        const isFav = wishlist.has(ticker);
        btn.setAttribute("aria-pressed", String(isFav));
        btn.setAttribute(
          "aria-label",
          isFav ? `Hapus ${product.nama} dari favorit` : `Simpan ${product.nama} ke favorit`,
        );
        const heartSvg = createSvgIcon(
          ["M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"],
          "0 0 24 24",
          "1.9",
          isFav ? "currentColor" : "none",
        );
        btn.replaceChildren(heartSvg);
      }
    }
  }
}

function handleWishlistFilterToggle() {
  state.showWishlistOnly = !state.showWishlistOnly;
  renderFilteredProducts();
  if (state.showWishlistOnly) {
    const catalogTarget = document.getElementById("katalog");
    if (catalogTarget) {
      catalogTarget.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// 15. CART SUMMARY & VOUCHER LOGIC
const VOUCHERS = {
  GADGETVERSE: { code: "GADGETVERSE", discount: 500000, type: "nominal", desc: "Potongan Rp 500.000" },
  MEGASALE: { code: "MEGASALE", discount: 0.1, type: "percent", desc: "Diskon 10% Mega Sale" },
  IBOXRESMI: { code: "IBOXRESMI", discount: 300000, type: "nominal", desc: "Potongan iBox Rp 300.000" },
  TRADEIN2026: { code: "TRADEIN2026", discount: 400000, type: "nominal", desc: "Cashback Tukar Tambah Rp 400.000" },
};

function updateCartSummary() {
  const totalItem = keranjang.reduce((total, item) => total + item.quantity, 0);
  const subtotal = keranjang.reduce(
    (total, item) => total + item.product.harga * item.quantity,
    0,
  );

  let discountAmount = 0;
  if (state.appliedVoucher && subtotal > 0) {
    if (state.appliedVoucher.type === "percent") {
      discountAmount = Math.round(subtotal * state.appliedVoucher.discount);
    } else {
      discountAmount = Math.min(subtotal, state.appliedVoucher.discount);
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount);

  cartButton.textContent = `Keranjang (${totalItem})`;
  cartItemCount.textContent = `${totalItem} produk dipilih`;
  cartSubtotal.textContent = formatHarga(subtotal);

  if (discountAmount > 0) {
    cartDiscountRow.hidden = false;
    cartDiscountVal.textContent = `-${formatHarga(discountAmount)}`;
  } else {
    cartDiscountRow.hidden = true;
  }

  cartGrandtotal.textContent = formatHarga(grandTotal);
  cartCheckoutBtn.disabled = totalItem === 0;

  saveCartToStorage();
  updateDocumentTitle();
}

function handleApplyVoucher() {
  const inputCode = cartVoucherInput.value.trim().toUpperCase();
  if (!inputCode) {
    cartVoucherMsg.hidden = false;
    cartVoucherMsg.className = "voucher-msg is-error";
    cartVoucherMsg.textContent = "Silakan masukkan kode promo.";
    return;
  }

  const voucher = VOUCHERS[inputCode];
  if (voucher) {
    state.appliedVoucher = voucher;
    cartVoucherMsg.hidden = false;
    cartVoucherMsg.className = "voucher-msg is-success";
    cartVoucherMsg.textContent = `Voucher ${voucher.code} aktif: ${voucher.desc}`;
    showToast(`Voucher ${voucher.code} berhasil dipasang!`);
    updateCartSummary();
  } else {
    cartVoucherMsg.hidden = false;
    cartVoucherMsg.className = "voucher-msg is-error";
    cartVoucherMsg.textContent = "Kode tidak valid. Coba GADGETVERSE atau MEGASALE.";
  }
}

// 16. CART RENDERING & CONTROLS
function renderKeranjang() {
  const fragmen = document.createDocumentFragment();

  keranjang.forEach(({ product, quantity }, index) => {
    const item = document.createElement("article");
    item.className = "cart-item";
    item.style.setProperty("--item-index", String(index));

    const gambar = document.createElement("img");
    gambar.className = "cart-item-image";
    gambar.src = product.gambar;
    gambar.alt = product.nama;
    gambar.loading = "lazy";

    const detail = document.createElement("div");
    detail.className = "cart-item-details";

    const nama = document.createElement("h3");
    nama.textContent = product.nama;

    const harga = document.createElement("p");
    harga.className = "cart-item-price";
    harga.textContent = formatHarga(product.harga);

    const kontrol = document.createElement("div");
    kontrol.className = "quantity-control";
    kontrol.setAttribute("aria-label", `Jumlah ${product.nama}`);

    const kurang = document.createElement("button");
    kurang.type = "button";
    kurang.dataset.cartAction = "decrease";
    kurang.dataset.ticker = product.ticker;
    kurang.setAttribute("aria-label", `Kurangi ${product.nama}`);
    kurang.textContent = "−";

    const jumlah = document.createElement("span");
    jumlah.textContent = String(quantity);
    jumlah.setAttribute("aria-live", "polite");

    const tambah = document.createElement("button");
    tambah.type = "button";
    tambah.dataset.cartAction = "increase";
    tambah.dataset.ticker = product.ticker;
    tambah.setAttribute("aria-label", `Tambah ${product.nama}`);
    tambah.textContent = "+";

    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.className = "cart-remove";
    hapus.dataset.cartAction = "remove";
    hapus.dataset.ticker = product.ticker;
    hapus.setAttribute("aria-label", `Hapus ${product.nama} dari keranjang`);

    const ikonHapus = createSvgIcon(
      ["M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3"],
      "0 0 24 24",
      "1.7",
    );
    hapus.appendChild(ikonHapus);

    kontrol.append(kurang, jumlah, tambah, hapus);
    detail.append(nama, harga, kontrol);
    item.append(gambar, detail);
    fragmen.appendChild(item);
  });

  cartItems.replaceChildren(fragmen);
  updateCartSummary();
  cartItems.classList.toggle("is-empty", keranjang.length === 0);

  if (keranjang.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "cart-empty";

    const icon = document.createElement("span");
    icon.className = "cart-empty-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.appendChild(
      createSvgIcon(["M6 7h12l1 13H5L6 7Z", "M9 7V5a3 3 0 0 1 6 0v2"], "0 0 24 24", "1.9"),
    );

    const title = document.createElement("h3");
    title.textContent = "Keranjangmu masih kosong";

    const description = document.createElement("p");
    description.textContent = "Temukan gadget impianmu dan tambahkan ke sini sekarang.";

    const browseButton = document.createElement("button");
    browseButton.type = "button";
    browseButton.className = "cart-browse";
    browseButton.textContent = "Jelajahi Katalog";
    browseButton.addEventListener("click", closeCart);

    emptyState.append(icon, title, description, browseButton);
    cartItems.appendChild(emptyState);
  }
}

function handleBeli(ticker, quantityToAdd = 1) {
  const produkTerpilih = productsData.find((item) => item.ticker === ticker);
  if (!produkTerpilih) return;

  const itemKeranjang = keranjang.find((item) => item.product.ticker === ticker);
  if (itemKeranjang) {
    itemKeranjang.quantity += quantityToAdd;
  } else {
    keranjang.push({ product: produkTerpilih, quantity: quantityToAdd });
  }

  renderKeranjang();
  showToast(`${produkTerpilih.nama} ditambahkan ke keranjang`);

  function removePulse() {
    cartButton.classList.remove("getpulse");
  }
  cartButton.classList.add("getpulse");
  cartButton.addEventListener("animationend", removePulse, { once: true });
}

function handleCartQuantity(event) {
  event.preventDefault();
  const tombol = event.target.closest("button[data-cart-action]");
  if (!tombol) return;

  const ticker = tombol.dataset.ticker;
  const itemKeranjang = keranjang.find((item) => item.product.ticker === ticker);
  if (!itemKeranjang) return;

  if (tombol.dataset.cartAction === "remove") {
    animateCartItemRemoval(tombol.closest(".cart-item"), ticker);
    return;
  }

  if (tombol.dataset.cartAction === "decrease" && itemKeranjang.quantity === 1) {
    animateCartItemRemoval(tombol.closest(".cart-item"), ticker);
    return;
  }

  if (tombol.dataset.cartAction === "increase") {
    itemKeranjang.quantity += 1;
  } else if (tombol.dataset.cartAction === "decrease") {
    itemKeranjang.quantity -= 1;
  }

  tombol.closest(".quantity-control").querySelector('[aria-live="polite"]').textContent =
    String(itemKeranjang.quantity);
  updateCartSummary();
}

function animateCartItemRemoval(itemElement, ticker) {
  if (!itemElement || itemElement.classList.contains("is-removing")) return;

  itemElement.classList.add("is-removing");
  let removalComplete = false;

  function finishRemoval() {
    if (removalComplete) return;
    removalComplete = true;
    keranjang = keranjang.filter((item) => item.product.ticker !== ticker);
    renderKeranjang();
  }

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    itemElement.getAnimations().length === 0
  ) {
    finishRemoval();
    return;
  }

  itemElement.addEventListener("animationend", finishRemoval, { once: true });
  window.setTimeout(finishRemoval, 300);
}

function handleClearCart() {
  if (keranjang.length === 0) return;
  keranjang = [];
  state.appliedVoucher = null;
  if (cartVoucherInput) cartVoucherInput.value = "";
  if (cartVoucherMsg) cartVoucherMsg.hidden = true;
  renderKeranjang();
  showToast("Keranjang berhasil dikosongkan", "info");
}

// 17. THEME TOGGLE & THEME-COLOR SYNC
function syncThemeColor(isModalOrDrawerOpen = false) {
  if (!themeColorMeta) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  if (isModalOrDrawerOpen) {
    themeColorMeta.setAttribute("content", isDark ? "#111a2b" : "#ffffff");
  } else {
    themeColorMeta.setAttribute("content", isDark ? "#080d18" : "#f8fafc");
  }
}

function setTheme(theme, animate = false) {
  const isDark = theme === "dark";
  const root = document.documentElement;

  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const toggleBounds = themeToggle.getBoundingClientRect();
    root.style.setProperty(
      "--theme-origin-x",
      `${toggleBounds.left + toggleBounds.width / 2}px`,
    );
    root.style.setProperty(
      "--theme-origin-y",
      `${toggleBounds.top + toggleBounds.height / 2}px`,
    );
    root.classList.add("theme-changing");
    window.clearTimeout(themeTransitionTimeout);
    themeTransitionTimeout = window.setTimeout(() => {
      root.classList.remove("theme-changing");
    }, 750);
  }

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
  );

  const sunPaths = [
    "M12 3v2m0 14v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M3 12h2m14 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41",
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  ];
  const moonPaths = ["M20.35 15.35A9 9 0 1 1 8.65 3.65a7 7 0 0 0 11.7 11.7Z"];

  themeToggleIcon.replaceChildren(
    createSvgIcon(isDark ? sunPaths : moonPaths, "0 0 24 24", "1.9"),
  );
  themeToggleLabel.textContent = isDark ? "Mode terang" : "Mode gelap";
  localStorage.setItem("gadgetverse-theme", isDark ? "dark" : "light");
  syncThemeColor();
}

function handleThemeToggle(event) {
  event.preventDefault();
  setTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
    true,
  );
}

// 18. DRAWER & MODAL MANAGEMENT (ACCESSIBLE, ESCAPE-KEY, FOCUS TRAP)
function openCart() {
  cartDrawer.hidden = false;
  cartBackdrop.hidden = false;
  document.body.classList.add("cart-open");
  cartButton.setAttribute("aria-expanded", "true");
  cartDrawer.setAttribute("aria-hidden", "false");
  syncThemeColor(true);
  updateDocumentTitle();
  window.requestAnimationFrame(() => {
    cartDrawer.classList.add("is-open");
    cartBackdrop.classList.add("is-visible");
  });
  cartCloseButton.focus();
}

function closeCart() {
  if (cartDrawer.hidden) return;

  cartDrawer.classList.remove("is-open");
  cartBackdrop.classList.remove("is-visible");
  document.body.classList.remove("cart-open");
  cartButton.setAttribute("aria-expanded", "false");
  cartDrawer.setAttribute("aria-hidden", "true");
  syncThemeColor(false);
  window.setTimeout(() => {
    if (!cartDrawer.classList.contains("is-open")) {
      cartDrawer.hidden = true;
      cartBackdrop.hidden = true;
      updateDocumentTitle();
      cartButton.focus();
    }
  }, 300);
}

// 19. PRODUCT DETAIL / QUICK VIEW MODAL
function openProductDetail(ticker) {
  const product = productsData.find((p) => p.ticker === ticker);
  if (!product) return;

  detailModalTitle.textContent = product.nama;
  detailModalBadge.textContent = `${product.kategori.toUpperCase()} · ${product.badgeText}`;

  detailModalBody.textContent = "";
  const frag = document.createDocumentFragment();

  // Modal Top Section (Image & Summary)
  const topRow = document.createElement("div");
  topRow.className = "modal-product-top";

  const imgBox = document.createElement("div");
  imgBox.className = "modal-product-imgbox";
  const img = document.createElement("img");
  img.src = product.gambar;
  img.alt = product.nama;
  imgBox.appendChild(img);

  const infoBox = document.createElement("div");
  infoBox.className = "modal-product-infobox";

  const priceTag = document.createElement("div");
  priceTag.className = "modal-price-wrap";

  const currentPrice = document.createElement("span");
  currentPrice.className = "modal-current-price";
  currentPrice.textContent = formatHarga(product.harga);

  const originalPrice = document.createElement("span");
  originalPrice.className = "modal-orig-price";
  originalPrice.textContent = formatHarga(Math.round(product.harga / (1 - product.diskon / 100)));

  const discBadge = document.createElement("span");
  discBadge.className = "modal-disc-badge";
  discBadge.textContent = `Diskon ${product.diskon}%`;

  priceTag.append(currentPrice, originalPrice, discBadge);

  const warrantyNotice = document.createElement("p");
  warrantyNotice.className = "modal-warranty-notice";
  warrantyNotice.textContent = `🛡️ ${product.garansi || "Garansi Resmi Distributor 1 Tahun"}`;

  const ratingSummary = document.createElement("p");
  ratingSummary.className = "modal-rating-summary";
  ratingSummary.textContent = `★ ${product.rating || "4.9"} dari 5 · ${product.reviewCount || 100}+ Pelanggan Terverifikasi`;

  const descFull = document.createElement("p");
  descFull.className = "modal-desc-full";
  descFull.textContent = product.deskripsi;

  // Installment Table Breakdown
  const installmentWrap = document.createElement("div");
  installmentWrap.className = "modal-installment-card";
  const installTitle = document.createElement("h4");
  installTitle.textContent = "Simulasi Cicilan Resmi 0% (Bebas Biaya Layanan)";

  const installGrid = document.createElement("div");
  installGrid.className = "modal-installment-grid";

  [3, 6, 12, 24].forEach((tenor) => {
    const item = document.createElement("div");
    item.className = "installment-pill";
    const tSpan = document.createElement("span");
    tSpan.className = "tenor-name";
    tSpan.textContent = `${tenor} Bulan`;
    const pSpan = document.createElement("strong");
    pSpan.className = "tenor-price";
    pSpan.textContent = `${formatHarga(Math.round(product.harga / tenor))}/bln`;
    item.append(tSpan, pSpan);
    installGrid.appendChild(item);
  });
  installmentWrap.append(installTitle, installGrid);

  // Stepper & Add to cart row
  const actionRow = document.createElement("div");
  actionRow.className = "modal-cta-row";

  let detailQty = 1;
  const qtyStepper = document.createElement("div");
  qtyStepper.className = "modal-qty-stepper";

  const btnMinus = document.createElement("button");
  btnMinus.type = "button";
  btnMinus.textContent = "−";
  btnMinus.addEventListener("click", () => {
    if (detailQty > 1) {
      detailQty -= 1;
      qtyDisplay.textContent = String(detailQty);
    }
  });

  const qtyDisplay = document.createElement("span");
  qtyDisplay.textContent = "1";

  const btnPlus = document.createElement("button");
  btnPlus.type = "button";
  btnPlus.textContent = "+";
  btnPlus.addEventListener("click", () => {
    detailQty += 1;
    qtyDisplay.textContent = String(detailQty);
  });

  qtyStepper.append(btnMinus, qtyDisplay, btnPlus);

  const btnAddToCart = document.createElement("button");
  btnAddToCart.type = "button";
  btnAddToCart.className = "modal-btn-buy";
  btnAddToCart.textContent = "Tambah ke Keranjang";
  btnAddToCart.addEventListener("click", () => {
    handleBeli(ticker, detailQty);
    closeProductDetail();
  });

  const btnFavModal = document.createElement("button");
  btnFavModal.type = "button";
  btnFavModal.className = "modal-btn-fav";
  btnFavModal.textContent = wishlist.has(ticker) ? "Tersimpan di Favorit" : "+ Simpan Favorit";
  btnFavModal.addEventListener("click", () => {
    handleWishlistToggle(ticker);
    btnFavModal.textContent = wishlist.has(ticker) ? "Tersimpan di Favorit" : "+ Simpan Favorit";
  });

  actionRow.append(qtyStepper, btnAddToCart, btnFavModal);
  infoBox.append(priceTag, warrantyNotice, ratingSummary, descFull, installmentWrap, actionRow);
  topRow.append(imgBox, infoBox);

  // Full Specifications Matrix Table
  const specSection = document.createElement("div");
  specSection.className = "modal-specs-section";

  const specTitle = document.createElement("h3");
  specTitle.textContent = "Spesifikasi Teknis Lengkap";

  const specTable = document.createElement("div");
  specTable.className = "modal-specs-table";

  const specRows = [
    { name: "Brand & Model", val: `${product.nama} (${product.kategori})` },
    { name: "Chipset & Pemrosesan", val: product.specs?.chipset || "-" },
    { name: "Layar & Tampilan", val: product.specs?.layar || "-" },
    { name: "Baterai & Pengisian", val: product.specs?.baterai || "-" },
    { name: "Kamera & Audio", val: product.specs?.kameraAudio || "-" },
    { name: "Kelengkapan dalam Kotak", val: product.specs?.isiKotak || "-" },
    { name: "Status Garansi", val: product.garansi },
    { name: "Ketersediaan Stok", val: product.stokText },
  ];

  specRows.forEach((r) => {
    const row = document.createElement("div");
    row.className = "modal-specs-row";
    const cellName = document.createElement("div");
    cellName.className = "spec-cell-name";
    cellName.textContent = r.name;
    const cellVal = document.createElement("div");
    cellVal.className = "spec-cell-val";
    cellVal.textContent = r.val;
    row.append(cellName, cellVal);
    specTable.appendChild(row);
  });

  specSection.append(specTitle, specTable);
  frag.append(topRow, specSection);
  detailModalBody.appendChild(frag);

  detailModal.hidden = false;
  detailModalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  syncThemeColor(true);
  detailModalClose.focus();
}

function closeProductDetail() {
  if (detailModal.hidden) return;
  detailModal.hidden = true;
  detailModalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  syncThemeColor(false);
}

// 20. PRODUCT COMPARISON DOCK & COMPARISON MODAL
function updateCompareDock() {
  const count = compareSet.size;
  compareCountBadge.textContent = `${count} / 3 dipilih`;
  compareOpenBtn.disabled = count < 2;

  if (count === 0) {
    compareDock.hidden = true;
    return;
  }

  compareDock.hidden = false;
  compareDockItems.textContent = "";

  const frag = document.createDocumentFragment();
  compareSet.forEach((ticker) => {
    const product = productsData.find((p) => p.ticker === ticker);
    if (!product) return;

    const chip = document.createElement("div");
    chip.className = "compare-dock-chip";

    const thumb = document.createElement("img");
    thumb.src = product.gambar;
    thumb.alt = product.nama;

    const name = document.createElement("span");
    name.textContent = product.nama.split(" ")[0] + " " + (product.nama.split(" ")[1] || "");

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "compare-chip-remove";
    removeBtn.setAttribute("aria-label", `Hapus ${product.nama} dari perbandingan`);
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      toggleCompareItem(ticker);
    });

    chip.append(thumb, name, removeBtn);
    frag.appendChild(chip);
  });

  compareDockItems.appendChild(frag);
}

function toggleCompareItem(ticker) {
  if (compareSet.has(ticker)) {
    compareSet.delete(ticker);
  } else {
    if (compareSet.size >= 3) {
      showToast("Maksimal membandingkan 3 produk sekaligus.", "info");
      return;
    }
    compareSet.add(ticker);
    showToast("Produk ditambahkan ke perbandingan.");
  }

  updateCompareDock();

  // Update card compare button label
  const card = elemenProduk.querySelector(`.card[data-ticker="${ticker}"]`);
  if (card) {
    const btn = card.querySelector(".btn-card-compare");
    if (btn) {
      const isComp = compareSet.has(ticker);
      btn.setAttribute("aria-pressed", String(isComp));
      btn.textContent = isComp ? "✓ Dibandingkan" : "+ Bandingkan";
    }
  }
}

function handleClearCompare() {
  compareSet.clear();
  updateCompareDock();
  elemenProduk.querySelectorAll(".btn-card-compare").forEach((btn) => {
    btn.setAttribute("aria-pressed", "false");
    btn.textContent = "+ Bandingkan";
  });
  showToast("Daftar perbandingan dikosongkan.", "info");
}

function handleOpenCompare() {
  if (compareSet.size < 2) return;

  const selectedProducts = productsData.filter((p) => compareSet.has(p.ticker));
  compareModalBody.textContent = "";

  const table = document.createElement("div");
  table.className = "compare-matrix-table";

  // Column headers (Products)
  const headerRow = document.createElement("div");
  headerRow.className = "matrix-row matrix-header-row";

  const featureColHeader = document.createElement("div");
  featureColHeader.className = "matrix-cell matrix-cell-feature";
  featureColHeader.textContent = "Spesifikasi Utama";
  headerRow.appendChild(featureColHeader);

  selectedProducts.forEach((p) => {
    const pCol = document.createElement("div");
    pCol.className = "matrix-cell matrix-cell-product";

    const pImg = document.createElement("img");
    pImg.src = p.gambar;
    pImg.alt = p.nama;

    const pTitle = document.createElement("h4");
    pTitle.textContent = p.nama;

    const pPrice = document.createElement("strong");
    pPrice.textContent = formatHarga(p.harga);

    const btnBuy = document.createElement("button");
    btnBuy.type = "button";
    btnBuy.className = "btn-matrix-buy";
    btnBuy.textContent = "Beli Sekarang";
    btnBuy.addEventListener("click", () => {
      handleBeli(p.ticker);
      handleCloseCompare();
    });

    pCol.append(pImg, pTitle, pPrice, btnBuy);
    headerRow.appendChild(pCol);
  });
  table.appendChild(headerRow);

  // Rows of comparison specs
  const comparisonFields = [
    { label: "Kategori", getVal: (p) => p.kategori },
    { label: "Chipset / Performa", getVal: (p) => p.specs?.chipset || p.tags[1] || "-" },
    { label: "Layar & Visual", getVal: (p) => p.specs?.layar || p.tags[2] || "-" },
    { label: "Baterai & Pengisian", getVal: (p) => p.specs?.baterai || p.tags[3] || "-" },
    { label: "Kamera & Audio", getVal: (p) => p.specs?.kameraAudio || "-" },
    { label: "Garansi Distributor", getVal: (p) => p.garansi },
    { label: "Rating Kepuasan", getVal: (p) => `★ ${p.rating} (${p.reviewCount} ulasan)` },
    { label: "Cicilan 0%", getVal: (p) => calculateInstallment(p.harga, 24) },
  ];

  comparisonFields.forEach((field) => {
    const row = document.createElement("div");
    row.className = "matrix-row";

    const labelCell = document.createElement("div");
    labelCell.className = "matrix-cell matrix-cell-feature";
    labelCell.textContent = field.label;
    row.appendChild(labelCell);

    selectedProducts.forEach((p) => {
      const valCell = document.createElement("div");
      valCell.className = "matrix-cell matrix-cell-product";
      valCell.textContent = field.getVal(p);
      row.appendChild(valCell);
    });

    table.appendChild(row);
  });

  compareModalBody.appendChild(table);

  compareModal.hidden = false;
  compareModalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  syncThemeColor(true);
  compareModalClose.focus();
}

function handleCloseCompare() {
  if (compareModal.hidden) return;
  compareModal.hidden = true;
  compareModalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  syncThemeColor(false);
}

// 21. CHECKOUT MODAL & ORDER CREATION
function handleOpenCheckout() {
  if (keranjang.length === 0) {
    showToast("Keranjangmu masih kosong.", "info");
    return;
  }

  closeCart();
  checkoutModalBody.textContent = "";

  const totalItem = keranjang.reduce((total, item) => total + item.quantity, 0);
  const subtotal = keranjang.reduce(
    (total, item) => total + item.product.harga * item.quantity,
    0,
  );

  let discountAmount = 0;
  if (state.appliedVoucher && subtotal > 0) {
    if (state.appliedVoucher.type === "percent") {
      discountAmount = Math.round(subtotal * state.appliedVoucher.discount);
    } else {
      discountAmount = Math.min(subtotal, state.appliedVoucher.discount);
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount);

  const container = document.createElement("div");
  container.className = "checkout-flow-container";

  // Order summary box
  const summaryBox = document.createElement("div");
  summaryBox.className = "checkout-summary-box";

  const sumTitle = document.createElement("h3");
  sumTitle.textContent = `Ringkasan Pesanan (${totalItem} Produk)`;

  const itemsList = document.createElement("div");
  itemsList.className = "checkout-items-preview";

  keranjang.forEach((item) => {
    const itemRow = document.createElement("div");
    itemRow.className = "checkout-item-preview-row";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${item.product.nama} × ${item.quantity}`;
    const priceSpan = document.createElement("strong");
    priceSpan.textContent = formatHarga(item.product.harga * item.quantity);
    itemRow.append(nameSpan, priceSpan);
    itemsList.appendChild(itemRow);
  });

  const totalsBox = document.createElement("div");
  totalsBox.className = "checkout-totals-box";

  const rowSubtotal = document.createElement("div");
  rowSubtotal.className = "checkout-totals-row";
  const subLabel = document.createElement("span");
  subLabel.textContent = "Subtotal Produk";
  const subVal = document.createElement("span");
  subVal.textContent = formatHarga(subtotal);
  rowSubtotal.append(subLabel, subVal);

  const rowOngkir = document.createElement("div");
  rowOngkir.className = "checkout-totals-row";
  const ongkirLabel = document.createElement("span");
  ongkirLabel.textContent = "Ongkos Kirim & Asuransi Flagship";
  const ongkirVal = document.createElement("strong");
  ongkirVal.className = "text-green";
  ongkirVal.textContent = "GRATIS (Promo 11.11)";
  rowOngkir.append(ongkirLabel, ongkirVal);

  totalsBox.append(rowSubtotal, rowOngkir);

  if (discountAmount > 0) {
    const rowDisc = document.createElement("div");
    rowDisc.className = "checkout-totals-row";
    const discLabel = document.createElement("span");
    discLabel.textContent = `Voucher (${state.appliedVoucher.code})`;
    const discVal = document.createElement("strong");
    discVal.className = "text-orange";
    discVal.textContent = `-${formatHarga(discountAmount)}`;
    rowDisc.append(discLabel, discVal);
    totalsBox.appendChild(rowDisc);
  }

  const rowGrand = document.createElement("div");
  rowGrand.className = "checkout-totals-row checkout-grand-row";
  const grandLabel = document.createElement("strong");
  grandLabel.textContent = "Total Pembayaran";
  const grandVal = document.createElement("strong");
  grandVal.className = "text-blue";
  grandVal.textContent = formatHarga(grandTotal);
  rowGrand.append(grandLabel, grandVal);
  totalsBox.appendChild(rowGrand);

  summaryBox.append(sumTitle, itemsList, totalsBox);

  // Form details
  const formBox = document.createElement("form");
  formBox.className = "checkout-form-box";
  formBox.addEventListener("submit", (e) => e.preventDefault());

  const formTitle = document.createElement("h3");
  formTitle.textContent = "Data Pengiriman Resmi";

  const groupNama = document.createElement("div");
  groupNama.className = "form-group";
  const lblNama = document.createElement("label");
  lblNama.textContent = "Nama Lengkap Penerima";
  const inNama = document.createElement("input");
  inNama.type = "text";
  inNama.required = true;
  inNama.placeholder = "mis. Christian Ronaldo";
  inNama.id = "co-nama";
  groupNama.append(lblNama, inNama);

  const groupWA = document.createElement("div");
  groupWA.className = "form-group";
  const lblWA = document.createElement("label");
  lblWA.textContent = "Nomor WhatsApp / HP Aktif";
  const inWA = document.createElement("input");
  inWA.type = "tel";
  inWA.required = true;
  inWA.placeholder = "mis. 081234567890";
  inWA.id = "co-wa";
  groupWA.append(lblWA, inWA);

  const groupAlamat = document.createElement("div");
  groupAlamat.className = "form-group";
  const lblAlamat = document.createElement("label");
  lblAlamat.textContent = "Alamat Lengkap Pengiriman";
  const inAlamat = document.createElement("textarea");
  inAlamat.rows = 2;
  inAlamat.required = true;
  inAlamat.placeholder = "Nama jalan, nomor rumah, RT/RW, kecamatan, kota & kode pos...";
  inAlamat.id = "co-alamat";
  groupAlamat.append(lblAlamat, inAlamat);

  const groupMetode = document.createElement("div");
  groupMetode.className = "form-group";
  const lblMetode = document.createElement("label");
  lblMetode.textContent = "Metode Pembayaran Resmi";
  const selMetode = document.createElement("select");
  selMetode.id = "co-metode";

  const metodeOpts = [
    "QRIS Instan (BCA, Mandiri, GoPay, OVO, ShopeePay)",
    "BCA Virtual Account (Verifikasi Otomatis)",
    "Mandiri Virtual Account",
    "Cicilan 0% Kartu Kredit (3, 6, 12, 24 Bulan)",
    "COD (Bayar di Tempat Kurir Khusus Flagship)",
  ];

  metodeOpts.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    selMetode.appendChild(opt);
  });
  groupMetode.append(lblMetode, selMetode);

  const btnSubmit = document.createElement("button");
  btnSubmit.type = "button";
  btnSubmit.className = "btn-submit-order";
  btnSubmit.textContent = `Konfirmasi & Bayar ${formatHarga(grandTotal)}`;
  btnSubmit.addEventListener("click", () => {
    if (!inNama.value.trim() || !inWA.value.trim() || !inAlamat.value.trim()) {
      showToast("Harap lengkapi nama, nomor WhatsApp, dan alamat pengiriman.", "info");
      return;
    }

    btnSubmit.disabled = true;
    btnSubmit.textContent = "Memproses Pesanan Resmi...";

    window.setTimeout(() => {
      renderReceiptScreen({
        nama: inNama.value.trim(),
        wa: inWA.value.trim(),
        alamat: inAlamat.value.trim(),
        metode: selMetode.value,
        grandTotal,
        totalItem,
      });
    }, 1200);
  });

  formBox.append(formTitle, groupNama, groupWA, groupAlamat, groupMetode, btnSubmit);
  container.append(summaryBox, formBox);
  checkoutModalBody.appendChild(container);

  checkoutModal.hidden = false;
  checkoutModalBackdrop.hidden = false;
  document.body.classList.add("modal-open");
  syncThemeColor(true);
  checkoutModalClose.focus();
}

function renderReceiptScreen(orderData) {
  const orderId = `GV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  checkoutModalBody.textContent = "";
  const wrap = document.createElement("div");
  wrap.className = "checkout-receipt-success";

  const iconSuccess = document.createElement("div");
  iconSuccess.className = "receipt-success-icon";
  iconSuccess.appendChild(createSvgIcon(["M5 13l4 4L19 7"], "0 0 24 24", "2.4"));

  const title = document.createElement("h3");
  title.textContent = "Pesanan Resmi Berhasil Dibuat!";

  const sub = document.createElement("p");
  sub.textContent = `Terima kasih, ${orderData.nama}. Faktur digital dan nomor resi telah dibuat.`;

  const receiptCard = document.createElement("div");
  receiptCard.className = "receipt-info-card";

  const rows = [
    { label: "Nomor Pesanan", val: orderId },
    { label: "Waktu Transaksi", val: new Date().toLocaleString("id-ID") },
    { label: "Metode Bayar", val: orderData.metode },
    { label: "Total Dibayar", val: formatHarga(orderData.grandTotal) },
    { label: "Penerima", val: `${orderData.nama} (${orderData.wa})` },
    { label: "Alamat", val: orderData.alamat },
    { label: "Status Pengiriman", val: "Diproses oleh Warehouse Resmi TAM/iBox (Estimasi Tiba 3 Jam)" },
  ];

  rows.forEach((r) => {
    const row = document.createElement("div");
    row.className = "receipt-row";
    const k = document.createElement("span");
    k.textContent = r.label;
    const v = document.createElement("strong");
    v.textContent = r.val;
    row.append(k, v);
    receiptCard.appendChild(row);
  });

  const actions = document.createElement("div");
  actions.className = "receipt-actions";

  const btnWA = document.createElement("a");
  btnWA.className = "btn-wa-share";
  btnWA.target = "_blank";
  btnWA.rel = "noopener noreferrer";
  const waMsg = encodeURIComponent(
    `Halo GadgetVerse Indonesia, saya ingin konfirmasi pesanan resmi:\nID: ${orderId}\nNama: ${orderData.nama}\nTotal: ${formatHarga(orderData.grandTotal)}\nMohon update pengirimannya. Terima kasih!`,
  );
  btnWA.href = `https://wa.me/6281234567890?text=${waMsg}`;
  btnWA.textContent = "Kirim Salinan ke WhatsApp Customer Service";

  const btnDone = document.createElement("button");
  btnDone.type = "button";
  btnDone.className = "btn-receipt-done";
  btnDone.textContent = "Selesai & Lanjut Belanja";
  btnDone.addEventListener("click", () => {
    keranjang = [];
    state.appliedVoucher = null;
    renderKeranjang();
    handleCloseCheckout();
    showToast("Selamat menikmati gadget baru resmimu!");
  });

  actions.append(btnWA, btnDone);
  wrap.append(iconSuccess, title, sub, receiptCard, actions);
  checkoutModalBody.appendChild(wrap);
}

function handleCloseCheckout() {
  if (checkoutModal.hidden) return;
  checkoutModal.hidden = true;
  checkoutModalBackdrop.hidden = true;
  document.body.classList.remove("modal-open");
  syncThemeColor(false);
}

// 22. INTERACTIVE IMEI CHECKER & TRADE-IN CALCULATOR
function handleImeiCheck() {
  const val = imeiInput.value.trim();
  if (!val) {
    imeiResult.hidden = false;
    imeiResult.className = "service-result is-error";
    imeiResult.textContent = "Silakan masukkan nomor IMEI atau Serial Number perangkatmu.";
    return;
  }

  imeiResult.hidden = false;
  imeiResult.className = "service-result is-loading";
  imeiResult.textContent = "Menghubungi basis data sertifikasi TAM & iBox Indonesia...";

  window.setTimeout(() => {
    imeiResult.className = "service-result is-success";
    imeiResult.textContent = "";

    const certBox = document.createElement("div");
    certBox.className = "imei-cert-box";

    const badge = document.createElement("div");
    badge.className = "cert-badge";
    badge.textContent = "✓ TERVERIFIKASI RESMI DISTRIBUTOR INDONESIA";

    const details = document.createElement("div");
    details.className = "cert-details";

    const d1 = document.createElement("p");
    d1.textContent = `Serial/IMEI: ${val}`;
    const d2 = document.createElement("p");
    d2.textContent = "Status Garansi: Aktif Resmi hingga 2027 (Dilindungi Jaminan TAM/iBox)";
    const d3 = document.createElement("p");
    d3.textContent = "IMEI Kemenperin: Terdaftar Legal & Bebas Blokir Jaringan Seumur Hidup";

    details.append(d1, d2, d3);
    certBox.append(badge, details);
    imeiResult.appendChild(certBox);
    showToast("IMEI Berhasil diverifikasi!");
  }, 900);
}

function handleTradeinCalc() {
  const brand = tradeinBrand.value;
  const model = tradeinModel.value;
  const condition = tradeinCondition.value;

  let baseVal = 2000000;
  if (brand === "apple") baseVal += 2500000;
  if (brand === "samsung") baseVal += 1800000;
  if (brand === "xiaomi") baseVal += 1000000;

  if (model === "high") baseVal += 3000000;
  if (model === "mid") baseVal += 1500000;

  let mult = 1.0;
  if (condition === "grade-b") mult = 0.85;
  if (condition === "grade-c") mult = 0.7;

  const finalVal = Math.round(baseVal * mult);

  tradeinResult.hidden = false;
  tradeinResult.className = "service-result is-success";
  tradeinResult.textContent = "";

  const resBox = document.createElement("div");
  resBox.className = "tradein-res-box";

  const title = document.createElement("h4");
  title.textContent = "Taksiran Nilai Tukar Tambah:";

  const price = document.createElement("strong");
  price.className = "tradein-price";
  price.textContent = formatHarga(finalVal);

  const desc = document.createElement("p");
  desc.textContent = "Gunakan kode promo TRADEIN2026 di keranjang untuk potongan instan Rp 400.000 ekstra!";

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "tradein-voucher-btn";
  copyBtn.textContent = "Pasang Voucher TRADEIN2026";
  copyBtn.addEventListener("click", () => {
    cartVoucherInput.value = "TRADEIN2026";
    openCart();
    handleApplyVoucher();
  });

  resBox.append(title, price, desc, copyBtn);
  tradeinResult.appendChild(resBox);
  showToast(`Estimasi trade-in: ${formatHarga(finalVal)}`);
}

// 23. EVENT LISTENERS SETUP (PURE FUNCTION REFERENCES)
function handleSearch(event) {
  state.searchQuery = event.target.value;
  renderFilteredProducts();
}

function handleSearchFocus() {
  cari.parentElement.classList.add("is-focused");
}

function handleSearchBlur() {
  cari.parentElement.classList.remove("is-focused");
}

function handleSearchClear() {
  cari.value = "";
  state.searchQuery = "";
  renderFilteredProducts();
  cari.focus();
}

function handleTrendingClick(event) {
  const chip = event.target.closest("button[data-search-term]");
  if (!chip) return;
  const term = chip.dataset.searchTerm;
  cari.value = term;
  state.searchQuery = term;
  renderFilteredProducts();
  const catalogTarget = document.getElementById("katalog");
  if (catalogTarget) {
    catalogTarget.scrollIntoView({ behavior: "smooth" });
  }
}

function handleCategoryFilter(event) {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  categoryFilters.querySelectorAll(".category-filter").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn === button));
  });
  renderFilteredProducts();
}

function handlePriceFilter(event) {
  const button = event.target.closest("button[data-price]");
  if (!button) return;

  state.priceRange = button.dataset.price;
  priceFilters.querySelectorAll(".price-chip").forEach((btn) => {
    const isAct = btn === button;
    btn.classList.toggle("is-active", isAct);
    btn.setAttribute("aria-pressed", String(isAct));
  });
  renderFilteredProducts();
}

function handleProductSort(event) {
  state.sortBy = event.target.value;
  renderFilteredProducts();
}

function handleResetFilters() {
  cari.value = "";
  state.searchQuery = "";
  state.category = "all";
  state.priceRange = "all";
  state.sortBy = "featured";
  state.showWishlistOnly = false;

  categoryFilters.querySelectorAll(".category-filter").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.category === "all"));
  });

  priceFilters.querySelectorAll(".price-chip").forEach((btn) => {
    const isAct = btn.dataset.price === "all";
    btn.classList.toggle("is-active", isAct);
    btn.setAttribute("aria-pressed", String(isAct));
  });

  if (productSort) productSort.value = "featured";
  renderFilteredProducts();
  showToast("Semua filter telah direset.", "info");
}

function handleBrandFilter(event) {
  const brandCard = event.target.closest(".brand-item");
  if (!brandCard) return;

  const brandName = brandCard.dataset.brandName || brandCard.querySelector("span")?.textContent.trim();
  if (!brandName) return;

  const currentQuery = state.searchQuery.trim().toLocaleLowerCase("id-ID");
  const isSameBrand = currentQuery === brandName.toLocaleLowerCase("id-ID");

  const newQuery = isSameBrand ? "" : brandName;
  cari.value = newQuery;
  state.searchQuery = newQuery;
  state.category = "all";

  categoryFilters.querySelectorAll(".category-filter").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.category === "all"));
  });

  renderFilteredProducts();

  if (!isSameBrand) {
    const catalogTarget = document.getElementById("katalog");
    if (catalogTarget) {
      catalogTarget.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function handleCardClick(event) {
  const target = event.target;

  // Toggle inline specification
  if (target.matches('button[value="nhlight"]') || target.dataset.cardAction === "toggle-spec") {
    const card = target.closest(".card");
    const desk = card.querySelector(".container-desk");
    if (desk) {
      desk.hidden = !desk.hidden;
      const isOpen = !desk.hidden;
      target.setAttribute("aria-expanded", String(isOpen));
      desk.setAttribute("aria-expanded", String(isOpen));
    }
    return;
  }

  // Buy now / Add to cart
  if (target.matches('button[value="hlight"]') || target.dataset.cardAction === "buy") {
    const ticker = target.dataset.ticker;
    if (ticker) handleBeli(ticker);
    return;
  }

  // Wishlist toggle
  const wishlistBtn = target.closest('button[data-card-action="toggle-wishlist"]');
  if (wishlistBtn) {
    handleWishlistToggle(wishlistBtn.dataset.ticker);
    return;
  }

  // Compare toggle
  const compareBtn = target.closest('button[data-card-action="toggle-compare"]');
  if (compareBtn) {
    toggleCompareItem(compareBtn.dataset.ticker);
    return;
  }

  // Quick view / Full detail modal
  const quickViewTrigger = target.closest('[data-card-action="quick-view"]');
  if (quickViewTrigger) {
    openProductDetail(quickViewTrigger.dataset.ticker);
  }
}

function handleHeroAction(event) {
  const button = event.target.closest("button[data-scroll-target]");
  if (!button) return;

  const target = document.getElementById(button.dataset.scrollTarget);
  if (!target) return;

  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function handleFaqToggle(event) {
  const trigger = event.target.closest(".faq-trigger");
  if (!trigger) return;

  const answerId = trigger.getAttribute("aria-controls");
  const answer = answerId ? document.getElementById(answerId) : null;
  if (!answer) return;

  const willExpand = trigger.getAttribute("aria-expanded") !== "true";
  trigger.setAttribute("aria-expanded", String(willExpand));
  answer.hidden = !willExpand;
}

function handleSampleImeiClick(event) {
  const btn = event.target.closest(".imei-sample-btn");
  if (!btn) return;
  imeiInput.value = btn.dataset.sample;
  handleImeiCheck();
}

function handleDocumentKeydown(event) {
  if (event.key === "Escape") {
    closeCart();
    closeProductDetail();
    handleCloseCompare();
    handleCloseCheckout();
    return;
  }

  // Shortcut key "/" focuses the search bar
  if (
    event.key === "/" &&
    document.activeElement.tagName !== "INPUT" &&
    document.activeElement.tagName !== "TEXTAREA" &&
    document.activeElement.tagName !== "SELECT"
  ) {
    event.preventDefault();
    cari.focus();
    cari.select();
  }
}

// 24. GSAP SCROLL & HERO INITIALIZATION
function initScrollAnimations() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        target.classList.add("is-revealed");

        if (window.gsap) {
          window.gsap.fromTo(
            target,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
          );
        }
        observer.unobserve(target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
  );

  revealTargets.forEach((target) => observer.observe(target));

  if (window.gsap) {
    window.gsap.fromTo(
      ".hero-content > *, .hero-gadget",
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform,opacity",
      },
    );
  }
}

// 25. INITIALIZE ALL COMPONENTS & BIND LISTENERS
brandTicker(brandsData, totalElemen);
renderCategoryFilters();
renderFilteredProducts();
renderKeranjang();
updateWishlistUI();
updateCompareDock();

const savedTheme = localStorage.getItem("gadgetverse-theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

// Search & filter listeners
cari.addEventListener("input", handleSearch);
cari.addEventListener("focus", handleSearchFocus);
cari.addEventListener("blur", handleSearchBlur);
searchClearBtn.addEventListener("click", handleSearchClear);
if (trendingChips) trendingChips.addEventListener("click", handleTrendingClick);
categoryFilters.addEventListener("click", handleCategoryFilter);
if (priceFilters) priceFilters.addEventListener("click", handlePriceFilter);
if (productSort) productSort.addEventListener("change", handleProductSort);
if (resetFiltersBtn) resetFiltersBtn.addEventListener("click", handleResetFilters);
totalElemen.addEventListener("click", handleBrandFilter);
elemenProduk.addEventListener("click", handleCardClick);

// Header action listeners
wishlistToggle.addEventListener("click", handleWishlistFilterToggle);
themeToggle.addEventListener("click", handleThemeToggle);
cartButton.addEventListener("click", openCart);
cartCloseButton.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

// Cart drawer listeners
cartItems.addEventListener("click", handleCartQuantity);
if (cartVoucherApply) cartVoucherApply.addEventListener("click", handleApplyVoucher);
if (cartClearBtn) cartClearBtn.addEventListener("click", handleClearCart);
if (cartCheckoutBtn) cartCheckoutBtn.addEventListener("click", handleOpenCheckout);

// Modal listeners
if (detailModalClose) detailModalClose.addEventListener("click", closeProductDetail);
if (detailModalBackdrop) detailModalBackdrop.addEventListener("click", closeProductDetail);
if (compareDockOpen) compareDockOpen.addEventListener("click", handleOpenCompare);
if (compareDockClear) compareDockClear.addEventListener("click", handleClearCompare);
if (compareModalClose) compareModalClose.addEventListener("click", handleCloseCompare);
if (compareModalBackdrop) compareModalBackdrop.addEventListener("click", handleCloseCompare);
if (checkoutModalClose) checkoutModalClose.addEventListener("click", handleCloseCheckout);
if (checkoutModalBackdrop) checkoutModalBackdrop.addEventListener("click", handleCloseCheckout);

// Interactive service card listeners
if (imeiCheckBtn) imeiCheckBtn.addEventListener("click", handleImeiCheck);
const imeiSampleContainer = document.querySelector(".imei-samples");
if (imeiSampleContainer) imeiSampleContainer.addEventListener("click", handleSampleImeiClick);
if (tradeinCalcBtn) tradeinCalcBtn.addEventListener("click", handleTradeinCalc);

// Hero & FAQ listeners
const heroActions = document.querySelector(".button-upper");
const faqContainer = document.getElementById("faq-list");
if (heroActions) heroActions.addEventListener("click", handleHeroAction);
if (faqContainer) faqContainer.addEventListener("click", handleFaqToggle);

document.addEventListener("keydown", handleDocumentKeydown);
window.addEventListener("DOMContentLoaded", initScrollAnimations);
