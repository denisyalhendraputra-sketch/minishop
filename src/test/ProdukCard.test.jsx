import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import ProdukCard from "../components/ProdukCard";
import { KeranjangProvider } from "../context/KeranjangContext";

describe("ProdukCard", () => {
  it("menampilkan nama produk dengan benar", () => {
    const produk = { id: 1, nama: "Kaos Polos", harga: 75000 };
    render(
      <KeranjangProvider>
        <BrowserRouter>
          <ProdukCard produk={produk} />
        </BrowserRouter>
      </KeranjangProvider>
    );
    expect(screen.getByText("Kaos Polos")).toBeDefined();
  });

  it("menampilkan harga produk dengan benar", () => {
    const produk = { id: 1, nama: "Kaos Polos", harga: 75000 };
    render(
      <KeranjangProvider>
        <BrowserRouter>
          <ProdukCard produk={produk} />
        </BrowserRouter>
      </KeranjangProvider>
    );
    expect(screen.getByText(/75\.000/)).toBeDefined();
  });
});