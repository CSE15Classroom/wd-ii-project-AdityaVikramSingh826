import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <Link to={`/products/${item.id}`}>{item.title}</Link>
        <p>{item.category}</p>
        <strong>{formatPrice(item.price)}</strong>
      </div>
      <div className="quantity-control" aria-label={`Quantity for ${item.title}`}>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
      <button className="text-danger" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </article>
  );
}

export default CartItem;
