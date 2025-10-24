import "./cartItem.css"

export interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  link?: string;
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
}

export default function CartItem({
  id,
  image,
  name,
  price,
  quantity,
  link,
  updateQuantity,
  removeItem,
}: CartItemProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="cart-item">
        <div className="quantity">
            <button onClick={() => updateQuantity(id, quantity + 1)}>▲</button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(id, quantity - 1)}>▼</button>
        </div>  
        <a href={link}>
          <img src={image} alt={name} />
        </a>
        <div className="info">
            <h4>{name}</h4>
            <p>{formatPrice(price)}</p>
        </div>

        <button className="delete" onClick={() => removeItem(id)}>
            🗑️
        </button>
    </div>
  );
}
