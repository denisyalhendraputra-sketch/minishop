// import { useKeranjang } from "../context/KeranjangContext";

// function Keranjang() {
//   const { item } = useKeranjang();
//   const total = item.reduce((sum, p) => sum+ p.harga, 0);

//   return(
//     <div>
//       <h2>Keranjang Belanja</h2>
//       {item.map((p, i)=>(
//         <div key={i}>{p.nama} - Rp {pp.harga.toLocaleString("id-ID")}</div>

//       ))}
//       <h3>Total: Rp {total.toLocaleString("id-ID")}</h3>
//     </div>
//   )
// }

// export default Keranjang;

import { useState } from "react";
import { useKeranjang } from "../context/KeranjangContext";

function Keranjang() {
  const { item, ubahJumlah, hapusDariKeranjang } = useKeranjang();
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [pesanSukses, setPesanSukses] = useState("");

  const total = item.reduce((sum, p) => {
    const hargaItem = Number(p.price || p.harga || 0);
    const jumlahItem = Number(p.quantity || 1);
    return sum + hargaItem * jumlahItem;
  }, 0);

  const handleCheckout = () => {
    setLoadingCheckout(true);

    const payload = {
      userId: 1,
      date: new Date().toISOString().split("T")[0],
      products: item.map((p) => ({
        productId: p.id,
        quantity: p.quantity,
      })),
    };

    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadingCheckout(false);
        setPesanSukses(`Berhasil Checkout ke API! (Cart ID: ${data.id})`);
      })
      .catch(() => {
        setLoadingCheckout(false);
        alert("Gagal terhubung ke API FakeStore");
      });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h2 className="mb-6 text-2xl font-bold text-fuchsia-950">
        Keranjang Belanja
      </h2>

      {pesanSukses && (
        <div className="mb-4 rounded-lg border-2 border-green-300 bg-green-50 p-4 text-green-700 font-medium">
          {pesanSukses}
        </div>
      )}

      {item.length === 0 ? (
        <div className="w-full rounded-xl border-2 border-fuchsia-200 bg-white p-12 text-center shadow-sm">
          <p className="text-fuchsia-700 font-medium text-lg">
            Keranjang masih kosong.
          </p>
        </div>
      ) : (
        <div className="w-full space-y-4">
          <div className="grid grid-cols-1 gap-4 w-full">
            {item.map((p) => (
              <div
                key={p.id}
                className="flex w-full items-center justify-between gap-4 rounded-xl border-2 border-fuchsia-200 bg-white p-5 shadow-sm"
              >
                {/* Informasi Produk - Mengisi Ruang Kosong */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-fuchsia-950">
                    {p.title || p.nama}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-fuchsia-600">
                    $ {p.price || p.harga}
                  </p>
                </div>

                {/* Tombol Aksi */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => ubahJumlah(p.id, p.quantity - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-fuchsia-300 font-bold text-fuchsia-700 transition hover:bg-fuchsia-100 active:scale-95"
                  >
                    -
                  </button>

                  <span className="min-w-[30px] text-center font-bold text-fuchsia-900">
                    {p.quantity}
                  </span>

                  <button
                    onClick={() => ubahJumlah(p.id, p.quantity + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-fuchsia-300 font-bold text-fuchsia-700 transition hover:bg-fuchsia-100 active:scale-95"
                  >
                    +
                  </button>

                  <button
                    onClick={() => hapusDariKeranjang(p.id)}
                    className="ml-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Ringkasan Total & Checkout */}
          <div className="w-full mt-6 rounded-xl border-2 border-fuchsia-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-fuchsia-900">
                Total
              </h3>

              <p className="text-2xl font-bold text-fuchsia-600">
                $ {total.toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loadingCheckout}
              className="w-full rounded-lg bg-fuchsia-600 py-3 text-center font-semibold text-white transition hover:bg-fuchsia-700 disabled:opacity-50 active:scale-[0.99]"
            >
              {loadingCheckout ? "Memproses API..." : "Checkout via API"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Keranjang;