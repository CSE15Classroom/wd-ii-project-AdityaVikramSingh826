import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>Great Indian Tech & Lifestyle Sale</p>
        <h1>Premium products, sharp prices, fast checkout.</h1>
        <span>
          Explore handpicked electronics, fashion, home essentials, books, and accessories with
          fast delivery and everyday value.
        </span>
        <div className="hero-actions">
          <Link to="/products" className="button button-primary">
            Shop Deals
          </Link>
          <Link to="/about" className="button button-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
