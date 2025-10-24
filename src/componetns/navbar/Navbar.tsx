import { Search, Heart, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MenuModal from "../menu/menu.tsx";
import logo from "../../../assets/logo_web.png";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Logo y Menú */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              onClick={() => navigate("/")}
              className="text-white font-bold px-3 py-1 rounded hover:opacity-90 transition cursor-pointer"
              style={{ filter: "invert(1)", width: 100 }}
            />

            <button
              className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded transition"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
              <span className="font-semibold">menú</span>
            </button>
          </div>
        </div>
        <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        {/* Barra de búsqueda */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full px-4 py-2 pr-10 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="flex items-center gap-6">
          {/* Iniciar sesión */}
          <button
            className="flex items-center gap-2 hover:bg-gray-800 px-3 py-2 rounded transition"
            onClick={() => navigate("/login")}
          >
            <span className="font-semibold">¡Hola!</span>
            <span className="text-sm">Iniciar sesión</span>
            <ChevronDown size={20} />
          </button>

          {/* Favoritos */}
          <button
            onClick={() => navigate("/favorito")}
            className="hover:bg-gray-800 p-2 rounded transition"
          >
            <Heart size={24} />
          </button>

          {/* Carrito */}
          <button
            onClick={() => navigate("/cart")}
            className="hover:bg-gray-800 p-2 rounded transition relative"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
