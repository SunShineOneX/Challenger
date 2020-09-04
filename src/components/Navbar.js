import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav
          class="navbar sticky-top navbar-expand-lg navbar-light"
          id="nav__bar"
        ><Link to="/home">
          <img src={require("../assets/challenger-nav.png")} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link">
                <Link to="/games">Games</Link>
              </a>
              <a class="nav-item nav-link">
                <Link to="/keyboards">Keyboards</Link>
              </a>
              <a class="nav-item nav-link">
                <Link to="/monitors">Monitors</Link>
              </a>
              <a class="nav-item nav-link">
                <Link to="/reviews">Add Review</Link>
              </a>
              <a class="nav-item nav-link">
                <Link to="/reviews/list">Review List</Link>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
