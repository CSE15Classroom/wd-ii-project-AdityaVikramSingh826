import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { products } from "../data/products.js";

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  if (!product) {
    return (
      <section className="section empty-state">
        <h1>Product not found</h1>
        <p>The product you opened may have moved or does not exist.</p>
        <Link className="button button-primary" to="/products">
          Back to Products
        </Link>
      </section>
    );
  }

  return (
    <section className="section product-details">
      <div className="details-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details-info">
        <span className="category-pill">{product.category}</span>
        <h1>{product.title}</h1>
        <Rating value={product.rating} />
        <p>{product.description}</p>
        <ul className="detail-list">
          <li>Eligible for fast delivery and easy returns.</li>
          <li>Save to wishlist or add directly to your cart.</li>
          <li>Detailed product information to help you choose confidently.</li>
        </ul>
        <strong className="details-price">{formatPrice(product.price)}</strong>
        <div className="details-actions">
          <button className="button button-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="button button-secondary" onClick={() => toggleWishlist(product)}>
            {isWishlisted(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
