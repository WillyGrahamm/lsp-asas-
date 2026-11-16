#TUGAS--

# Penilaian Akhir Semester 1 — GadgetVerse Interactive Catalog

Proyek penilaian akhir semester 1 bertema **Interactive Catalog & DOM Manipulation**. Proyek ini menguji kemampuan dalam merender struktur DOM dinamis dari array JavaScript, serta mengimplementasikan interaktivitas berbasis *events* tanpa reload halaman.

## Skenario & Fitur Utama

Aplikasi katalog **GadgetVerse** menyajikan katalog gadget & aksesori yang interaktif dengan data statis bawaan:

1. **Dynamic DOM Rendering**: Brand dan katalog produk dibuat secara dinamis menggunakan `createElement`, `textContent`, dan `DocumentFragment`.  
2. **Live Search**: Pengguna mengetik di kolom pencarian (`input` event) → daftar produk langsung terfilter secara real-time berdasarkan nama, kategori, atau tag.  
3. **Filter Kategori**: Pengguna mengklik tombol kategori (`click` event dengan `data-kategori`) → hanya produk dalam kategori tersebut yang ditampilkan.  
4. **Keranjang Belanja**: Pengguna menekan tombol **Beli Sekarang** → angka counter keranjang di navbar bertambah secara real-time disertai feedback visual (animasi pulse).  
5. **Toggle Spesifikasi**: Pengguna menekan tombol **Spesifikasi** → detail spesifikasi produk muncul/sembunyi (*toggle* atribut `hidden` dan `aria-expanded`).  
6. **Micro-interactions Input**: Efek `focus` dan `blur` pada elemen kontrol form pencarian.  
7. **Sinkronisasi Counter & Empty State**: Indikator jumlah produk "Menampilkan X dari Y produk" selalu akurat, dan pesan *empty state* muncul otomatis bila tidak ada produk yang cocok.

&nbsp;

---

## Indikator Penilaian

| Aspek Penilaian | Kriteria & Implementasi |
| :---- | :---- |
| **DOM Creation & Security** | Menggunakan `document.createElement`, `DocumentFragment`, dan `textContent`. Tidak ada penggunaan `innerHTML` atau inline event handler (`onclick="..."`). |
| **Event Listeners** | Menggunakan `addEventListener` dengan function reference murni (tanpa tanda kurung `()`). |
| **Live Filter & Search** | Event `input` membaca `event.target.value` dan memfilter data secara langsung. |
| **Event Delegation / Datasets** | Menggunakan `event.target.dataset` (`data-kategori`, `data-id`) untuk mengidentifikasi target interaksi. |
| **State Management** | State pencarian, kategori aktif, dan counter keranjang tersinkronisasi setiap kali render ulang terjadi. |
| **Kreativitas & Interaktivitas Tambahan** | Siswa bebas berkreasi menambahkan fitur interaktif lainnya (misal: modal detail, sorting harga, bookmark/wishlist, dark mode, dll.), **dengan syarat seluruh fitur utama wajib di atas telah diselesaikan dan berfungsi dengan benar terlebih dahulu**. |
| **Presentasi** | Mendemokan  fitur JS apa saja yang dikerjakan. Akan dinilai kekompakan, keaktifan selama presentasi dan tanya jawab.&nbsp; |

&nbsp;
