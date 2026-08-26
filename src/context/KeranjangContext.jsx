// import { createContext, useContext, useState } from "react";


// const KeranjangContext = createContext();


// export function KeranjangProvider({ children }) {
//   const [item, setItem] = useState([]);


//   function tambahKeKeranjang(produk) {
//     setItem((prev) => [...prev, produk]);
//   }


//   return (
//     <KeranjangContext.Provider value={{ item, tambahKeKeranjang }}>
//       {children}
//     </KeranjangContext.Provider>
//   );
// }


// export function useKeranjang() {
//   return useContext(KeranjangContext);
// }

import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";

const KeranjangContext = createContext();

export function KeranjangProvider({ children }) {
  const [item, setItem] = useLocalStorage("keranjang", []);

  function tambahKeKeranjang(produk) {
    const sudahAda = item.find((p) => p.id === produk.id);

    if (sudahAda) {
      setItem(
        item.map((p) =>
          p.id === produk.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setItem([...item, { ...produk, quantity: 1 }]);
    }
  }

  function ubahJumlah(id, jumlah) {
    if (jumlah <= 0) {
      setItem(item.filter((p) => p.id !== id));
      return;
    }
    
    setItem(
      item.map((p) =>
        p.id === id ? { ...p, quantity: jumlah } : p
      )
    );
  }

  function hapusDariKeranjang(id) {
    setItem(item.filter((p) => p.id !== id));
  }
  

  return (
    <KeranjangContext.Provider
      value={{
        item,
        tambahKeKeranjang,
        ubahJumlah,
        hapusDariKeranjang,
      }}
    >
      {children}
    </KeranjangContext.Provider>
  );
}

export function useKeranjang() {
  return useContext(KeranjangContext);
}