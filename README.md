# Penilaian Akhir Semester 1 — GadgetVerse Interactive Catalog

Proyek penilaian akhir semester 1 bertema **Interactive Catalog & DOM Manipulation**. Proyek ini menguji kemampuan dalam merender struktur DOM dinamis dari array JavaScript, serta mengimplementasikan interaktivitas berbasis *events* tanpa reload halaman, mengadopsi standar website e-commerce gadget flagship profesional (seperti Apple Store, Eraspace, dan iBox).

## Skenario & Fitur Utama

Aplikasi katalog **GadgetVerse** menyajikan katalog gadget & aksesori yang interaktif dengan data statis bawaan:

1. **Dynamic DOM Rendering**: Brand dan katalog produk dibuat secara dinamis menggunakan `document.createElement`, `DocumentFragment`, dan `textContent` tanpa `innerHTML`.
2. **Live Search & Keyboard Shortcut**: Pengguna mengetik di kolom pencarian (`input` event) → daftar produk langsung terfilter secara real-time berdasarkan nama, kategori, spesifikasi, atau tag. Tersedia tombol cepat `/` untuk fokus ke kolom pencarian dan tombol hapus instan `✕`.
3. **Filter Kategori & Budget**: Pengguna memilih tombol kategori (`data-category`) serta rentang budget harga (< 6 Jt, 6-12 Jt, > 12 Jt) → katalog menyesuaikan secara real-time.
4. **Sorting Multi-Kriteria**: Pengguna dapat mengurutkan katalog berdasarkan Rekomendasi Unggulan, Harga Terendah, Harga Tertinggi, Diskon Terbesar, Rating Tertinggi, dan Nama (A-Z).
5. **Keranjang Belanja Interaktif**: Pengguna menekan tombol **Beli Sekarang** → angka counter keranjang di navbar bertambah secara real-time disertai feedback visual (animasi pulse). Dilengkapi fitur kupon promo (`GADGETVERSE`, `MEGASALE`, `IBOXRESMI`, `TRADEIN2026`) dan checkout resmi lengkap.
6. **Toggle Spesifikasi (Inline)**: Pengguna menekan tombol **Spesifikasi** → detail spesifikasi cepat produk muncul/sembunyi (*toggle* atribut `hidden` dan `aria-expanded`).
7. **Modal Detail Lengkap (Quick View)**: Pengguna dapat membuka modal dialog teknis lengkap untuk melihat visual resolusi tinggi, rincian tabel cicilan 0% per bulan, kelengkapan kotak, dan ulasan terverifikasi.
8. **Bandingkan Produk (Head-to-Head Comparison)**: Pengguna dapat memilih hingga 3 perangkat untuk dibandingkan spesifikasinya secara berdampingan melalui floating dock dan modal matriks komparasi.
9. **Wishlist / Favorit**: Pengguna dapat menandai produk favorit (*heart toggle*) yang disimpan permanen di `localStorage`, dilengkapi filter cepat untuk menampilkan daftar favorit saja.
10. **Layanan Eksklusif Cek IMEI & Tukar Tambah**: Verifikasi keaslian IMEI garansi distributor resmi TAM/iBox dan simulasi kalkulator tukar tambah (*trade-in*) langsung di halaman web.
11. **Micro-interactions Input**: Efek `focus` dan `blur` pada kontrol input pencarian.
12. **Sinkronisasi State, Counter & Empty State**: Indikator jumlah produk "Menampilkan X dari Y produk" selalu akurat, dan pesan *empty state* muncul otomatis bila tidak ada produk yang cocok dengan tombol reset cepat.

---

## Indikator Penilaian & Bukti Implementasi

| Aspek Penilaian | Kriteria & Implementasi | Status |
| :--- | :--- | :--- |
| **DOM Creation & Security** | Menggunakan `document.createElement`, `DocumentFragment`, dan `textContent`. **100% bebas dari `innerHTML`** dan tidak ada inline event handler (`onclick="..."`). | Selesai & Terverifikasi |
| **Event Listeners** | Menggunakan `addEventListener` dengan *pure function reference* murni (tanpa tanda kurung pemanggilan langsung `()`). | Selesai & Terverifikasi |
| **Live Filter & Search** | Event `input` membaca `event.target.value` dan memfilter data secara instan tanpa reload. | Selesai & Terverifikasi |
| **Event Delegation / Datasets** | Menggunakan `event.target.dataset` (`data-ticker`, `data-card-action`, `data-category`, `data-price`, `data-cart-action`) untuk mengidentifikasi target interaksi secara terstruktur. | Selesai & Terverifikasi |
| **State Management** | State pencarian, kategori aktif, rentang harga, urutan, wishlist, perbandingan, dan counter keranjang tersinkronisasi otomatis setiap kali render terjadi. | Selesai & Terverifikasi |
| **Kreativitas & Interaktivitas Tambahan** | Ditambahkan fitur sorting multi-kriteria, filter budget, modal detail teknis, simulasi cicilan 0%, head-to-head perbandingan 3 produk, kupon voucher promo, modal checkout resmi, cek garansi IMEI, kalkulator tukar tambah, dan mode gelap (*dark mode*) dengan sinkronisasi browser `theme-color`. | Selesai & Melebihi Ekspektasi |
| **Aksesibilitas & UI/UX Standar Industri** | Bebas emoji untuk ikon tombol (menggunakan vektor SVG pathfill murni), custom scrollbar, navigasi keyboard (ESC & `/`), ARIA accessibility roles (`dialog`, `aria-expanded`, `aria-live`). | Selesai & Terverifikasi |

---

## Struktur File Proyek

```text
├── index.html              # Halaman utama katalog interaktif GadgetVerse
├── 404.html                # Halaman 404 custom branded fallback
├── llms.txt                # Basis pengetahuan GEO untuk agen & LLM
├── robots.txt              # Konfigurasi perayap & crawler
├── README.md               # Dokumentasi panduan & indikator penilaian PAS 1
├── design.md               # Aturan sistem desain & token UI
└── assets/
    ├── favicon.svg         # Monogram logo favicon SVG
    ├── style.css           # Styling lengkap, tokens CSS, dark mode, animasi & responsivitas
    ├── script.js          # Engine interaktivitas vanilla JavaScript (DOM murni, event listeners)
    └── images/             # Aset gambar perangkat flagship, logo brand partner, & ikon sosial
```
