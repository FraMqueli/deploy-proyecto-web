import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  link?: string;
}

export default function ProductCard({
  image,
  name,
  price,
  link = "/test",
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Imagen del producto */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Botón de favorito */}
        <button
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
          aria-label="Agregar a favoritos"
        >
          <Heart size={20} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Información del producto */}
      <div className="p-4 flex flex-col gap-2">
        {/* Nombre del producto */}
        <h3 className="text-sm text-gray-700 line-clamp-2 min-h-[40px]">
          {name}
        </h3>

        {/* Precio */}
        <p className="text-xl font-bold text-gray-900">{formatPrice(price)}</p>

        {/* Botón ver más */}
        <a
          href={link}
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-center transition-colors duration-200"
        >
          Ver más
        </a>
      </div>
    </div>
  );
}
