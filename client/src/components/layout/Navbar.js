import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collpase navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li>
              <Link
                to="/register"
                className="nav-link"
              >Register
              </Link>
            </li>
            <Link
              to="/login"
              className="nav-link"
            >Log In
              </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
