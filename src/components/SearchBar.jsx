function SearchBar({ searchTerm, onSearchChange, compact = false }) {
  return (
    <form className={`search-bar ${compact ? "search-bar--compact" : ""}`} role="search">
      <select aria-label="Search category">
        <option>All</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home</option>
        <option>Books</option>
      </select>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search Amazon"
        aria-label="Search products"
      />
      <button type="submit" aria-label="Submit search" onClick={(event) => event.preventDefault()}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
