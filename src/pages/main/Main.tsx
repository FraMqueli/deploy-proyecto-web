import { useState } from "react";
import Navbar from "./../../componetns/navbar/Navbar";
import ProductCard from "./../../componetns/product/Product.tsx";
import FooterBar from "../../componetns/footerBar/footerBar.tsx";
import UpButton from "../../componetns/upButtom/UpButtom.tsx";
import FilterSidebar from "../../componetns/filterSidebar/FilterSidebar.tsx";
import "./Main.css";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  link: string;
}

export default function Main() {
  const recentProducts: Product[] = [
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
    // Agrega más productos para probar paginación
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(20);

  const totalPages = Math.ceil(recentProducts.length / productsPerPage);

  const displayedProducts = recentProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="landing-container">
      <Navbar />

      <div className="landing-content">
        {/* Sidebar colapsable */}
        <FilterSidebar />

        {/* Productos */}
        <main className="landing-main">
          <div className="landing-products-header">
            <h2 className="landing-products-title">Tus últimos vistos</h2>
            <div className="products-per-page">
              <label htmlFor="perPage">Productos por página:</label>
              <select
                id="perPage"
                value={productsPerPage}
                onChange={handlePerPageChange}
              >
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
              </select>
            </div>
          </div>

          <div className="landing-products-grid">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                link={product.link}
              />
            ))}
          </div>

          {/* Paginación */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`pagination-button ${
                  page === currentPage ? "active" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </main>
      </div>

      <UpButton />
      <FooterBar />
    </div>
  );
}
