import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { products } from "../data/products.js";

function Home() {
  const featured = products.filter((product) => product.rating >= 4.5).slice(0, 8);

  return (
    <>
      <HeroBanner />
      <section className="section">
        <div className="section-heading">
          <div>
            <p>Featured today</p>
            <h2>Top-rated deals</h2>
          </div>
          <Link to="/products" className="button button-secondary">
            View all
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>
      <section className="benefits-band">
        <div>
          <strong>Fast Delivery</strong>
          <span>Quick shipping options on eligible products.</span>
        </div>
        <div>
          <strong>Easy Shopping</strong>
          <span>Save items, compare prices, and return when ready.</span>
        </div>
        <div>
          <strong>Secure Checkout</strong>
          <span>Simple order summary before you place your order.</span>
        </div>
      </section>
    </>
  );
}

export default Home;
