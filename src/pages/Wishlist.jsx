import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!wishlistItems.length) {
    return (
      <section className="section empty-state">
        <h1>Your wishlist is empty</h1>
        <p>Save products you like and move them to cart when you are ready.</p>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p>Saved for later</p>
          <h1>Wishlist</h1>
        </div>
        <span>{wishlistItems.length} saved items</span>
      </div>
      <div className="product-grid">
        {wishlistItems.map((product) => (
          <div className="wishlist-wrap" key={product.id}>
            <ProductCard product={product} />
            <button
              className="button button-secondary"
              onClick={() => {
                addToCart(product);
                removeFromWishlist(product.id);
              }}
            >
              Move to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wishlist;
