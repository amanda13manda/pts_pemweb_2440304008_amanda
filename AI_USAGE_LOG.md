# AI Usage Log (Log Penggunaan Asisten AI)
Dokumen ini mencatat seluruh proses konsultasi, perancangan struktur kode, hingga penyusunan dokumentasi proyek **Express Store Inventory** yang dikerjakan untuk memenuhi Penilaian Tengah Semester (PTS) Mata Kuliah Pemrograman Web.
---
### 1. Inisialisasi Proyek & Struktur HTML
* **Deskripsi Bantuan:** Meminta rancangan struktur dasar `index.html` dengan elemen semantik HTML5 (`header`, `nav`, `main`, `section`, `form`, `footer`) serta atribut aksesibilitas berupa `label` dan `alt`.
* **Verifikasi & Penyesuaian Mandiri:** Menyesuaikan judul web menjadi **Express Store Inventory** serta menyematkan identitas mahasiswa secara lengkap (Amanda, NIM: 2440304008).

### 2. Perancangan Layout & CSS Styling
* **Deskripsi Bantuan:** Meminta penulisan file `style.css` standar, menggunakan Flexbox dan CSS Grid.
* **Verifikasi & Penyesuaian Mandiri:** Menyesuaikan skema warna, tata letak grid kartu produk yang responsif, dan memastikan tidak ada pergeseran *horizontal scrolling* pada layar perangkat seluler.

### 3. Konfigurasi Endpoint REST API
* **Deskripsi Bantuan:** Meminta kode JavaScript untuk menghubungkan aplikasi ke dataset murni `Products` dari DummyJSON (`https://dummyjson.com/products`).
* **Verifikasi & Penyesuaian Mandiri:** Memastikan endpoint URL sudah sesuai dengan aturan variasi NIM (Digit X = 0).

### 4. Implementasi Fetch Data & State Management
* **Deskripsi Bantuan:** Meminta implementasi fungsi `async/await` dengan blok `try...catch`, pengecekan `response.ok`, serta penanganan *Loading State* dan *Error State* yang dilengkapi tombol *Retry*.
* **Verifikasi & Penyesuaian Mandiri:** Menguji fungsi tombol *retry* secara langsung saat simulasi gangguan jaringan dilakukan pada peramban lokal.

### 5. Analisis Data Otomatis
* **Deskripsi Bantuan:** Meminta penulisan logika fungsi JavaScript untuk menghitung rata-rata harga, produk termahal, dan jumlah kategori secara otomatis.
* **Verifikasi & Penyesuaian Mandiri:** Memverifikasi hasil kalkulasi menggunakan method `reduce()` dan objek `Set()` agar nilainya akurat sesuai data asli dari API.

### 6. Fitur Utama Berdasarkan NIM (Search & Sort)
* **Deskripsi Bantuan:** Meminta pembuatan fitur *Real-time Search* pada input pencarian dan *Sorting* harga (dari rendah ke tinggi / tinggi ke rendah) sesuai digit Y = 0.
* **Verifikasi & Penyesuaian Mandiri:** Mengintegrasikan fungsi pencarian dan pengurutan agar berjalan simultan dan interaktif pada event *input* dan *change*.

### 7. Validasi Form Berdasarkan NIM
* **Deskripsi Bantuan:** Meminta pembuatan form pengajuan stok barang dengan validasi JavaScript di mana pengguna wajib memilih minimal satu kategori (sesuai digit Z = 8).
* **Verifikasi & Penyesuaian Mandiri:** Menambahkan atribut `required` dan pesan peringatan kustom pada antarmuka jika kolom kategori dibiarkan kosong.

### 8. Tantangan Individual (Light/Dark Mode)
* **Deskripsi Bantuan:** Meminta kode untuk fitur tombol ubah tema terang/gelap yang statusnya disimpan secara permanen menggunakan `localStorage` (sesuai Challenge C = 0).
* **Verifikasi & Penyesuaian Mandiri:** Menguji ketahanan penyimpanan tema saat halaman web dimuat ulang (*refresh*) pada browser lokal.

---

## Refleksi dan Komitmen
Seluruh baris kode dan konsep yang dihasilkan melalui kolaborasi asisten AI telah dipelajari, dipahami alurnya secara mendalam, serta disesuaikan sepenuhnya dengan standar akademik dan ketentuan soal PTS Universitas Borneo Tarakan.