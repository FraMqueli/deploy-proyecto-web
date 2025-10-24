import { useState } from "react";
import FooterBar from "../../componetns/footerBar/footerBar.tsx";
import Navbar from "../../componetns/navbar/Navbar";
import ProductModal from "../../componetns/favoriteModal/favoriteModal.tsx";
import "./Favorite.css";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=400&h=400&fit=crop",
      name: "Computador gamer",
      price: 2290900,
      link: "/producto/computador-gamer",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      name: "Toalla baño lisa",
      price: 39990,
      link: "/producto/computador-gamer",
    },
  ]);

  const addToCart = (id: number) => {
    console.log("Agregar al carrito:", id);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="landing-container flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col gap-6 px-4 py-6">
        <section className="landing-section w-full">
          <h2 className="bg-[#BFBFBF] text-white text-lg font-semibold p-4 rounded-full shadow-md w-full text-center">
            Wishlist
          </h2>
          {wishlist.length === 0 ? (
            <p className="mt-4 text-center text-gray-600">
              No hay favoritos 😢
            </p>
          ) : (
            <div className="landing-products-grid mt-6">
              {wishlist.map((item) => (
                <ProductModal
                  key={item.id}
                  link={item.link}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  addToCart={addToCart}
                  removeFromWishlist={removeFromWishlist}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <FooterBar />
    </div>
  );
}
