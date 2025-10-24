import React, { useState } from "react";
import "./menu.css";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { name: "Todos los Productos", subcategories: ["Todos los Productos"] },
  {
    name: "Electrodomésticos",
    subcategories: ["Cocina", "Limpieza", "Climatización"],
  },
  { name: "Tecnología", subcategories: ["Computadores", "TV", "Telefonía"] },
  { name: "Moda", subcategories: ["Hombres", "Mujeres", "Niños"] },
  { name: "Deportes", subcategories: ["Fitness", "Outdoor", "Bicicletas"] },
];

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClose = () => {
    setOpenIndex(null);
    onClose();
  };

  return (
    <div className="tienda-overlay" onClick={handleOverlayClick}>
      <div className="tienda-menu">
        <div className="nombre-boton">
          <h2 className="menu-title">Wamart</h2>
          <button className="close-btn" onClick={handleClose}>
            ✕
          </button>
        </div>

        <nav className="menu-nav">
          {categories.map((cat, idx) => (
            <div key={idx} className="menu-category">
              <button
                className="category-btn"
                onClick={() => toggleSubmenu(idx)}
              >
                {cat.name} <span>{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && (
                <div className="submenu">
                  {cat.subcategories.map((sub, sidx) => (
                    <a key={sidx} href="/main">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Menu;
