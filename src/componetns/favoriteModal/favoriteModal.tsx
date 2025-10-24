export interface WishlistItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  link?: string;
  addToCart: (id: number) => void;
  removeFromWishlist: (id: number) => void;
}

export default function WishlistItem({
  id,
  image,
  name,
  price,
  link = "#",
  addToCart,
  removeFromWishlist,
}: WishlistItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4 hover:shadow-lg transition-shadow">
      <a href={link}>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg"
        />
      </a>
      <h3 className="text-md font-semibold text-gray-800 mt-3 text-center">
        {name}
      </h3>
      <p className="text-gray-600 font-medium mb-3 text-center">
        ${price.toLocaleString("es-CL")}
      </p>
      <div className="flex gap-2 w-full">
        <button
          onClick={() => addToCart(id)}
          className="flex-1 bg-[#BFBFBF] text-white px-3 py-2 rounded-lg hover:bg-gray-500 transition-colors"
        >
          Agregar 🛒
        </button>
        <button
          onClick={() => removeFromWishlist(id)}
          className="flex-1 bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-500 transition-colors"
        >
          Eliminar ❌
        </button>
      </div>
    </div>
  );
}
