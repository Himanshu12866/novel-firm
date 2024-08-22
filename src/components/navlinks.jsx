import "../styles/navlinks.css";
export default function NavBar() {
  return (
    <div className="navbar navbar-expand-sm">
      <a href="/" className="navbar-brand">
      
        Jenga
      </a>
      <div className="bi bi-bag"></div>
      <button
        className="navbar-toggler"
        data-bs-target="#links"
        data-bs-toggle="collapse"
      >
        <span className="bi bi-list"></span>
      </button>
      <div className="navbar-collapse collapse" id="links">
        <ol className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Team
            </a>
          </li>
          <li className="nav-item input-box p-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              ></input>
              <span className="bi bi-search input-group-text"></span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
