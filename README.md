# MiniShop

MiniShop adalah aplikasi toko online sederhana yang dibuat menggunakan **React + Vite**. Aplikasi ini mengambil data produk dari **Fake Store API** 

## Fitur

- Menampilkan daftar produk dari Fake Store API.
- Pencarian produk berdasarkan nama.
- Filter produk berdasarkan kategori.
- Pagination untuk berpindah halaman produk.
- Detail produk.
- Menambahkan produk ke keranjang.
- Mengubah jumlah produk di keranjang.
- Menghapus produk dari keranjang.
- Menghitung total harga keranjang.
- Checkout menggunakan Fake Store API.
- Registrasi dan login sederhana.
- Penyimpanan data melalui Context dan Local Storage.
- Protected Route untuk halaman yang membutuhkan autentikasi.
- Pengujian komponen menggunakan Vitest dan React Testing Library.

## Teknologi yang Digunakan

- React
- Vite
- React Router DOM
- Tailwind CSS
- Fake Store API
- Vitest
- React Testing Library
- JavaScript (ES6+)

## API

MiniShop menggunakan Fake Store API:

- Produk: `https://fakestoreapi.com/products`
- Kategori: `https://fakestoreapi.com/products/categories`
- Checkout/cart: `https://fakestoreapi.com/carts`

## Cara Instalasi

Pastikan **Node.js** dan **npm** sudah terpasang.

### 1. Clone atau download project

Jika menggunakan Git:

```bash
git clone <URL_REPOSITORY>
cd minishop
```

### 2. Install dependency

```bash
npm install
```

### 3. Jalankan project

```bash
npm run dev
```

Setelah itu buka alamat yang ditampilkan oleh Vite di terminal, biasanya:

```text
http://localhost:5173
```

## Menjalankan Test

Untuk menjalankan pengujian:

```bash
npm test
```

Project memiliki pengujian untuk komponen **ProdukCard**, **FormLogin**, dan **KeranjangContext**.

## Build untuk Production

Sebelum deployment, jalankan:

```bash
npm run build
```

Hasil build akan berada di folder:

```text
dist/
```

Untuk mengecek hasil production secara lokal:

```bash
npm run preview
```

## Struktur Folder

```text
minishop/
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── ProdukCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── KeranjangContext.jsx
│   │
│   ├── data/
│   │   └── Produk.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── Pages/
│   │   ├── DetailProduk.jsx
│   │   ├── FormLogin.jsx
│   │   ├── FormRegister.jsx
│   │   ├── Home.jsx
│   │   └── Keranjang.jsx
│   │
│   ├── test/
│   │   ├── FormLogin.test.jsx
│   │   ├── KeranjangContext.test.jsx
│   │   └── ProdukCard.test.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── README.md
├── package.json
└── ...
```

## Deployment

Setelah `npm run build` berhasil, project dapat di-deploy menggunakan **Vercel** atau **Netlify**.

### Vercel

1. Upload atau push project ke GitHub.
2. Buka Vercel dan hubungkan repository GitHub.
3. Pilih repository MiniShop.
4. Pastikan command build menggunakan:

```bash
npm run build
```

5. Jalankan deployment.
6. Setelah selesai, MiniShop dapat diakses melalui URL deployment Vercel.

## Pengembang

**MiniShop - Project React**

