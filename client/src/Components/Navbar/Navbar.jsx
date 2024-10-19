import React from 'react';

/* import { FaCartPlus } from "react-icons/fa"; */
import logo from '../../Assets/logo.png';
 /* import './Navbar.css' */

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
  <div className="container">
    <img src={logo} alt='logo' height="30" loading="lazy" />
    <button className="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
        <i className="fas fa-bars"></i>
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarExample01">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <a className="nav-link" aria-current="page" href="#news">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#pets">Pets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#adoptions">Adoptions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#foundation">Foundation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#help">How can I help?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#about">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#contact">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  );
}

export default Navbar;


