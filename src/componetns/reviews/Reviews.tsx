import { Star, Send } from "lucide-react";
import { useState } from "react";
import "./Reviews.css";

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  helpful: number;
}

interface ReviewsProps {
  productId: number;
  reviews?: Review[];
}

export default function Reviews({ reviews = [] }: ReviewsProps) {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const defaultReviews: Review[] = [
    {
      id: 1,
      author: "Carlos M.",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      date: "hace 2 días",
      title: "Excelente rendimiento",
      comment:
        "Muy satisfecho con la compra. El computador corre todos mis juegos sin problemas. La refrigeración es muy buena y no hace mucho ruido.",
      helpful: 24,
    },
    {
      id: 2,
      author: "María González",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 4,
      date: "hace 1 semana",
      title: "Buen precio-rendimiento",
      comment:
        "Buena máquina para el precio. Cumple lo que promete. Mi única queja es que tarda un poco más en encender de lo esperado.",
      helpful: 18,
    },
    {
      id: 3,
      author: "Juan López",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      date: "hace 3 semanas",
      title: "Compra perfecta",
      comment:
        "Llegó antes de lo esperado y todo funciona perfecto. Embalaje excelente. La tienda fue muy atenta con mis consultas.",
      helpful: 32,
    },
  ];

  const displayReviews = reviews.length > 0 ? reviews : defaultReviews;

  const renderStars = (
    rating: number,
    interactive = false,
    onHover?: (r: number) => void,
    onLeave?: () => void
  ) => {
    return (
      <div className={`stars-display ${interactive ? "interactive" : ""}`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const displayRating = interactive
            ? hoverRating || userRating
            : rating;
          const isFilled = i < displayRating;

          return (
            <button
              key={i}
              className="star-btn"
              onClick={() => interactive && setUserRating(i + 1)}
              onMouseEnter={() => interactive && onHover?.(i + 1)}
              onMouseLeave={() => interactive && onLeave?.()}
              type="button"
            >
              <Star
                size={24}
                fill={isFilled ? "#facc15" : "none"}
                color={isFilled ? "#facc15" : "#d1d5db"}
              />
            </button>
          );
        })}
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userRating > 0 && title.trim() && comment.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setUserRating(0);
        setTitle("");
        setComment("");
        setSubmitted(false);
      }, 2000);
    }
  };

  const averageRating =
    displayReviews.reduce((sum, r) => sum + r.rating, 0) /
    displayReviews.length;

  return (
    <div className="reviews-section">
      <h2>Valoraciones y comentarios</h2>

      <div className="reviews-container">
        {/* Resumen de valoraciones */}
        <div className="reviews-summary">
          <div className="average-rating">
            <div className="rating-number">{averageRating.toFixed(1)}</div>
            <div className="rating-stars">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="rating-count">
              {displayReviews.length} valoraciones
            </div>
          </div>

          {/* Distribución de calificaciones */}
          <div className="rating-distribution">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = displayReviews.filter(
                (r) => r.rating === stars
              ).length;
              const percentage = (count / displayReviews.length) * 100;
              return (
                <div key={stars} className="rating-bar">
                  <span className="rating-label">{stars} ⭐</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="rating-count-small">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formulario para escribir valoración */}
        <div className="write-review">
          <h3>Escribe tu valoración</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tu calificación *</label>
              {renderStars(0, true, setHoverRating, () => setHoverRating(0))}
              {userRating > 0 && (
                <span className="selected-rating">
                  {userRating} estrellas seleccionadas
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="title">Título de tu reseña *</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej: Excelente producto"
                maxLength={100}
              />
            </div>

            <div className="form-group">
              <label htmlFor="comment">Tu comentario *</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Cuéntanos tu experiencia con este producto..."
                rows={4}
                maxLength={500}
              />
              <span className="char-count">{comment.length}/500</span>
            </div>

            <button
              type="submit"
              disabled={userRating === 0 || !title.trim() || !comment.trim()}
              className="submit-review-btn"
            >
              <Send size={18} />
              {submitted ? "¡Valoración enviada!" : "Enviar valoración"}
            </button>
          </form>
        </div>
      </div>

      {/* Lista de comentarios */}
      <div className="reviews-list">
        <h3>Todas las valoraciones ({displayReviews.length})</h3>
        {displayReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="avatar"
                />
                <div>
                  <h4>{review.author}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <div className="review-rating">{renderStars(review.rating)}</div>
            </div>

            <div className="review-content">
              <h4 className="review-title">{review.title}</h4>
              <p className="review-text">{review.comment}</p>
            </div>

            <div className="review-footer">
              <button className="helpful-btn">
                👍 Útil ({review.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
