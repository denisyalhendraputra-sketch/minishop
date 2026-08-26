import { Link } from "react-router-dom";
import Button from "./Button";
import Badge from "./Badge";
import { useKeranjang } from "../context/KeranjangContext";

function ProdukCard({ produk }) {
  const { tambahKeKeranjang } = useKeranjang();

  if (!produk) return null;

  const tersedia = produk.stok > 0;

  return (
    <div className="flex w-full sm:w-[260px] shrink-0 flex-col justify-between rounded-xl border-2 border-fuchsia-200 bg-white p-4 shadow-sm transition hover:border-fuchsia-400">
      <div>
        <Link to={`/detail-produk/${produk.id}`}>
          {/* Gambar dibuat lebih tinggi (h-56) dan penuh mengisi bingkai */}
          <div className="w-full h-56 overflow-hidden rounded-lg bg-fuchsia-50/30 cursor-pointer border border-fuchsia-100 flex items-center justify-center">
            <img
              src={produk.gambar}
              alt={produk.nama}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        </Link>

        <div className="mt-3 flex items-start justify-between gap-1">
          <Link to={`/detail-produk/${produk.id}`}>
            <h3 className="text-sm font-semibold text-fuchsia-950 line-clamp-2 min-h-[2.5rem] hover:text-fuchsia-600 transition">
              {produk.nama}
            </h3>
          </Link>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-bold text-fuchsia-700">
            $ {produk.harga?.toLocaleString("id-ID")}
          </p>

          <Badge variant={tersedia ? "success" : "danger"}>
            {tersedia ? "Ada" : "Habis"}
          </Badge>
        </div>
      </div>

      {/* Area Tombol Aksi */}
      <div className="mt-4 flex flex-col gap-2">
        {/* Tombol Lihat Detail */}
        <Link to={`/detail-produk/${produk.id}`}>
          <button className="w-full rounded-lg border-2 border-fuchsia-300 py-2 text-xs font-semibold text-fuchsia-700 transition hover:bg-fuchsia-50 active:scale-95">
            Lihat Detail
          </button>
        </Link>

        {/* Tombol Tambah ke Keranjang */}
        <Button
          disabled={!tersedia}
          onClick={() => tambahKeKeranjang(produk)}
        >
          {tersedia ? "Tambah ke Keranjang" : "Habis"}
        </Button>
      </div>
    </div>
  );
}

export default ProdukCard;