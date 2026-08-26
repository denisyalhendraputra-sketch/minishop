import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import FormLogin from "../Pages/FormLogin";
import { AuthProvider } from "../context/AuthContext";

describe("FormLogin", () => {
  it("menampilkan judul halaman login", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <FormLogin />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getByRole("heading", { name: /login/i })).toBeDefined();
  });

  it("menampilkan input email dan password", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <FormLogin />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getByPlaceholderText(/email/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/password/i)).toBeDefined();
  });
});