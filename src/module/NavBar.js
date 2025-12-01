import React, { useState } from 'react';
import'../style/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Navbar = () => {
  // State to handle navbar collapse
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  // Toggle collapse state on button click
  const toggleNavbar = () => setIsNavbarCollapsed(!isNavbarCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top custom-navbar">
      <div className="container d-flex ">
        <a className="navbar-brand" href="https://www.indiflyventures.com/">
            <img src="./assets/logo1.svg"alt="logo"  style={{ height: "40px" }}></img>
       </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Toggle navbar collapse on button click
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavbarCollapsed} // Set expanded based on state
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.indiflyventures.com/">Our Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.indiflyventures.com/">InCORE</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="https://www.indiflyventures.com/">INDsights</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="https://www.indiflyventures.com/">About us</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="https://www.indiflyventures.com/">Get in Touch</a>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
