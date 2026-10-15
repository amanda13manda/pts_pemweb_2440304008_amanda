# 🛍️ Express Store Inventory Dashboard
Dashboard Manajemen Produk & Inventaris Ritel Digital berbasis Web Responsive. Proyek ini dikembangkan untuk memenuhi Penilaian Tengah Semester (PTS) Mata Kuliah **Pemrograman Web**.
---
## Identitas Mahasiswa
* **Nama:** Amanda
* **NIM:** 2440304008
* **Program Studi:** S1 Teknik Komputer
* **Universitas:** Universitas Borneo Tarakan (UBT)
---
## Komponen 1: Varian Berbasis NIM (2440304008)
Berdasarkan tiga digit terakhir NIM saya (**008**), rincian variasi tugas PTS yang dikerjakan adalah sebagai berikut:
1. **Digit X = 0 (Dataset & Tema):**
   * Menggunakan dataset REST API murni **Products** dari DummyJSON (`https://dummyjson.com/products`).
   * Mengusung tema **Dashboard Produk / UMKM** ("Express Store Inventory").

2. **Digit Y = 0 (Fitur Utama):**
   * Mengimplementasikan fitur **Real-time Search** (pencarian langsung saat mengetik) dan **Sorting** (pengurutan harga produk dari rendah ke tinggi / tinggi ke rendah).

3. **Digit Z = 8 (Form dan Validasi):**
   * Mengembangkan form pengajuan/permintaan stok dengan validasi JavaScript di mana pengguna **wajib memilih minimal satu kategori produk** sebelum form dapat dikirim.

4. **Challenge C = 0 (Individual Challenge):**
   * Perhitungan: $S = X + Y + Z = 0 + 0 + 8 = 8$. Lalu $C = S \text{ mod } 4 = 8 \text{ mod } 4 = 0$.
   * Hasil Challenge: Implementasi **Light / Dark Mode** dengan penyimpanan preferensi secara permanen menggunakan `localStorage`.
---
## Fitur Utama Aplikasi
1. **Integrated REST API:** Mengambil data produk ritel secara dinamis menggunakan `fetch` dan `async/await`.
2. **Analisis Data Otomatis:** Menghitung rata-rata harga produk, produk termahal, dan total kategori secara otomatis menggunakan fungsi JavaScript (tanpa diketik manual).
3. **State Management:** Penanganan *Loading State*, *Error State* (beserta tombol *Retry*), dan *Success State*.
4. **Responsive UI:** Tata letak menggunakan Flexbox dan CSS Grid yang optimal di berbagai ukuran layar.
---
## 🚀 Cara Menjalankan Proyek
1. Clone repository ini:
   ```bash
   git clone [https://github.com/amanda13manda/pts_pemweb_2440304008_amanda.git](https://github.com/amanda13manda/pts_pemweb_2440304008_amanda.git)