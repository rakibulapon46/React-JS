import { NavLink, Link } from "react-router-dom";
import "./BlogCSS/Blog.css";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-md bg-body">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blog Website</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-lg-0 fs-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/sponsor">Sponsor</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex ms-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar