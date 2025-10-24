import { Phone, Mail, MapPin, Facebook, Instagram, Info } from "lucide-react";

export default function FooterBar() {
  return (
    <footer className="bg-black text-white px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Información de contacto */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-yellow-400" />
            <span>+56 9 1234 5678</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="text-yellow-400" />
            <span>contacto@wecommerce.cl</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-yellow-400" />
            <span>Santiago, Chile</span>
          </div>

          {/* Enlace a Sobre Nosotros */}
          <a
            href="/sobre-nosotros"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Info size={18} />
            <span>Sobre Nosotros</span>
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Facebook size={22} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-6 text-center text-xs text-gray-400 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} WeCommerce — Todos los derechos reservados
      </div>
    </footer>
  );
}
