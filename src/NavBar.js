import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/home" class="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio" class="nav-link">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">Contact</Link>
              </li> 
              <li class="nav-item">
                <Link to="/employee" class="nav-link">Employee</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
