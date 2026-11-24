"use strict";

const DESIGNS = [
  {
    id: "original",
    name: "Original",
    badge: "Classic Blue",
    description: "Tampilan toko gadget modern bernuansa biru bersih.",
    swatches: ["#f8fafc", "#2563eb", "#0f172a"],
    favicon: "assets/favicon.svg",
    themeColor: {
      light: "#f8fafc",
      dark: "#080d18",
      drawerLight: "#ffffff",
      drawerDark: "#111a2b",
    },
  },
  {
    id: "mew",
    name: "Kucing",
    badge: "Tech-Cartoon",
    description: "Tema stiker hangat dengan maskot kucing & ilustrasi vektor.",
    swatches: ["#faf4ea", "#f8b84e", "#556841"],
    favicon: "assets/favicon-mew.svg",
    themeColor: {
      light: "#FAF4EA",
      dark: "#171613",
      drawerLight: "#FFFFFF",
      drawerDark: "#23211C",
    },
  },
  {
    id: "space",
    name: "Retro Space",
    badge: "70s Mission",
    description: "Estetika patch antariksa retro bernuansa navy, krem, dan oranye.",
    swatches: ["#1d2c3a", "#e14b32", "#f5eccf"],
    favicon: "assets/favicon-space.svg",
    themeColor: {
      light: "#F4ECD2",
      dark: "#15202B",
      drawerLight: "#FAF4DF",
      drawerDark: "#1D2C3A",
    },
  },
];

const DEFAULT_DESIGN_ID = "original";
const THEME_STORAGE_KEY = "gadgetverse-theme";
const DESIGN_STORAGE_KEY = "gadgetverse-design";

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
    gambar:
      "assets/images/Apple-MacBook-Air-2-up-hero-240304-lp.jpg.landing-big_2x.jpg",
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
    gambar: "assets/images/Xiaomi Pad 7 256GB.jpg",
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
    gambar: "assets/images/Samsung Galaxy Tab S9 FE 128GB.jpg",
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
    gambar: "assets/images/OnePlus Pad 2 256GB.jpg",
    deskripsi:
      "Tablet flagship bertenaga Snapdragon 8 Gen 3 dengan rasio layar 7:5 ReadFit 12.1 inci 3K 144Hz, 6 speaker imersif, dan baterai 9510mAh 67W SuperVOOC.",
    tags: [
      "Oneplus",
      "Snapdragon 8 Gen 3",
      '12.1" 3K 144Hz',
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
    gambar: "assets/images/Google Pixel Watch 3 45mm.jpg",
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
    gambar: "assets/images/OPPO Watch X Dual-Engine.jpg",
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
    gambar: "assets/images/Sony WH-1000XM5 Wireless ANC.jpg",
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

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Ignore storage errors in restricted browsing contexts
  }
}

function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Ignore storage errors in restricted browsing contexts
  }
}

function getDesignConfig(designId) {
  return (
    DESIGNS.find((design) => design.id === designId) ||
    DESIGNS.find((design) => design.id === DEFAULT_DESIGN_ID) ||
    DESIGNS[0]
  );
}

function getActiveDesignId() {
  return getDesignConfig(document.documentElement.dataset.design).id;
}

const themeToggle = document.getElementById("theme-toggle");
const themeToggleIcon = themeToggle?.querySelector(".theme-toggle-icon");
const themeToggleLabel = document.getElementById("theme-toggle-label");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
const siteFavicon = document.getElementById("site-favicon");
const toastRegion = document.getElementById("toast-region");

const designToggle = document.getElementById("design-toggle");
const designPanel = document.getElementById("design-panel");
const designOptionsContainer = document.getElementById("design-options");
const designActiveName = document.getElementById("design-active-name");

const cartButton = document.getElementById("cart-id");
const cartDrawer = document.getElementById("cart-drawer");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartCloseButton = document.getElementById("cart-close");
const cartItems = document.getElementById("cart-items");
const cartItemCount = document.getElementById("cart-item-count");
const cartSubtotal = document.getElementById("cart-subtotal");

const systemColorSchemeQuery = window.matchMedia
  ? window.matchMedia("(prefers-color-scheme: dark)")
  : null;
const supportsPopover = Object.hasOwn(HTMLElement.prototype, "popover");
const supportsAnchorPosition =
  typeof CSS !== "undefined" &&
  typeof CSS.supports === "function" &&
  CSS.supports("position-area: block-end");

let themeTransitionTimeout;
let toastTimeout;

function triggerRadialTransition(originElement) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  if (originElement) {
    const bounds = originElement.getBoundingClientRect();
    root.style.setProperty(
      "--theme-origin-x",
      `${bounds.left + bounds.width / 2}px`,
    );
    root.style.setProperty(
      "--theme-origin-y",
      `${bounds.top + bounds.height / 2}px`,
    );
  } else {
    root.style.setProperty("--theme-origin-x", "50%");
    root.style.setProperty("--theme-origin-y", "50%");
  }

  root.classList.remove("theme-changing");
  void root.offsetWidth;
  root.classList.add("theme-changing");
  window.clearTimeout(themeTransitionTimeout);
  themeTransitionTimeout = window.setTimeout(() => {
    root.classList.remove("theme-changing");
  }, 750);
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

function syncThemeColor(drawerOpen = Boolean(cartDrawer && !cartDrawer.hidden)) {
  if (!themeColorMeta) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  const palette = getDesignConfig(getActiveDesignId()).themeColor;
  if (drawerOpen) {
    themeColorMeta.setAttribute(
      "content",
      isDark ? palette.drawerDark : palette.drawerLight,
    );
  } else {
    themeColorMeta.setAttribute(
      "content",
      isDark ? palette.dark : palette.light,
    );
  }
}

function getSystemTheme() {
  return systemColorSchemeQuery && systemColorSchemeQuery.matches
    ? "dark"
    : "light";
}

function getResolvedTheme() {
  const stored = safeStorageGet(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return getSystemTheme();
}

function applyThemeUI(theme, animate = false) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";

  if (animate) {
    triggerRadialTransition(themeToggle);
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
    );
  }

  const sunPaths = [
    "M12 3v2m0 14v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M3 12h2m14 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41",
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  ];
  const moonPaths = ["M20.35 15.35A9 9 0 1 1 8.65 3.65a7 7 0 0 0 11.7 11.7Z"];

  if (themeToggleIcon) {
    themeToggleIcon.replaceChildren(
      createSvgIcon(isDark ? sunPaths : moonPaths),
    );
  }
  if (themeToggleLabel) {
    themeToggleLabel.textContent = isDark ? "Mode terang" : "Mode gelap";
  }

  syncThemeColor();
}

function syncColorSchemeMeta(storedValue) {
  if (!colorSchemeMeta) return;
  colorSchemeMeta.setAttribute(
    "content",
    storedValue === "dark" || storedValue === "light"
      ? storedValue
      : "light dark",
  );
}

function handleThemeToggle(event) {
  event.preventDefault();
  const currentlyDark = document.documentElement.dataset.theme === "dark";
  const targetTheme = currentlyDark ? "light" : "dark";
  const systemTheme = getSystemTheme();

  if (targetTheme === systemTheme) {
    safeStorageRemove(THEME_STORAGE_KEY);
    syncColorSchemeMeta(null);
  } else {
    safeStorageSet(THEME_STORAGE_KEY, targetTheme);
    syncColorSchemeMeta(targetTheme);
  }

  applyThemeUI(targetTheme, true);
}

function renderDesignOptions() {
  if (!designOptionsContainer) return;

  const activeDesignId = getActiveDesignId();
  const fragment = document.createDocumentFragment();

  DESIGNS.forEach((design) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "design-option";
    option.dataset.designOption = design.id;
    option.setAttribute("aria-pressed", String(design.id === activeDesignId));

    const swatch = document.createElement("span");
    swatch.className = "design-swatch";
    swatch.setAttribute("aria-hidden", "true");
    design.swatches.forEach((color) => {
      const dot = document.createElement("span");
      dot.style.backgroundColor = color;
      swatch.appendChild(dot);
    });

    const copy = document.createElement("span");
    copy.className = "design-option-copy";

    const head = document.createElement("span");
    head.className = "design-option-head";

    const name = document.createElement("span");
    name.className = "design-option-name";
    name.textContent = design.name;

    const badge = document.createElement("span");
    badge.className = "design-option-badge";
    badge.textContent = design.badge;

    head.append(name, badge);

    const desc = document.createElement("span");
    desc.className = "design-option-desc";
    desc.textContent = design.description;

    copy.append(head, desc);

    const check = document.createElement("span");
    check.className = "design-option-check";
    check.setAttribute("aria-hidden", "true");
    check.appendChild(createSvgIcon(["M5 13l4 4L19 7"]));

    option.append(swatch, copy, check);
    fragment.appendChild(option);
  });

  designOptionsContainer.replaceChildren(fragment);
}

function syncDesignUI(designId) {
  const config = getDesignConfig(designId);
  document.documentElement.dataset.design = config.id;

  if (designActiveName) {
    designActiveName.textContent = config.name;
  }

  if (siteFavicon) {
    siteFavicon.setAttribute("href", config.favicon);
  }

  if (designOptionsContainer) {
    designOptionsContainer
      .querySelectorAll("button[data-design-option]")
      .forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.designOption === config.id),
        );
      });
  }

  syncThemeColor();
}

function notifyLayoutChanged() {
  document.dispatchEvent(new CustomEvent("gadgetverse:layout-changed"));
}

function setDesign(designId, { animate = false, announce = false } = {}) {
  const config = getDesignConfig(designId);
  const changed = getActiveDesignId() !== config.id;

  if (animate && changed) {
    triggerRadialTransition(designToggle);
  }

  safeStorageSet(DESIGN_STORAGE_KEY, config.id);
  syncDesignUI(config.id);

  if (changed) {
    notifyLayoutChanged();
  }

  if (announce && changed) {
    showCartToast(`Desain tampilan diubah ke ${config.name}`);
  }
}

function isDesignPanelOpen() {
  if (!designPanel) return false;
  if (supportsPopover) {
    return designPanel.matches(":popover-open");
  }
  return designPanel.classList.contains("is-open") && !designPanel.hidden;
}

function positionDesignPanelFallback() {
  if (!designToggle || !designPanel || supportsAnchorPosition) return;
  const triggerRect = designToggle.getBoundingClientRect();
  const panelWidth = designPanel.offsetWidth || 280;
  const panelHeight = designPanel.offsetHeight || 190;
  const maxLeft = Math.max(12, window.innerWidth - panelWidth - 12);
  const left = Math.min(Math.max(12, triggerRect.left), maxLeft);
  let top = triggerRect.bottom + 8;

  if (
    top + panelHeight > window.innerHeight - 12 &&
    triggerRect.top - panelHeight - 8 >= 12
  ) {
    top = triggerRect.top - panelHeight - 8;
  }

  designPanel.style.left = `${left}px`;
  designPanel.style.top = `${top}px`;
}

function closeDesignPanel({ restoreFocus = false } = {}) {
  if (!designPanel || !isDesignPanelOpen()) return;
  if (supportsPopover) {
    designPanel.hidePopover();
  } else {
    designPanel.classList.remove("is-open");
    designPanel.hidden = true;
    if (designToggle) {
      designToggle.setAttribute("aria-expanded", "false");
    }
  }
  if (restoreFocus && designToggle) {
    designToggle.focus();
  }
}

function openDesignPanelFallback() {
  if (!designPanel || supportsPopover) return;
  designPanel.hidden = false;
  designPanel.classList.add("is-open");
  if (designToggle) {
    designToggle.setAttribute("aria-expanded", "true");
  }
  positionDesignPanelFallback();
}

function initDesignSwitcher() {
  const initialDesign = getDesignConfig(
    safeStorageGet(DESIGN_STORAGE_KEY) || DEFAULT_DESIGN_ID,
  );
  syncDesignUI(initialDesign.id);
  renderDesignOptions();

  if (!designToggle || !designPanel) return;

  if (supportsPopover) {
    designPanel.addEventListener("toggle", (event) => {
      const open = event.newState === "open";
      designToggle.setAttribute("aria-expanded", String(open));
      if (open) {
        window.requestAnimationFrame(positionDesignPanelFallback);
      }
    });
  } else {
    designPanel.hidden = true;
    designToggle.removeAttribute("popovertarget");
    designToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      if (isDesignPanelOpen()) {
        closeDesignPanel();
      } else {
        openDesignPanelFallback();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        isDesignPanelOpen() &&
        !designPanel.contains(event.target) &&
        !designToggle.contains(event.target)
      ) {
        closeDesignPanel();
      }
    });
  }

  if (designOptionsContainer) {
    designOptionsContainer.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-design-option]");
      if (!button) return;

      const selectedId = button.dataset.designOption;
      setDesign(selectedId, { animate: true, announce: true });
      closeDesignPanel({ restoreFocus: event.detail === 0 });
    });
  }

  window.addEventListener("resize", () => {
    if (isDesignPanelOpen()) {
      positionDesignPanelFallback();
    }
  });
}

function initScrollRulerFallback() {
  const progressFill = document.getElementById("scroll-progress-fill");
  if (!progressFill) return;

  if (
    typeof CSS !== "undefined" &&
    typeof CSS.supports === "function" &&
    CSS.supports("animation-timeline", "scroll()")
  ) {
    return;
  }

  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let frameRequested = false;

  function updateRulerProgress() {
    frameRequested = false;
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    progressFill.style.transform = `scaleX(${progress})`;
  }

  function scheduleUpdate() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateRulerProgress);
  }

  updateRulerProgress();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
}

// Initialize Theme, Design & Scroll Ruler across index.html and 404.html
const storedTheme = safeStorageGet(THEME_STORAGE_KEY);
syncColorSchemeMeta(storedTheme);
applyThemeUI(getResolvedTheme(), false);

if (themeToggle) {
  themeToggle.addEventListener("click", handleThemeToggle);
}

if (systemColorSchemeQuery) {
  systemColorSchemeQuery.addEventListener("change", () => {
    if (!safeStorageGet(THEME_STORAGE_KEY)) {
      applyThemeUI(getSystemTheme(), false);
    }
  });
}

window.addEventListener("storage", (event) => {
  if (event.key === THEME_STORAGE_KEY) {
    syncColorSchemeMeta(event.newValue);
    applyThemeUI(getResolvedTheme(), false);
  } else if (event.key === DESIGN_STORAGE_KEY) {
    syncDesignUI(event.newValue || DEFAULT_DESIGN_ID);
  }
});

initDesignSwitcher();
initScrollRulerFallback();

// =========================================================
// Catalog, Search, Filters & Cart Drawer (index.html)
// =========================================================
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
    desk.id = `spec-${p.ticker}`;
    desk.classList.add("container-desk");
    desk.hidden = true;
    desk.setAttribute("aria-expanded", "false");
    desk.textContent = `Dilengkapi dengan ${p.tags.join(", ")}`;

    const beliSpec = document.createElement("div");
    beliSpec.dataset.id = p.ticker;
    beliSpec.className = "button";

    const beli = document.createElement("button");
    beli.type = "button";
    beli.setAttribute("value", "hlight");
    beli.dataset.id = p.ticker;
    beli.textContent = "Beli Sekarang";

    const spec = document.createElement("button");
    spec.type = "button";
    spec.setAttribute("value", "nhlight");
    spec.setAttribute("aria-expanded", "false");
    spec.setAttribute("aria-controls", desk.id);
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
const elemenProduk = document.getElementById("main");
const cari = document.querySelector(".live-input input");
const searchResults = document.getElementById("search-results");
const categoryFilters = document.getElementById("category-filters");
let activeCategory = "all";
let keranjang = [];
let hasRenderedCatalogOnce = false;
const addedButtonTimers = new WeakMap();

function formatHarga(harga) {
  return `Rp ${harga.toLocaleString("id-ID")}`;
}

function updateDocumentTitle() {
  if (!elemenProduk || !cari) return;
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

function renderCategoryFilters() {
  if (!categoryFilters) return;
  const categories = [...new Set(productsData.map((product) => product.kategori))];
  const options = [{ value: "all", label: "Semua produk" }].concat(
    categories.map((category) => ({ value: category, label: category })),
  );
  const fragment = document.createDocumentFragment();

  options.forEach(({ value, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-filter";
    button.dataset.kategori = value;
    button.setAttribute("aria-pressed", String(value === activeCategory));
    button.textContent = label;
    fragment.appendChild(button);
  });

  categoryFilters.replaceChildren(fragment);
}

function syncBrandSelectionUI() {
  if (!totalElemen || !cari) return;
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

function setCatalogCardIndices() {
  if (!elemenProduk) return;
  elemenProduk.querySelectorAll(".card").forEach((card, index) => {
    card.style.setProperty("--card-index", String(index));
  });
}

function renderFilteredProducts(rawQuery = cari ? cari.value : "") {
  if (!elemenProduk || !cari || !searchResults) return;

  const trimmedQuery = rawQuery.trim();
  const input = trimmedQuery.toLocaleLowerCase("id-ID");
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
  }${input ? ` · pencarian "${trimmedQuery}"` : ""}`;

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
    setCatalogCardIndices();
  }

  const isFilterUpdate = hasRenderedCatalogOnce;
  hasRenderedCatalogOnce = true;

  syncBrandSelectionUI();
  updateDocumentTitle();

  document.dispatchEvent(
    new CustomEvent("gadgetverse:catalog-rendered", {
      detail: { isFilterUpdate, count: hasilFilter.length },
    }),
  );
}

function handleSearch(event) {
  renderFilteredProducts(event.target.value);
}

function handleSearchFocus(event) {
  const inputWrapper = event.target.closest(".live-input");
  if (inputWrapper) {
    inputWrapper.classList.add("is-focused");
  }
}

function handleSearchBlur(event) {
  const inputWrapper = event.target.closest(".live-input");
  if (inputWrapper) {
    inputWrapper.classList.remove("is-focused");
  }
}

function handleCategoryFilter(event) {
  const button = event.target.closest("button[data-kategori]");
  if (!button || !categoryFilters) return;

  activeCategory = button.dataset.kategori;
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
  if (!brandCard || !cari || !categoryFilters) return;

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
        String(filterButton.dataset.kategori === "all"),
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

function updateCartSummary() {
  if (!cartButton || !cartItemCount || !cartSubtotal) return;
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

function openCart() {
  if (!cartDrawer || !cartBackdrop || !cartButton || !cartCloseButton) return;
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
  if (!cartDrawer || !cartBackdrop || !cartButton || cartDrawer.hidden) return;

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

function renderKeranjang() {
  if (!cartItems) return;
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
    kurang.dataset.id = product.ticker;
    kurang.setAttribute("aria-label", `Kurangi ${product.nama}`);
    kurang.textContent = "−";

    const jumlah = document.createElement("span");
    jumlah.textContent = String(quantity);
    jumlah.setAttribute("aria-live", "polite");

    const tambah = document.createElement("button");
    tambah.type = "button";
    tambah.dataset.cartAction = "increase";
    tambah.dataset.id = product.ticker;
    tambah.setAttribute("aria-label", `Tambah ${product.nama}`);
    tambah.textContent = "+";

    const hapus = document.createElement("button");
    hapus.type = "button";
    hapus.className = "cart-remove";
    hapus.dataset.cartAction = "remove";
    hapus.dataset.id = product.ticker;
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

function handleDocumentKeydown(event) {
  if (event.key === "Escape") {
    if (isDesignPanelOpen() && !supportsPopover) {
      closeDesignPanel({ restoreFocus: true });
      return;
    }
    closeCart();
    return;
  }

  if (event.key !== "Tab" || !cartDrawer || cartDrawer.hidden) return;

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

function handleBeli(event) {
  const button = event.target.closest('button[value="hlight"]');
  if (!button) return;

  const beliTerpilih = button.dataset.id;
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

  button.classList.add("is-added");
  const addedLabel = document.createElement("span");
  addedLabel.textContent = "Ditambahkan";
  button.replaceChildren(createSvgIcon(["M5 13l4 4L19 7"]), addedLabel);

  const prevTimer = addedButtonTimers.get(button);
  if (prevTimer) window.clearTimeout(prevTimer);
  const nextTimer = window.setTimeout(() => {
    button.classList.remove("is-added");
    button.textContent = "Beli Sekarang";
  }, 1250);
  addedButtonTimers.set(button, nextTimer);

  if (cartButton) {
    cartButton.classList.add("getpulse");
    cartButton.addEventListener(
      "animationend",
      () => cartButton.classList.remove("getpulse"),
      { once: true },
    );
  }
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

function handleCartQuantity(event) {
  event.preventDefault();
  const tombol = event.target.closest("button[data-cart-action]");
  if (!tombol) return;

  const itemKeranjang = keranjang.find(
    (item) => item.product.ticker === tombol.dataset.id,
  );
  if (!itemKeranjang) return;

  if (tombol.dataset.cartAction === "remove") {
    animateCartItemRemoval(tombol.closest(".cart-item"), tombol.dataset.id);
    return;
  }

  if (tombol.dataset.cartAction === "decrease" && itemKeranjang.quantity === 1) {
    animateCartItemRemoval(tombol.closest(".cart-item"), tombol.dataset.id);
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

function handleDeskripsi(event) {
  const button = event.target.closest('button[value="nhlight"]');
  if (!button) return;

  const kartu = button.closest(".card");
  const deskTerpilih = kartu.querySelector(".container-desk");
  deskTerpilih.hidden = !deskTerpilih.hidden;

  const deskTerbuka = !deskTerpilih.hidden;
  button.setAttribute("aria-expanded", String(deskTerbuka));
  deskTerpilih.setAttribute("aria-expanded", String(deskTerbuka));
  notifyLayoutChanged();
}

function handleAllCard(event) {
  if (event.target.closest('button[value="hlight"]')) {
    handleBeli(event);
  }
  if (event.target.closest('button[value="nhlight"]')) {
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
  notifyLayoutChanged();
}

document.addEventListener("keydown", handleDocumentKeydown);

if (totalElemen && elemenProduk && cari && categoryFilters) {
  brandTicker(brandsData, totalElemen);
  renderCategoryFilters();
  renderFilteredProducts();

  cari.addEventListener("input", handleSearch);
  cari.addEventListener("focus", handleSearchFocus);
  cari.addEventListener("blur", handleSearchBlur);
  categoryFilters.addEventListener("click", handleCategoryFilter);
  totalElemen.addEventListener("click", handleBrandFilter);
  elemenProduk.addEventListener("click", handleAllCard);
}

if (cartButton && cartCloseButton && cartBackdrop && cartItems) {
  cartButton.addEventListener("click", openCart);
  cartCloseButton.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
  cartItems.addEventListener("click", handleCartQuantity);
  renderKeranjang();
}

const heroActions = document.querySelector(".button-upper");
const faqContainer = document.getElementById("faq-list");

if (heroActions) {
  heroActions.addEventListener("click", handleHeroAction);
}
if (faqContainer) {
  faqContainer.addEventListener("click", handleFaqToggle);
}
