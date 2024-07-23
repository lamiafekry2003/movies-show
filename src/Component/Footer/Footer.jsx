import { Link } from "react-router-dom";
import "./footer.scss";
export default function Footer() {
  return (
    <nav className="mt-4" style={{ backgroundColor: "#032541" }}>
      <div className="container ">
      <div className="row pt-5">
          <div className="col-md-3">
            <Link
              className="nav-link fw-bold fs-3"
              to=""
              style={{ color: "#17b7da" }}
            >
              MOVIES-SHOW
            </Link>
          </div>
          <div className="col-md-3">
            <ul>
                <h3 className="text-light">Movies</h3>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="moviepopular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-light" to="movienowplay">
                    Now Playing
                  </Link>
                </li>
                <li >
                  <Link className="nav-link text-light" to="movieUpComing">
                    Up Coming
                  </Link>
                </li>
                <li >
                  <Link className="nav-link text-light" to="movieTopRated">
                    Top Rated
                  </Link>
                </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
                <h3 className="text-light fw-bold">TV-Show</h3>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="moviepopular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-light" to="movienowplay">
                    Now Playing
                  </Link>
                </li>
                <li >
                  <Link className="nav-link text-light" to="movieUpComing">
                    Up Coming
                  </Link>
                </li>
                <li >
                  <Link className="nav-link text-light" to="movieTopRated">
                    Top Rated
                  </Link>
                </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
                <h3 className="text-light fw-bold">Popular</h3>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="moviepopular">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-light" to="movienowplay">
                    Now Playing
                  </Link>
                </li>
                <li >
                  <Link className="nav-link text-light" to="movieUpComing">
                    Up Coming
                  </Link>
                </li>
                <li >
                  <Link className="nav-link text-light" to="movieTopRated">
                    Top Rated
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
