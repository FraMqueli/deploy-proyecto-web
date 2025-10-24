import { useState } from "react";
import CartItem from "../../componetns/cartModal/cartItem";
import CartSummary from "../../componetns/cartModal/cartResume";
import FooterBar from "../../componetns/footerBar/footerBar.tsx";
import Navbar from "./../../componetns/navbar/Navbar";
import "./Cart.css";

export default function CartPage() {
  const [cart, setCart] = useState<
    {
      id: number;
      image: string;
      name: string;
      price: number;
      quantity: number;
      link: string;
    }[]
  >([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=400&h=400&fit=crop",
      name: "Computador gamer",
      price: 2290900,
      quantity: 1,
      link: "/producto/computador-gamer",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      name: "Toalla baño lisa",
      price: 39990,
      quantity: 1,
      link: "/producto/computador-gamer",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      name: "Toalla baño lisa",
      price: 39990,
      quantity: 1,
      link: "/producto/computador-gamer",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      name: "Toalla baño lisa",
      price: 39990,
      quantity: 1,
      link: "/producto/computador-gamer",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container flex flex-col min-h-screen">
      <Navbar />
      <main className="cart-main flex-1 flex flex-col gap-6 px-4 py-6">
        <section className="cart-section flex-[2] w-full">
          <h2 className="bg-[#BFBFBF] text-white text-lg font-semibold p-4 rounded-full shadow-md w-full text-center">
            Carro de compras
          </h2>
          <div>
            {cart.length === 0 ? (
              <div>
                <p className="text-black">Tu carrito está vacío 😢</p>
              </div>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                  link={item.link}
                />
              ))
            )}
          </div>
        </section>
        <section className="flex-1 bg-[#BFBFBF] p-6 rounded-lg h-fit w-full">
          <CartSummary total={total} />
        </section>
      </main>
      <FooterBar />
    </div>
  );
}
