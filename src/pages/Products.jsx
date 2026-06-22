import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryMenu from "../components/CategoryMenu.jsx";
import Loader from "../components/Loader.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { products } from "../data/products.js";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialSearch = searchParams.get("search") || "";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [sortOption, setSortOption] = useState("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const params = {};
    if (activeCategory !== "All") params.category = activeCategory;
    if (searchTerm.trim()) params.search = searchTerm.trim();
    setSearchParams(params, { replace: true });
  }, [activeCategory, searchTerm, setSearchParams]);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    return [...filtered].sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating-high") return b.rating - a.rating;
      return a.id - b.id;
    });
  }, [activeCategory, searchTerm, sortOption]);

  return (
    <section className="section catalog-page">
      <div className="section-heading">
        <div>
          <p>Browse catalog</p>
          <h1>Products</h1>
        </div>
        <span>{visibleProducts.length} items</span>
      </div>

      <div className="catalog-toolbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <select
          className="sort-select"
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
          aria-label="Sort products"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
          <option value="rating-high">Rating High to Low</option>
        </select>
      </div>

      <CategoryMenu activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      {loading ? <Loader /> : <ProductGrid products={visibleProducts} />}
    </section>
  );
}

export default Products;
