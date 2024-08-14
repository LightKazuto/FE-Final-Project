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