import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import { useCart } from "../context/CartContext.jsx";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

function Cart() {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const deliveryFee = cartTotal > 0 && cartTotal < 999 ? 99 : 0;
  const grandTotal = cartTotal + deliveryFee;

  if (!cartItems.length) {
    return (
      <section className="section empty-state">
        <h1>Your cart is empty</h1>
        <p>Add products to see quantity controls, price totals, and checkout summary.</p>
        <Link to="/products" className="button button-primary">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="section cart-page">
      <div className="section-heading">
        <div>
          <p>Shopping cart</p>
          <h1>{cartCount} items selected</h1>
        </div>
        <button className="button button-secondary" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <div className="cart-layout">
        <div className="cart-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <aside className="summary-card">
          <h2>Order Summary</h2>
          <p>
            Subtotal <strong>{formatPrice(cartTotal)}</strong>
          </p>
          <p>
            Delivery <strong>{deliveryFee ? formatPrice(deliveryFee) : "Free"}</strong>
          </p>
          <hr />
          <p className="summary-total">
            Total <strong>{formatPrice(grandTotal)}</strong>
          </p>
          <button className="button button-primary">Proceed to Checkout</button>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
