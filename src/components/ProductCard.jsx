import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-link">
        <img src={product.image} alt={product.title} loading="lazy" />
      </Link>
      <div className="product-card-body">
        <span className="category-pill">{product.category}</span>
        <Link to={`/products/${product.id}`} className="product-title">
          {product.title}
        </Link>
        <p>{product.description}</p>
        <Rating value={product.rating} />
        <div className="product-card-footer">
          <strong>{formatPrice(product.price)}</strong>
          <div className="card-actions">
            <button onClick={() => toggleWishlist(product)} aria-label="Toggle wishlist">
              {isWishlisted(product.id) ? "Saved" : "Wish"}
            </button>
            <button className="button-primary" onClick={() => addToCart(product)}>
              Add
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
