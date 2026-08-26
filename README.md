# MiniShop 

Aplikasi web e-commerce *MiniShop* yang dibangun menggunakan **React**

---

## Fitur Utama

**Autentikasi Pengguna:** Login dan Register dengan *Context API* serta proteksi halaman (*Protected Route*).
**Katalog Produk:** Menampilkan daftar produk dengan kartu komponen (*ProdukCard*).
**Detail Produk:** Menampilkan rincian informasi dan deskripsi produk.
**Manajemen Keranjang:** Menambah, mengubah jumlah, serta menghitung total harga belanjaan secara otomatis.
**Optimasi Performa:** Menggunakan `React.lazy` dan `Suspense` untuk *Lazy Loading* komponen halaman.
**Pengujian Otomatis (Unit Testing):** Pengujian komponen dan context menggunakan **Vitest** dan **React Testing Library**.

---

## Teknologi yang Digunakan

**Frontend:** React.js, React Router DOM, Tailwind CSS
**State Management:** React Context API (`AuthContext`, `KeranjangContext`)
**Testing:** Vitest, React Testing Library
**Build Tool:** Vite
**Deployment:** Vercel

---

## Struktur Folder Proyek

minishop/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── Pages/
│   ├── test/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js



Cara Instalasi & Menjalankan Proyek
1. Prasyaratan
**Pastikan kamu sudah menginstal Node.js di komputer kamu.

2. Langkah-Langkah
**Clone Repository

    1. git clone <https://github.com/denisyalhendraputra-sketch/minishop>
        cd minishop
        Instal Dependensi


    2. npm install
        Jalankan Local Development Server


    3. npm run dev
        Buka browser dan akses http://localhost:5173.

3. Cara Menjalankan Pengujian (Testing)
    Untuk menjalankan unit test yang telah dibuat menggunakan Vitest:
    npm run test