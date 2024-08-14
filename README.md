# Dokumentasi Frontend - NextJS - Mobilisayur

## Pendahuluan
Mobilisayur adalah platform web inovatif yang memudahkan proses jual beli sayur dan buah-buahan segar secara online. Dirancang untuk memenuhi kebutuhan masyarakat modern, Mobilisayur menghubungkan petani dan pedagang lokal dengan konsumen yang mencari produk berkualitas tinggi.

## Prasyarat
Pastikan install/ setup hal-hal dibawah :

- Node.js >= 14.x
- npm atau yarn (package manager)

## Langkah-langkah Instalasi

### 1. Clone Repository
Clone repository ini ke mesin lokal Anda :

```bash
git clone https://github.com/LightKazuto/Front-end.git
cd Front-end
```
### 2. Install Dependensi
Setelah masuk ke direktori proyek, instal semua dependensi yang diperlukan :

```bash
npm install
```

### 3. Jalankan Aplikasi
Untuk menjalankan proyek di lokal :

```bash
npm run dev
```

Aplikasi akan berjalan di http://localhost:3000.

### 4. Link Deploy
```bash
backend : https://fsse-group-j-gfp-4c1847693ac3.herokuapp.com/apidocs/
frontend : https://front-end-git-main-lightkazutos-projects.vercel.app/
```

## Struktur Direktori
Berikut adalah struktur inti dari proyek Mobilisayur Next.js ini :

    src
    │
    ├── assets
    │
    ├── components
    │   ├── addProduct.tsx
    │   ├── comingSoonMarket.tsx
    │   ├── comingSoonMarketCard.tsx
    │   ├── landing-page.tsx
    │   ├── navbar.tsx
    │   ├── popularFruitProduct.tsx
    │   ├── popularFruitProductCard.tsx   
    │   ├── popularVeg.tsx
    │   └── PopularVegCard.tsx   
    │ 
    ├── pages
    │   ├── dashboard
    │   ├── home
    │   ├── login
    │   └── register
    │
    └── routes  

- 'assets' : Direktori ini menyimpan gambar, ikon, font, atau file media lainnya yang digunakan dalam aplikasi.

- 'components' : Berisi komponen UI yang dapat digunakan kembali di berbagai halaman atau bagian aplikasi. Misalnya, tampilan dashboard,  navbar, atau form. 

- 'pages' : Direktori ini berisi halaman utama dan rute aplikasi. Setiap file dalam direktori ini otomatis menjadi rute di aplikasi Next.js.
  - dashboard : Halaman untuk area dashboard, biasanya digunakan untuk menampilkan data atau fungsi yang terkait dengan pengguna yang sudah masuk.
  - home : Halaman utama (beranda) aplikasi. Biasanya ini adalah halaman pertama yang dilihat pengguna ketika mengakses situs.
  - login : Halaman untuk autentikasi pengguna. Menyediakan form login bagi pengguna untuk masuk ke aplikasi.
  - register : Halaman untuk pendaftaran pengguna baru. Menyediakan form bagi pengguna untuk membuat akun baru.
- 'routes' : Direktori ini dapat digunakan untuk mendefinisikan rute-rute API atau logika navigasi khusus. File atau konfigurasi di sini sering digunakan untuk mengelola proteksi rute dan middleware.

## Role Akses
Aplikasi ini mendukung beberapa peran akses untuk mengatur hak dan izin pengguna dalam mengakses berbagai fitur. Berikut adalah penjelasan terkait peran **User**, **Guest**, dan **Seller**.

### 1. Guest (Tamu)

Peran **Guest** adalah pengguna yang belum terautentikasi atau belum login ke dalam sistem. Akses yang dimiliki sangat terbatas.

#### Hak Akses:
- Mengakses halaman beranda (Home).
- Melihat produk atau layanan di halaman **Dashboard** (hanya mode baca).
- Mendaftar sebagai pengguna baru melalui halaman **Register**.
- Login ke dalam sistem melalui halaman **Login**.
- Tidak dapat mengakses halaman atau fitur yang memerlukan autentikasi (seperti profil pengguna atau penjualan).

#### Pembatasan:
- Tidak dapat mengakses halaman profil pengguna atau fitur khusus pengguna terdaftar.
- Tidak dapat melakukan transaksi atau interaksi dengan sistem sebagai pengguna terverifikasi.

### 2. User (Pengguna Terdaftar)

Peran **User** diberikan kepada pengguna yang telah mendaftar dan login ke dalam sistem. Pengguna ini memiliki akses yang lebih luas dibandingkan dengan **Guest**.

#### Hak Akses:
- Mengakses seluruh halaman yang dapat dilihat oleh **Guest**.
- Mengelola profil pengguna (mengubah informasi pribadi, kata sandi, dll.).
- Melihat riwayat transaksi atau pesanan.
- Melakukan pembelian atau pemesanan produk.
- Berinteraksi dengan fitur-fitur umum seperti memberikan ulasan dan menyukai produk.
- Tidak dapat mengakses halaman yang diperuntukkan khusus untuk **Seller** (misalnya halaman untuk mengelola produk yang dijual).

#### Pembatasan:
- Tidak dapat menjual produk atau layanan.
- Tidak memiliki akses ke fitur atau halaman yang dikhususkan untuk penjual.

### 3. Seller (Penjual)

Peran **Seller** adalah pengguna yang tidak hanya terdaftar tetapi juga diverifikasi sebagai penjual. **Seller** dapat mengelola produk atau layanan mereka di dalam platform.

#### Hak Akses:
- Mengakses seluruh fitur yang dimiliki oleh **User**.
- Mengakses halaman **Dashboard** khusus penjual untuk mengelola produk.
- Menambah, mengedit, atau menghapus produk yang dijual.
- Mengelola pesanan pelanggan dan melihat riwayat transaksi penjualan.
- Melihat laporan penjualan dan statistik kinerja produk.

#### Pembatasan:
- Tidak dapat mengakses fitur pengguna umum tertentu yang tidak relevan dengan aktivitas penjualan (misalnya, fitur pembelian untuk pelanggan).

### Ringkasan Hak Akses Berdasarkan Peran

| Fitur                         | Guest | User  | Seller |
|-------------------------------|-------|-------|--------|
| Mengakses Halaman Beranda      | ✅    | ✅    | ✅     |
| Melihat Produk di Dashboard    | ✅    | ✅    | ✅     |
| Login ke Sistem                | ✅    | ✅    | ✅     |
| Register (Mendaftar)           | ✅    | ❌    | ❌     |
| Mengelola Profil               | ❌    | ✅    | ✅     |
| Melakukan Pembelian            | ❌    | ✅    | ✅     |
| Menambah/Edit/Hapus Produk     | ❌    | ❌    | ✅     |
| Mengelola Pesanan Pelanggan    | ❌    | ❌    | ✅     |
| Melihat Laporan Penjualan      | ❌    | ❌    | ✅     |

### Pengelolaan Role Akses

1. **Guest**: Role default untuk pengguna yang tidak terautentikasi. Dapat diatur melalui middleware yang memastikan akses ke halaman tertentu hanya tersedia setelah login.
2. **User**: Role ini ditetapkan setelah pengguna berhasil login dan terverifikasi.
3. **Seller**: Role ini diberikan kepada pengguna yang telah diverifikasi sebagai penjual melalui proses internal atau administratif di platform.