function Rating({ value }) {
  const fullStars = Math.round(value);

  return (
    <div className="rating" aria-label={`${value} out of 5 stars`}>
      <span>{"★".repeat(fullStars)}</span>
      <span>{"☆".repeat(5 - fullStars)}</span>
      <strong>{value.toFixed(1)}</strong>
    </div>
  );
}

export default Rating;
