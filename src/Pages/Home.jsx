import { useState, useEffect } from "react";
import ProdukCard from "../components/ProdukCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [produk, setProduk] = useState([]);
  const [kategori, setKategori] = useState("semua");
  const [daftarKategori, setDaftarKategori] = useState([]);
  const [kataKunci, setKataKunci] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [halaman, setHalaman] = useState(1);

  const produkPerHalaman = 4;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const produkAPI = data.map((item) => ({
          id: item.id,
          nama: item.title,
          harga: item.price,
          kategori: item.category,
          stok: 10,
          gambar: item.image,
        }));

        setProduk(produkAPI);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal mengambil data produk");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setDaftarKategori(data);
      })
      .catch(() => {
        setError("Gagal mengambil kategori");
      });
  }, []);

  const produkTersaring = produk.filter((p) => {
    const cocokNama = p.nama
      .toLowerCase()
      .includes(kataKunci.toLowerCase());

    const cocokKategori =
      kategori === "semua" || p.kategori === kategori;

    return cocokNama && cocokKategori;
  });

  const totalHalaman = Math.ceil(
    produkTersaring.length / produkPerHalaman
  );

  const indexAwal = (halaman - 1) * produkPerHalaman;
  const produkHalaman = produkTersaring.slice(
    indexAwal,
    indexAwal + produkPerHalaman
  );

  if (loading) {
    return <p className="p-4 text-fuchsia-600 font-semibold">Memuat produk...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">{error}</p>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-fuchsia-50/30">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">

        <div className="mb-4">
          <h2 className="text-lg font-bold text-fuchsia-950">
            Daftar Produk
          </h2>
        </div>

        <div className="mb-5 flex gap-3">
          <input
            type="text"
            placeholder="Cari produk..."
            value={kataKunci}
            onChange={(e) => {
              setKataKunci(e.target.value);
              setHalaman(1);
            }}
            className="w-full max-w-sm rounded border border-fuchsia-200 px-3 py-2 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
          />

          <select
            value={kategori}
            onChange={(e) => {
              setKategori(e.target.value);
              setHalaman(1);
            }}
            className="rounded border border-fuchsia-200 px-3 py-2 text-sm focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500 bg-white"
          >
            <option value="semua">Semua Kategori</option>

            {daftarKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-stretch">
          {produkHalaman.map((item) => (
            <ProdukCard key={item.id} produk={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => setHalaman(halaman - 1)}
            disabled={halaman === 1}
            className="rounded border border-fuchsia-300 bg-white px-4 py-2 text-sm text-fuchsia-700 hover:bg-fuchsia-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sebelumnya
          </button>

          <span className="text-sm font-medium text-fuchsia-900">
            Halaman <strong className="text-fuchsia-600">{halaman}</strong> dari {totalHalaman}
          </span>

          <button
            onClick={() => setHalaman(halaman + 1)}
            disabled={halaman === totalHalaman}
            className="rounded border border-fuchsia-300 bg-white px-4 py-2 text-sm text-fuchsia-700 hover:bg-fuchsia-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Selanjutnya
          </button>
        </div>

      </main>
    </div>
  );
}

export default Home;


// function Home() {
//   const [kategori, setKategori] = useState("semua");
//   const produkTersaring = produk.filter((p) => 
//     p.title.toLowerCase(). includes(kataKunci.toLowerCase())
// );
// return (
//   <div>
//     <input 
//     placeholder="Cari produk..."
//     value={kataKunci}
//     onChange={(e) => setKataKunci(e.target.value)}
//     />
//     {/*render produk yang tersaring*/}
//   </div>
// );
// }



// import { useState, useEffect } from "react";
// import ProdukCard from "../components/ProdukCard";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function Home() {
//   const [produk, setProduk] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Gagal mengambil data produk");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProduk(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Memuat produk...</p>;
//   }

//   if (error) {
//     return <p>Terjadi kesalahan: {error}</p>;
//   }

//   return (
//     <div className="flex min-h-screen flex-col bg-gray-50">
//       <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
//         <div className="mb-4">
//           <h2 className="text-lg font-bold text-gray-900">Daftar Produk</h2>
//         </div>

//         <div className="flex flex-wrap gap-4 items-stretch">
//           {produk.map((item) => (
//             <ProdukCard key={item.id} produk={item} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;