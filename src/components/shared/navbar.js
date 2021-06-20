import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="navBar__image"
              src="/images/logo.png"
              alt="logo"
            ></img>
          </a>
          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          >
            <ul className="navBar__list navbar-nav" id="navbarsExample09">
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link navBar__list__item__link--active nav-link"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink className="navBar__list__item__link nav-link" to="/">
                  About
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink className="navBar__list__item__link nav-link" to="/">
                  How It Work
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/articles"
                >
                  Article
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink className="navBar__list__item__link nav-link" to="/">
                  Community
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink className="navBar__list__item__link nav-link" to="/">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="button btn">
              <span className="mainbtn">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
