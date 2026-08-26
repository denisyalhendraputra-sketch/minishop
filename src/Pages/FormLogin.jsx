import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function FormLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
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

    const isSuccess = login(form.email, form.password);

    if (isSuccess) {
      setError("");
      setSuccess("Login berhasil!");
      setForm({ email: "", password: "" });
      navigate("/");
    } else {
      setError("Email atau password salah / belum terdaftar!");
      setSuccess("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Login</h2>
      
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

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {success && <p className="text-green-500 text-sm mb-3">{success}</p>}

      <button type="submit" className="w-full bg-fuchsia-600 text-white py-2 rounded font-semibold hover:bg-fuchsia-700">
        Login
      </button>

      <div className="mt-4 text-center border-t pt-3">
        <p className="text-sm text-gray-600 mb-2">Belum punya akun?</p>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full border border-fuchsia-600 text-fuchsia-600 py-2 rounded font-semibold hover:bg-fuchsia-100"
        >
          Daftar Sekarang
        </button>
      </div>
    </form>
  );
}

export default FormLogin;