import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#032541" }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-3"
          to=""
          style={{ color: "#17b7da" }}
        >
          MOVIES-SHOW
        </Link>
        <button
          className="navbar-toggler"
          style={{ color: "#17b7da" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link text-light fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="moviepopular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="movienowplay">
                    Now Playing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="movieUpComing">
                    Up Coming
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="movieTopRated">
                    Top Rated
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link text-light fw-bold"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TV-Shows
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link text-light fw-bold "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                People
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex align-item-center">
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-bold " href="#">
                Sign-Up
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-light fw-bold " href="#">
                Sign-in
              </a>
            </li>
            <li className=" mx-2 mt-2">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#17b7da" }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
