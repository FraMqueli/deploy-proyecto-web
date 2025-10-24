import Navbar from "../../componetns/navbar/Navbar";
import FooterBar from "../../componetns/footerBar/footerBar";
import ProductCard from "../../componetns/product/Product";
import Reviews from "../../componetns/reviews/Reviews";
import { Star, ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import "./SingleProduct.css";

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: 1,
    name: "Computador Gamer",
    price: 2290900,
    originalPrice: 2490900,
    discount: 8,
    image:
      "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=800&h=800&fit=crop",
    description:
      "Computador gamer de alto rendimiento con tarjeta gráfica NVIDIA, procesador Intel i7 y 16GB de RAM. Ideal para juegos exigentes y tareas de productividad.",
    rating: 4.6,
    reviews: 128,
    stock: 12,
    specs: [
      "Procesador: Intel i7 12th Gen",
      "Tarjeta Gráfica: NVIDIA RTX 4060",
      "RAM: 16GB DDR5",
      "Almacenamiento: SSD 512GB NVMe",
      "Refrigeración: Líquida RGB",
    ],
  };

  const store = {
    name: "TechZone Store",
    logo: "https://cdn-icons-png.flaticon.com/512/1086/1086933.png",
    rating: 4.8,
    reviews: 342,
    verified: true,
  };

  const relatedProducts = [
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      name: "Mouse inalámbrico",
      price: 19990,
      rating: 4.4,
      reviews: 89,
      link: "/test",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
      name: "Teclado mecánico RGB",
      price: 59990,
      rating: 4.7,
      reviews: 156,
      link: "/test",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop",
      name: "Audífonos gamer",
      price: 49990,
      rating: 4.5,
      reviews: 203,
      link: "/test",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    return (
      <div className="stars-container">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} size={18} fill="#facc15" color="#facc15" />
        ))}
        {halfStar && <Star size={18} fill="#facc15" color="#facc15" />}
        {Array.from({ length: 5 - fullStars - (halfStar ? 1 : 0) }).map(
          (_, i) => (
            <Star key={`empty-${i}`} size={18} color="#d1d5db" />
          )
        )}
      </div>
    );
  };

  const handleAddToCart = () => {
    console.log(`Agregado al carrito: ${quantity} unidades`);
  };

  return (
    <div className="single-container">
      <Navbar />

      {/* Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="breadcrumb-content">
          <span className="breadcrumb-link">Inicio</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-link">Computadoras</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </div>
      </nav>

      <main className="single-main">
        {/* Producto Principal */}
        <div className="single-product-container">
          <div className="single-product">
            {/* Imagen */}
            <div className="single-product-image">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
                {product.discount > 0 && (
                  <div className="discount-badge">-{product.discount}%</div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="single-product-info">
              <h1>{product.name}</h1>

              {/* Rating */}
              <div className="rating-section">
                {renderStars(product.rating)}
                <span className="rating-text">
                  {product.rating.toFixed(1)} • {product.reviews} valoraciones
                </span>
                {product.stock > 0 && (
                  <span className="stock-badge">{product.stock} en stock</span>
                )}
              </div>

              {/* Precio */}
              <div className="price-section">
                <span className="current-price">
                  ${product.price.toLocaleString("es-CL")}
                </span>
                {product.originalPrice > product.price && (
                  <span className="original-price">
                    ${product.originalPrice.toLocaleString("es-CL")}
                  </span>
                )}
              </div>

              {/* Descripción */}
              <p className="single-product-description">
                {product.description}
              </p>

              {/* Especificaciones */}
              <details className="specs-section">
                <summary className="specs-summary">
                  <ChevronDown size={20} />
                  Especificaciones técnicas
                </summary>
                <ul className="specs-list">
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </details>

              {/* Acciones */}
              <div className="actions-section">
                {/* Selector cantidad */}
                <div className="quantity-selector">
                  <label>Cantidad:</label>
                  <div className="quantity-control">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      min="1"
                      max={product.stock}
                    />
                    <button
                      onClick={() =>
                        setQuantity(Math.min(product.stock, quantity + 1))
                      }
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Botones */}
                <div className="buttons-group">
                  <button onClick={handleAddToCart} className="single-add-btn">
                    <ShoppingCart size={20} />
                    Agregar al carrito
                  </button>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`favorite-btn ${isFavorite ? "active" : ""}`}
                  >
                    <Heart
                      size={20}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Info */}
        <div className="store-info-section">
          <img src={store.logo} alt={store.name} className="store-logo" />
          <div className="store-details">
            <div className="store-header">
              <h3 className="store-name">{store.name}</h3>
              {store.verified && (
                <span className="store-verified">✓ Verificado</span>
              )}
            </div>
            <div className="store-rating">
              {renderStars(store.rating)}
              <span>
                {store.rating.toFixed(1)} • {store.reviews} reseñas
              </span>
            </div>
          </div>
          <button className="view-store-btn">Ver tienda</button>
        </div>

        {/* Productos Relacionados */}
        <section className="single-related">
          <h2>Productos relacionados</h2>
          <div className="single-related-grid">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                image={p.image}
                name={p.name}
                price={p.price}
                link={p.link}
              />
            ))}
          </div>
        </section>
        {/* Reviews */}
        <Reviews productId={product.id} />
      </main>

      <FooterBar />
    </div>
  );
}
