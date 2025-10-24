import { useState } from "react";
import type { ChangeEvent } from "react";
import "./FilterMenu.css";

interface Filtros {
  disponible: boolean;
  oferta: boolean;
  nuevo: boolean;
  marcaA: boolean;
  marcaB: boolean;
}

type OrdenOpciones =
  | "recomendados"
  | "precio-asc"
  | "precio-desc"
  | "nuevos"
  | "antiguos"
  | "valorados";

export default function FilterMenu() {
  const [precioMin, setPrecioMin] = useState<number>(0);
  const [precioMax, setPrecioMax] = useState<number>(1000);
  const [filtros, setFiltros] = useState<Filtros>({
    disponible: false,
    oferta: false,
    nuevo: false,
    marcaA: false,
    marcaB: false,
  });
  const [orden, setOrden] = useState<OrdenOpciones>("recomendados");

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFiltros((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePrecioMax = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrecioMax(value);
    if (precioMin > value) setPrecioMin(value);
  };

  const handlePrecioMin = (e: ChangeEvent<HTMLInputElement>) => {
    setPrecioMin(Number(e.target.value));
  };

  const handleSubmit = () => {
    console.log({
      precioMin,
      precioMax,
      filtros,
      orden,
    });
  };

  return (
    <div className="filtro-container">
      <h2 className="filtro-titulo">Filtrar productos</h2>

      {/* Precio máximo */}
      <div className="filtro-seccion">
        <label className="filtro-label">Precio máximo: ${precioMax}</label>
        <input
          type="range"
          min={0}
          max={5000}
          value={precioMax}
          onChange={handlePrecioMax}
          className="filtro-range"
        />
      </div>

      {/* Precio mínimo */}
      <div className="filtro-seccion">
        <label className="filtro-label">Precio mínimo: ${precioMin}</label>
        <input
          type="range"
          min={0}
          max={precioMax}
          value={precioMin}
          onChange={handlePrecioMin}
          className="filtro-range"
        />
      </div>

      {/* Filtros con checkbox */}
      <div className="filtro-seccion">
        <p className="filtro-subtitulo">Filtros rápidos:</p>
        <div className="filtro-checkboxes">
          {Object.keys(filtros).map((key) => (
            <label key={key} className="filtro-checkbox">
              <input
                type="checkbox"
                name={key}
                checked={filtros[key as keyof Filtros]}
                onChange={handleCheck}
              />
              <span>{key}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ordenamiento */}
      <div className="filtro-seccion">
        <label className="filtro-label">Ordenar por:</label>
        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value as OrdenOpciones)}
          className="filtro-select"
        >
          <option value="recomendados">Recomendados</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
          <option value="nuevos">Más nuevos</option>
          <option value="antiguos">Más antiguos</option>
          <option value="valorados">Mejor valorados</option>
        </select>
      </div>

      <button onClick={handleSubmit} className="filtro-boton">
        Aplicar filtros
      </button>
    </div>
  );
}
