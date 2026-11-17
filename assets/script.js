"use strict";

const brandsData = [
  { nama: "Apple iBox", ticker: "apple", altName: "Apple" },
  { nama: "Samsung TAM", ticker: "samsung", altName: "Samsung" },
  { nama: "Xiaomi", ticker: "xiaomi", altName: "Xiaomi" },
  { nama: "Google Pixel", ticker: "google", altName: "Google" },
  { nama: "Oppo TAM", ticker: "oppo", altName: "Oppo" },
  { nama: "Sony Audio", ticker: "sony", altName: "Sony" },
  { nama: "onePlus", ticker: "oneplus", altName: "Oneplus" },
];

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
      "Smartphone flagship Apple dengan kamera utama 48MP Pro, chip A17 Pro super cepat untuk gaming berat, bodi titanium kelas dirgantara, serta port USB-C 3.0 berkecepatan tinggi.",
    tags: [
      "Apple",
      "A17 Pro",
      "Titanium",
      "5G Ready",
      "Dynamic Island",
      "USB-C 3.0",
    ],
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
      "Fitur cerdas Galaxy AI, layar Dynamic AMOLED 2X super cerah, dan performa baterai awet sepanjang hari untuk menunjang aktivitas harian.",
    tags: [
      "Samsung",
      "Galaxy AI",
      "Exynos 2400",
      "AMOLED 2X",
      "50 MP Camera",
      "IP68 Waterproof",
    ],
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
    gambar: "assets/images/macbook-air-m3.svg",
    deskripsi:
      "Ultrabook super tipis tanpa kipas dengan chip Apple M3 8-core, layar Liquid Retina 13.6 inci tajam, MagSafe 3, dan daya tahan baterai hingga 18 jam.",
    tags: [
      "Apple",
      "Chip M3",
      "Liquid Retina",
      "18h Battery",
      "MagSafe 3",
      "Wi-Fi 6E",
    ],
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
    gambar: "assets/images/xiaomi-pad-7.svg",
    deskripsi:
      "Tablet produktivitas dengan layar 11.2 inci 3.2K 144Hz jernih, chipset Snapdragon 7+ Gen 3 bertenaga, quad speaker Dolby Atmos, dan pengisian cepat 45W Turbo.",
    tags: [
      "Xiaomi",
      "Snapdragon 7+ Gen 3",
      "3.2K 144Hz",
      "8850mAh",
      "45W Turbo",
      "HyperOS",
    ],
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
    gambar: "assets/images/galaxy-tab-s9-fe.svg",
    deskripsi:
      "Tablet tahan air dan debu bersertifikasi IP68 yang sudah termasuk S Pen presisi dalam paket penjualan, ideal untuk catatan kuliah maupun ilustrasi kreatif.",
    tags: [
      "Samsung",
      "Include S Pen",
      "IP68 Tablet",
      "90Hz Display",
      "8000mAh",
      "DeX Mode",
    ],
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
    gambar: "assets/images/oneplus-pad-2.svg",
    deskripsi:
      "Tablet flagship bertenaga Snapdragon 8 Gen 3 dengan rasio layar 7:5 ReadFit 12.1 inci 3K 144Hz, 6 speaker imersif, dan baterai 9510mAh 67W SuperVOOC.",
    tags: [
      "Oneplus",
      "Snapdragon 8 Gen 3",
      "12.1\" 3K 144Hz",
      "9510mAh",
      "67W SuperVOOC",
      "Open Canvas",
    ],
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
    gambar: "assets/images/pixel-watch-3.svg",
    deskripsi:
      "Smartwatch Wear OS 5 dengan layar Actua 2000 nits yang terang di bawah matahari, analitik lari & kebugaran Fitbit tingkat lanjut, serta deteksi denyut darurat.",
    tags: [
      "Google",
      "Wear OS 5",
      "Actua 2000 nits",
      "Fitbit Health",
      "Snapdragon W5",
      "5ATM",
    ],
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
    gambar: "assets/images/oppo-watch-x.svg",
    deskripsi:
      "Smartwatch tangguh berlapis kaca Sapphire Crystal dan bodi stainless steel, arsitektur dual-engine hemat daya hingga 100 jam, serta GPS dual-frequency presisi.",
    tags: [
      "Oppo",
      "Sapphire Glass",
      "100h Battery",
      "Dual-Freq GPS",
      "MIL-STD-810H",
      "Wear OS",
    ],
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
    gambar: "assets/images/sony-wh1000xm5.svg",
    deskripsi:
      "Headphone over-ear peredam bising terbaik di kelasnya dengan 8 mikrofon, prosesor ganda V1 + QN1, audio Hi-Res LDAC, serta baterai awet 30 jam.",
    tags: [
      "Sony",
      "Active Noise Cancelling",
      "30h Battery",
      "Hi-Res LDAC",
      "Multipoint",
      "8 Mic Call",
    ],
  },
];

function brandTicker(daftarBrand, elemenBrand) {
  if (!elemenBrand) return;

  elemenBrand.textContent = "";
  const pecahan = document.createDocumentFragment();

  daftarBrand.forEach((i) => {
    const item = document.createElement("div");
    item.className = "brand-item";

    const gambar = document.createElement("img");
    gambar.src = `assets/images/brand-${i.ticker}.png`;
    gambar.alt = i.ticker;

    const nama = document.createElement("span");
    nama.textContent = i.altName;

    item.append(gambar, nama);
    pecahan.appendChild(item);
  });

  elemenBrand.appendChild(pecahan);
}

function getProducts(daftarProduk, elemenProduk) {
  if (!elemenProduk) return;

  elemenProduk.textContent = "";
  const pecahanProduk = document.createDocumentFragment();

  daftarProduk.forEach((p) => {
    const utama = document.createElement("div");
    utama.className = `card ${p.ticker}`;

    const kategori = document.createElement("div");
    kategori.className = "upspan";

    const dalamKategori1 = document.createElement("span");
    dalamKategori1.setAttribute("value", p.hotStatus ? "hot-org" : "cold-org");
    dalamKategori1.textContent = p.badgeText;

    const dalamKategori2 = document.createElement("span");
    dalamKategori2.setAttribute("value", "side-right");
    dalamKategori2.textContent = p.kategori;

    const gambarProduk = document.createElement("div");
    gambarProduk.className = "img";

    const diskon = document.createElement("span");
    diskon.setAttribute("value", "disc");
    diskon.textContent = `-${p.diskon}%`;

    const asset = document.createElement("img");
    asset.src = p.gambar;
    asset.alt = p.nama;

    const harga = document.createElement("span");
    harga.setAttribute("value", "rp");
    harga.textContent = `Rp. ${p.harga.toLocaleString("id-ID")}`;

    const judul = document.createElement("h2");
    judul.textContent = p.nama;

    const keterangan = document.createElement("p");
    keterangan.textContent = p.deskripsi;

    const tag = document.createElement("div");
    tag.className = "tag-item";

    p.tags.forEach((param) => {
      const isiTag = document.createElement("span");
      isiTag.textContent = param;
      tag.append(isiTag);
    });

    const desk = document.createElement("div");
    desk.classList.add("container-desk");
    desk.hidden = true;
    desk.setAttribute("aria-expanded", "false");
    desk.textContent = `Dilengkapi dengan ${p.tags.join(", ")} `;

    const beliSpec = document.createElement("div");
    beliSpec.dataset.ticker = p.ticker;
    beliSpec.className = "button";

    const beli = document.createElement("button");
    beli.setAttribute("value", "hlight");
    beli.dataset.ticker = p.ticker;
    beli.textContent = "Beli Sekarang";

    const spec = document.createElement("button");
    spec.setAttribute("value", "nhlight");
    spec.textContent = "Spesifikasi";

    kategori.append(dalamKategori1, dalamKategori2);
    gambarProduk.append(diskon, asset);
    beliSpec.append(beli, spec);
    utama.append(
      kategori,
      gambarProduk,
      harga,
      judul,
      keterangan,
      tag,
      desk,
      beliSpec,
    );
    pecahanProduk.appendChild(utama);
  });
  elemenProduk.appendChild(pecahanProduk);
}

const totalElemen = document.querySelector(".brand-tag");
brandTicker(brandsData, totalElemen);
const elemenProduk = document.getElementById("main");
getProducts(productsData, elemenProduk);

const cari = document.querySelector(".live-input input");
const searchResults = document.getElementById("search-results");
const categoryFilters = document.getElementById("category-filters");
let activeCategory = "all";

let keranjang = [];
const cartButton = document.getElementById("cart-id");
const cartDrawer = document.getElementById("cart-drawer");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartCloseButton = document.getElementById("cart-close");
const cartItems = document.getElementById("cart-items");
const cartItemCount = document.getElementById("cart-item-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const themeToggle = document.getElementById("theme-toggle");
const themeToggleIcon = themeToggle.querySelector(".theme-toggle-icon");
const themeToggleLabel = document.getElementById("theme-toggle-label");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const toastRegion = document.getElementById("toast-region");
let themeTransitionTimeout;
let toastTimeout;

function renderCategoryFilters() {
  const categories = [...new Set(productsData.map((product) => product.kategori))];
  const options = [{ value: "all", label: "Semua produk" }].concat(
    categories.map((category) => ({ value: category, label: category })),
  );
  const fragment = document.createDocumentFragment();

  options.forEach(({ value, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-filter";
    button.dataset.category = value;
    button.setAttribute("aria-pressed", String(value === activeCategory));
    button.textContent = label;
    fragment.appendChild(button);
  });

  categoryFilters.replaceChildren(fragment);
}

function syncBrandSelectionUI() {
  const query = cari.value.trim().toLocaleLowerCase("id-ID");
  totalElemen.querySelectorAll(".brand-item").forEach((brandCard) => {
    const label =
      brandCard.querySelector("span")?.textContent.trim().toLocaleLowerCase("id-ID") ||
      "";
    const isSelected = Boolean(label) && query === label;
    brandCard.classList.toggle("is-active", isSelected);
    brandCard.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateDocumentTitle() {
  const defaultTitle = "GadgetVerse — Katalog Gadget & Aksesori Resmi";
  if (cartDrawer && !cartDrawer.hidden) {
    const totalItem = keranjang.reduce((total, item) => total + item.quantity, 0);
    document.title = `Keranjang (${totalItem}) | GadgetVerse`;
    return;
  }
  const query = cari.value.trim();
  if (activeCategory !== "all" && query) {
    document.title = `${activeCategory} · "${query}" | GadgetVerse`;
  } else if (activeCategory !== "all") {
    document.title = `${activeCategory} · Katalog | GadgetVerse`;
  } else if (query) {
    document.title = `Cari "${query}" | GadgetVerse`;
  } else {
    document.title = defaultTitle;
  }
}

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
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.055,
        ease: "power3.out",
        clearProps: "transform,opacity",
      },
    );
  }
}

function renderFilteredProducts() {
  const input = cari.value.trim().toLocaleLowerCase("id-ID");
  const keywords = input.split(/\s+/).filter(Boolean);
  const hasilFilter = productsData.filter((product) => {
    const searchableText = [
      product.nama,
      product.kategori,
      product.badgeText,
      product.deskripsi,
      ...product.tags,
    ]
      .join(" ")
      .toLocaleLowerCase("id-ID");

    const matchesSearch = keywords.every((keyword) =>
      searchableText.includes(keyword),
    );
    const matchesCategory =
      activeCategory === "all" || product.kategori === activeCategory;

    return matchesSearch && matchesCategory;
  });

  elemenProduk.classList.toggle(
    "search-active",
    input.length > 0 || activeCategory !== "all",
  );
  elemenProduk.textContent = "";
  searchResults.textContent = `Menampilkan ${hasilFilter.length} dari ${productsData.length} produk${
    activeCategory !== "all" ? ` · ${activeCategory}` : ""
  }${input ? ` · pencarian "${cari.value.trim()}"` : ""}`;

  if (hasilFilter.length === 0) {
    const notFound = document.createElement("p");
    notFound.className = "search-empty";
    notFound.textContent =
      activeCategory === "all"
        ? "Produk tidak ditemukan. Coba kata kunci lain."
        : `Belum ada produk${input ? " yang cocok" : ""} di kategori ini.`;
    elemenProduk.appendChild(notFound);
  } else {
    getProducts(hasilFilter, elemenProduk);
    animateProductCards();
  }

  syncBrandSelectionUI();
  updateDocumentTitle();
}

function handleSearch() {
  renderFilteredProducts();
}

function handleCategoryFilter(event) {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  categoryFilters
    .querySelectorAll(".category-filter")
    .forEach((filterButton) => {
      filterButton.setAttribute(
        "aria-pressed",
        String(filterButton === button),
      );
    });
  renderFilteredProducts();
}

function handleBrandFilter(event) {
  const brandCard = event.target.closest(".brand-item");
  if (!brandCard) return;

  const brandName = brandCard.querySelector("span")?.textContent.trim();
  if (!brandName) return;

  const currentQuery = cari.value.trim().toLocaleLowerCase("id-ID");
  const isSameBrand = currentQuery === brandName.toLocaleLowerCase("id-ID");

  cari.value = isSameBrand ? "" : brandName;
  activeCategory = "all";
  categoryFilters
    .querySelectorAll(".category-filter")
    .forEach((filterButton) => {
      filterButton.setAttribute(
        "aria-pressed",
        String(filterButton.dataset.category === "all"),
      );
    });

  renderFilteredProducts();

  if (!isSameBrand) {
    const catalogTarget = document.getElementById("katalog");
    if (catalogTarget) {
      catalogTarget.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  }
}

renderCategoryFilters();
renderFilteredProducts();
cari.addEventListener("input", handleSearch);
categoryFilters.addEventListener("click", handleCategoryFilter);
totalElemen.addEventListener("click", handleBrandFilter);

function createSvgIcon(pathDataList, viewBox = "0 0 24 24") {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", viewBox);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  pathDataList.forEach((d) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.9");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
  });

  return svg;
}

function syncThemeColor(drawerOpen = !cartDrawer.hidden) {
  if (!themeColorMeta) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  if (drawerOpen) {
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
    createSvgIcon(isDark ? sunPaths : moonPaths),
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

const savedTheme = localStorage.getItem("gadgetverse-theme");
setTheme(savedTheme === "dark" ? "dark" : "light");
themeToggle.addEventListener("click", handleThemeToggle);

function formatHarga(harga) {
  return `Rp ${harga.toLocaleString("id-ID")}`;
}

function showCartToast(message) {
  if (!toastRegion) return;

  const toast = document.createElement("div");
  toast.className = "store-toast";

  const iconWrap = document.createElement("span");
  iconWrap.className = "store-toast-icon";
  iconWrap.setAttribute("aria-hidden", "true");
  iconWrap.appendChild(createSvgIcon(["M5 13l4 4L19 7"]));

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
  }, 2400);
}

function updateCartSummary() {
  const totalItem = keranjang.reduce((total, item) => total + item.quantity, 0);
  const subtotal = keranjang.reduce(
    (total, item) => total + item.product.harga * item.quantity,
    0,
  );
  cartButton.textContent = `Keranjang (${totalItem})`;
  cartItemCount.textContent = `${totalItem} produk dipilih`;
  cartSubtotal.textContent = formatHarga(subtotal);
  updateDocumentTitle();
}

function renderKeranjang() {
  const fragmen = document.createDocumentFragment();

  keranjang.forEach(({ product, quantity }, index) => {
    const item = document.createElement("article");
    item.className = "cart-item";
    item.style.setProperty("--item-index", index);

    const gambar = document.createElement("img");
    gambar.className = "cart-item-image";
    gambar.src = product.gambar;
    gambar.alt = product.nama;

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

    const ikonHapus = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    ikonHapus.setAttribute("viewBox", "0 0 24 24");
    ikonHapus.setAttribute("aria-hidden", "true");
    ikonHapus.setAttribute("focusable", "false");

    const ikonPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path",
    );
    ikonPath.setAttribute("d", "M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3");
    ikonPath.setAttribute("fill", "none");
    ikonPath.setAttribute("stroke", "currentColor");
    ikonPath.setAttribute("stroke-width", "1.7");
    ikonPath.setAttribute("stroke-linecap", "round");
    ikonPath.setAttribute("stroke-linejoin", "round");
    ikonHapus.appendChild(ikonPath);
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
      createSvgIcon([
        "M6 7h12l1 13H5L6 7Z",
        "M9 7V5a3 3 0 0 1 6 0v2",
      ]),
    );

    const title = document.createElement("h3");
    title.textContent = "Keranjangmu masih kosong";

    const description = document.createElement("p");
    description.textContent =
      "Yuk, temukan gadget favoritmu dan tambahkan ke sini.";

    const browseButton = document.createElement("button");
    browseButton.type = "button";
    browseButton.className = "cart-browse";
    browseButton.textContent = "Jelajahi produk";
    browseButton.addEventListener("click", closeCart);

    emptyState.append(icon, title, description, browseButton);
    cartItems.appendChild(emptyState);
  }
}

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

function handleDocumentKeydown(event) {
  if (event.key === "Escape") {
    closeCart();
    return;
  }

  if (event.key !== "Tab" || cartDrawer.hidden) return;

  const elemenFokus = cartDrawer.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
  const fokusPertama = elemenFokus[0];
  const fokusTerakhir = elemenFokus[elemenFokus.length - 1];

  if (event.shiftKey && document.activeElement === fokusPertama) {
    event.preventDefault();
    fokusTerakhir.focus();
  } else if (!event.shiftKey && document.activeElement === fokusTerakhir) {
    event.preventDefault();
    fokusPertama.focus();
  }
}

cartButton.addEventListener("click", openCart);
cartCloseButton.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", handleDocumentKeydown);

function handleBeli(event) {
  const beliTerpilih = event.target.dataset.ticker;
  const produkTerpilih = productsData.find(
    (item) => item.ticker === beliTerpilih,
  );

  if (!produkTerpilih) return;

  const itemKeranjang = keranjang.find(
    (item) => item.product.ticker === beliTerpilih,
  );

  if (itemKeranjang) {
    itemKeranjang.quantity += 1;
  } else {
    keranjang.push({ product: produkTerpilih, quantity: 1 });
  }

  renderKeranjang();
  showCartToast(`${produkTerpilih.nama} ditambahkan ke keranjang`);
  cartButton.classList.add("getpulse");
  cartButton.addEventListener(
    "animationend",
    () => cartButton.classList.remove("getpulse"),
    { once: true },
  );
}

function handleCartQuantity(event) {
  event.preventDefault();
  const tombol = event.target.closest("button[data-cart-action]");
  if (!tombol) return;

  const itemKeranjang = keranjang.find(
    (item) => item.product.ticker === tombol.dataset.ticker,
  );
  if (!itemKeranjang) return;

  if (tombol.dataset.cartAction === "remove") {
    animateCartItemRemoval(tombol.closest(".cart-item"), tombol.dataset.ticker);
    return;
  }

  if (tombol.dataset.cartAction === "decrease" && itemKeranjang.quantity === 1) {
    animateCartItemRemoval(tombol.closest(".cart-item"), tombol.dataset.ticker);
    return;
  }

  if (tombol.dataset.cartAction === "increase") {
    itemKeranjang.quantity += 1;
  } else if (tombol.dataset.cartAction === "decrease") {
    itemKeranjang.quantity -= 1;
  }

  tombol
    .closest(".quantity-control")
    .querySelector('[aria-live="polite"]').textContent = String(
    itemKeranjang.quantity,
  );
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

function handleDeskripsi(event) {
  const kartu = event.target.closest(".card");
  const deskTerpilih = kartu.querySelector(".container-desk");
  deskTerpilih.hidden = !deskTerpilih.hidden;

  const deskTerbuka = !deskTerpilih.hidden;
  event.target.setAttribute("aria-expanded", String(deskTerbuka));
  deskTerpilih.setAttribute("aria-expanded", String(deskTerbuka));
}

function handleAllCard(event) {
  if (event.target.matches(`button[value="hlight"]`)) {
    handleBeli(event);
  }
  if (event.target.matches(`button[value="nhlight"]`)) {
    handleDeskripsi(event);
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
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
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

const heroActions = document.querySelector(".button-upper");
const faqContainer = document.getElementById("faq-list");

if (heroActions) {
  heroActions.addEventListener("click", handleHeroAction);
}
if (faqContainer) {
  faqContainer.addEventListener("click", handleFaqToggle);
}

elemenProduk.addEventListener("click", handleAllCard);
cartItems.addEventListener("click", handleCartQuantity);
renderKeranjang();
window.addEventListener("DOMContentLoaded", initScrollAnimations);
