function About() {
  return (
    <section className="section about-page">
      <div className="about-hero">
        <p>About Amazon</p>
        <h1>Everything you need, delivered with convenience.</h1>
        <span>
          Amazon brings together trusted products, helpful discovery, simple shopping tools, and
          reliable delivery so customers can find what they need quickly.
        </span>
      </div>
      <div className="about-grid">
        <article>
          <h2>Wide Selection</h2>
          <p>
            Browse electronics, fashion, home products, books, and daily accessories from a single
            organized marketplace.
          </p>
        </article>
        <article>
          <h2>Shopping Tools</h2>
          <p>
            Search, filter, sort, save favorites, and manage your cart with a clean experience built
            for quick decisions.
          </p>
        </article>
        <article>
          <h2>Customer Focus</h2>
          <p>
            Clear product details, transparent pricing, and convenient account access make shopping
            feel smooth from browsing to checkout.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
