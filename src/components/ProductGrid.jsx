import ProductCard from "./ProductCard.jsx";

function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="empty-state">
        <h2>No products found</h2>
        <p>Try changing your search, filter, or sorting option.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
