import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KeranjangProvider, useKeranjang } from "../context/KeranjangContext";

function TestComponent() {
  const { item } = useKeranjang();
  return <div>Jumlah Item: {item.length}</div>;
}

describe("KeranjangContext", () => {
  it("menyediakan state awal keranjang kosong", () => {
    render(
      <KeranjangProvider>
        <TestComponent />
      </KeranjangProvider>
    );
    expect(screen.getByText("Jumlah Item: 0")).toBeDefined();
  });
});