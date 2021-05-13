import React from "react";
import { Link } from "react-router-dom"

function Header () {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html"> Amy Pastorius </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link"  to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header;