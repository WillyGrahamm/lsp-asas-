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
    nama: "Iphone 15 Pro 128GB Titanium",
    harga: 18999000,
    diskon: 5,
    kategori: "Featured Phone",
    badgeText: "PROMO UTAMA iBOX",
    badgeTipe: "sale",
    gambar: "assets/images/ip.jpeg",
    deskripsi:
      "Kamera utama 48MP Pro dengan sensor canggih, chip A17 Pro super cepat untuk gaming berat, bodi berbahan titanium kelas dirgantara, serta port USB-C universal berkecepatan tinggi.",
    tags: [
      "A17 Pro",
      "Titanium",
      "5G Ready",
      "Dynamic Island",
      "ProRes Video",
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
      "Galaxy AI",
      "Exynos 2400",
      "AMOLED 2X",
      "50 MP Camera",
      "IP68 Waterproof",
      "Super Fast Charge",
    ],
  },
  {
    ticker: "Pb-A10k-Pd",
    hotStatus: true,
    nama: "Powerbank Anker 10k PD",
    harga: 349000,
    diskon: 15,
    kategori: "Power Accessories",
    badgeText: "PILIHAN",
    badgeTipe: "sale",
    gambar: "assets/images/pb.jpeg",
    deskripsi:
      "Powerbank mungil berkecepatan 30W Power Delivery dengan kabel Type-C built-in yang praktis untuk pengisian daya di mana saja.",
    tags: [
      "A10000mAh",
      "30W PD",
      "Built-In Cable",
      "PowerIQ 3.0",
      "Trickle Charge",
      "Ultra Compact",
    ],
  },
  {
    ticker: "Tws-SR50i",
    hotStatus: false,
    nama: "TWS Soundcore R50i",
    harga: 199000,
    diskon: 20,
    kategori: "Audio Gadget",
    badgeText: "STOK TERBATAS",
    badgeTipe: "sale",
    gambar: "assets/images/tws.jpeg",
    deskripsi:
      "TWS bluetooth dengan bass mantap, tahan cipratan air PIX5, dan total daya betarai awet hingga 30 jam bersama charging case.",
    tags: [
      "Bluetooth 5.3",
      "IPX5 Water",
      "30h Playtime",
      "10mm Drivers",
      "BassUp Tech",
      "Soundcore App",
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
  searchResults.textContent = `${hasilFilter.length} produk ditampilkan${
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
  }
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

renderCategoryFilters();
renderFilteredProducts();
cari.addEventListener("input", handleSearch);
categoryFilters.addEventListener("click", handleCategoryFilter);

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
let themeTransitionTimeout;

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
  themeToggleIcon.textContent = isDark ? "☀" : "☾";
  themeToggleLabel.textContent = isDark ? "Mode terang" : "Mode gelap";
  localStorage.setItem("gadgetverse-theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("gadgetverse-theme");
setTheme(savedTheme === "dark" ? "dark" : "light");
themeToggle.addEventListener("click", (event) => {
  event.preventDefault();
  setTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
    true,
  );
});

function formatHarga(harga) {
  return `Rp ${harga.toLocaleString("id-ID")}`;
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
    icon.textContent = "🛍";

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
  window.setTimeout(() => {
    if (!cartDrawer.classList.contains("is-open")) {
      cartDrawer.hidden = true;
      cartBackdrop.hidden = true;
      cartButton.focus();
    }
  }, 300);
}

cartButton.addEventListener("click", openCart);
cartCloseButton.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", (event) => {
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
});

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

  itemElement.addEventListener("animationend", finishRemoval, { once: true });
  window.setTimeout(finishRemoval, 300);
}

function handleDeskripsi(event) {
  const kartu = event.target.closest(".card");
  const deskTerpilih = kartu.querySelector(".container-desk");
  deskTerpilih.hidden = !deskTerpilih.hidden;

  const deskTerbuka = !deskTerpilih.hidden;
  event.target.setAttribute("aria-label", String(deskTerbuka));
}

function handleAllCard(event) {
  if (event.target.matches(`button[value="hlight"]`)) {
    handleBeli(event);
  }
  if (event.target.matches(`button[value="nhlight"]`)) {
    handleDeskripsi(event);
  }
}
elemenProduk.addEventListener("click", handleAllCard);
cartItems.addEventListener("click", handleCartQuantity);
renderKeranjang();
