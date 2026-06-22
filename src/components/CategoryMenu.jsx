import { categories } from "../data/products.js";

function CategoryMenu({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-menu" aria-label="Product categories">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
