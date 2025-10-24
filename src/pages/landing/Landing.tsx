import { useState, useEffect } from "react";
import Navbar from "./../../componetns/navbar/Navbar";
import AdCarousel from "../../componetns/landingPublicidadPrincipal/LandingPublicidadPrincipal.tsx";
import ProductCard from "./../../componetns/product/Product.tsx";
import FooterBar from "../../componetns/footerBar/footerBar.tsx";
import "./Landing.css";
import logo from "../../../assets/logo_web.png";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const recentProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=400&h=400&fit=crop",
      name: "Computador gamer",
      price: 2290900,
      link: "/test",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      name: "Toalla baño lisa",
      price: 39990,
      link: "/test",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=400&fit=crop",
      name: "Toalla baño lisa",
      price: 6990,
      link: "/test",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
      name: "Juego de vajilla",
      price: 25990,
      link: "/test",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
      name: "Alimento para perros",
      price: 5990,
      link: "/test",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
      name: "Juego de dados",
      price: 54990,
      link: "/test",
    },
  ];

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={logo} />
        <p>
          <em>Todo lo que necesitas, sin salir de casa</em>
        </p>
      </div>
    );
  }

  return (
    <div className="landing-container fade-in">
      <Navbar />

      <main className="landing-main">
        <section className="landing-section">
          <AdCarousel />
        </section>

        <section>
          <h2 className="landing-products-title">Tus últimos vistos</h2>

          <div className="landing-products-grid">
            {recentProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                link={product.link}
              />
            ))}
          </div>
        </section>
      </main>

      <FooterBar />
    </div>
  );
}
