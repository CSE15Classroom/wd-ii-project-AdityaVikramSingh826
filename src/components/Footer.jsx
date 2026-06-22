import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
      <div className="footer-grid">
        <div>
          <h3>amazon</h3>
          <p>Shop electronics, fashion, home essentials, books, and accessories in one place.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About</Link>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
      <p className="copyright">© 2026 Amazon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
