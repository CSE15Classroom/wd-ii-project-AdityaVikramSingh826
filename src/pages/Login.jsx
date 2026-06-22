function Login() {
  return (
    <section className="auth-page">
      <form className="auth-card">
        <h1>Sign in</h1>
        <label>
          Email or mobile phone number
          <input type="email" placeholder="student@example.com" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter password" required />
        </label>
        <button className="button button-primary" type="submit" onClick={(event) => event.preventDefault()}>
          Continue
        </button>
        <p>
          By continuing, you agree to Amazon's conditions of use and privacy notice.
        </p>
      </form>
    </section>
  );
}

export default Login;
