 export const daftarProduk = [
   { id: 1, nama: "Kaos Polos", harga: 75000, kategori: "pakaian", stok: 20, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GK8F6EemYLdPI_0T7IHd2T33HRsizsxlsq5FGznWwA&s=10" },
   { id: 2, nama: "Celana Jeans", harga: 150000, kategori: "celana", stok: 10, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKvNeBHAjiWPAlMGT-MRq_t9cGU_wYHfWJgYB2Qj1vg&s=10" },
   { id: 3, nama: "celana dalam", harga: 40000, kategori: "aksesoris", stok: 0, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMASq5o3q-5g-0mAvLO_KyUJHYVWsVE8rqCWhoyv8Ew&s=10" },
   { id: 4, nama: "kacamata", harga: 50000, kategori: "aksesoris", stok: 5, gambar: "djajd.jpg" },
   { id: 5, nama: "hoodie", harga: 80000, kategori: "aksesoris", stok: 5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLGl1Su41BNMW9HS-fbzssTnYiuJ6iE30ChkmeaUcMg&s=10" },
   { id: 6, nama: "jaket kulit", harga: 100000, kategori: "aksesoris", stok: 5, gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLGl1Su41BNMW9HS-fbzssTnYiuJ6iE30ChkmeaUcMg&s=10" },
];

// import {useState, useEffect} from "react";

// function Home() {
//   const [produk, setProduk] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("httos://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       setProduk(data);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return <P>Memuat produk...</P>;
  
//   return (
//     <div className="grid-produk">
//       {produk.map((p) => (
//         <ProdukCard key={p.id} produk={p} />
//       ))}
//     </div>
//   );
//   }

// }
