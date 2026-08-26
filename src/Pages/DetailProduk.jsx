import { useParams, Link } from "react-router-dom";
import { daftarProduk } from "../data/Produk";
import Button from "../components/Button";
import { useKeranjang } from "../context/KeranjangContext";
import { useEffect, useState } from "react";


function DetailProduk() {
  const { id } = useParams();
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then ((data) => {
      setProduk(data);
      setLoading(false);
    });
  }, [id]);
  if (loading) return <p>Memuat produk...</p>;

  const { tambahKeKeranjang } = useKeranjang();

  if (!produk) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Produk tidak ditemukan
        </h2>

        <Link
          to="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }


  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="grid gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2">

        {/* Gambar Produk */}
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <img
            src={produk.image}
            alt={produk.title}
            className="h-full max-h-[450px] w-full object-cover"
          />
        </div>


        {/* Detail Produk */}
        <div className="flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-gray-800">
            {produk.title}
          </h2>

          <p className="mt-3 text-xl font-bold text-gray-900">
            $ {produk.price}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Deskripsi: {produk.description}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Catagori: {produk.category}
          </p>


          {/* Tombol Tambah ke Keranjang */}
          <Button
     
            onClick={() => tambahKeKeranjang(produk)}
          > 
          tamabah ke keranjang

          </Button>


          <Link
            to="/"
            className="mt-3 text-center text-sm text-gray-600 hover:text-blue-600"
          >
            ← Kembali ke Beranda
          </Link>

        </div>

      </div>
    </div>
  );
}


export default DetailProduk;