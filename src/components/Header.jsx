function Header() {
  return (
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>MyApp</strong>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-light" href="/dashboard">
              Dashboard
            </a>
            <a className="button is-light" href="/signout">
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;