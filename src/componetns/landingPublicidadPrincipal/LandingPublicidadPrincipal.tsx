import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AdCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de anuncios con imagen y link
  const ads = [
    {
      id: 1,
      image:
        "https://tse4.mm.bing.net/th/id/OIP.jO62fC6JFV32eKSDTKOhYQHaE7?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "/promocion-zapatos",
      alt: "30%, 35% y 40% de descuento en calzado",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/R.866950c4f46f074b80557fe746fea8e8?rik=qv29OquMfscakQ&pid=ImgRaw&r=0",
      link: "/promocion-tecnologia",
      alt: "Ofertas en tecnología",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th?id=OIF.KmINrS%2fy6GoCKs5uDeZbog&cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      link: "/promocion-accesorios",
      alt: "Descuentos en accesorios",
    },
  ];

  // Cambio automático cada 2.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ads.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [ads.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ads.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAdClick = () => {
    window.location.href = ads[currentIndex].link;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto group">
      {/* Imagen del anuncio */}
      <div
        onClick={handleAdClick}
        className="relative overflow-hidden rounded-lg cursor-pointer bg-gray-200"
        style={{ aspectRatio: "3/1" }}
      >
        <img
          src={ads[currentIndex].image}
          alt={ads[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Badge HOT SALE */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          HOT SALE
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir al anuncio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
