import { useState } from "react";
import FilterMenu from "../../componetns/filterMenu/FilterMenu.tsx";
import "./FilterSidebar.css";

export default function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`landing-sidebar ${isOpen ? "open" : "closed"}`}>
        <div className={`sidebar-content ${isOpen ? "visible" : "hidden"}`}>
          <FilterMenu />
        </div>
      </div>

      {/* Botón siempre visible, moviéndose según el sidebar */}
      <button
        className="toggle-sidebar"
        style={{ left: isOpen ? "250px" : "0.5rem" }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Ocultar filtros" : "Mostrar filtros"}
      >
        {isOpen ? "<" : ">"}
      </button>
    </>
  );
}
