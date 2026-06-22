import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section empty-state not-found">
      <h1>404</h1>
      <p>The page you are looking for is not available in this store.</p>
      <Link to="/" className="button button-primary">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;
