import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

function Navbar() {
  const navigate = useNavigate();
  const [navSearch, setNavSearch] = useState("");
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { theme, toggleTheme } = useTheme();

  const handleSearch = (term) => {
    setNavSearch(term);
    navigate(`/products${term.trim() ? `?search=${encodeURIComponent(term.trim())}` : ""}`);
  };

  return (
    <header className="site-header">
      <div className="top-nav">
        <Link to="/" className="brand" aria-label="Amazon home">
          <span>amazon</span>
        </Link>
        <SearchBar searchTerm={navSearch} onSearchChange={handleSearch} compact />
        <div className="nav-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? "Moon" : "Sun"}
          </button>
          <NavLink to="/wishlist" className="nav-badge" aria-label="Wishlist">
            Wishlist <strong>{wishlistCount}</strong>
          </NavLink>
          <NavLink to="/cart" className="nav-badge" aria-label="Cart">
            Cart <strong>{cartCount}</strong>
          </NavLink>
        </div>
      </div>
      <nav className="link-nav" aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/products?category=Electronics">Electronics</NavLink>
        <NavLink to="/products?category=Fashion">Fashion</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
