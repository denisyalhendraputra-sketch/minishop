import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import FormLogin from "./Pages/FormLogin"; 
import FormRegister from "./Pages/FormRegister";

const DetailProduk = lazy(() => import("./Pages/DetailProduk"));
const Keranjang = lazy(() => import("./Pages/Keranjang"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Suspense fallback={<div className="p-8 text-center text-gray-600">Memuat halaman...</div>}>
          <Routes>
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormRegister />} />

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail-produk/:id" element={<DetailProduk />} />
              
              <Route
                path="/keranjang"
                element={
                  <ProtectedRoute>
                    <Keranjang />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="*"
                element={<h2>404 - halaman tidak ditemukan</h2>}
              />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;