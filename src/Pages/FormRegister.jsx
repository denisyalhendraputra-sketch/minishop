import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan useNavigate agar bisa pindah ke login
import { useAuth } from "../context/AuthContext";

function FormRegister() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      setSuccess("");
      return;
    }

    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      setSuccess("");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Konfirmasi password tidak cocok");
      setSuccess("");
      return;
    }

    const isRegistered = register(form.email, form.password);

    if (isRegistered) {
      setError("");
      setSuccess("Registrasi berhasil! Silakan login.");
      setForm({ email: "", password: "", confirmPassword: "" });
    } else {
      setError("Gagal mendaftar");
      setSuccess("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Registrasi</h2>

      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-fuchsia-500"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-fuchsia-500"
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-fuchsia-500"
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

      <button type="submit" className="w-full bg-fuchsia-600 text-white py-2 rounded font-semibold hover:bg-fuchsia-700">
        Daftar
      </button>

      <div className="mt-4 text-center border-t pt-3">
        <p className="text-sm text-gray-600 mb-2">Sudah punya akun?</p>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full border border-b-fuchsia-700 text-fuchsia-600 py-2 rounded font-semibold hover:bg-blue-50"
        >
          Login Sekarang
        </button>
      </div>
    </form>
  );
}

export default FormRegister;