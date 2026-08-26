import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/ login"); 
  };
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Mini<span className="text-fuchsia-800">Shop</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-fuchsia-800">Beranda</Link>
          <Link to="/keranjang" className="hover:text-fuchsia-800">Keranjang</Link>
        </nav>

        {/* Tombol Logout */}
        <button
          onClick={handleLogout}
          className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;