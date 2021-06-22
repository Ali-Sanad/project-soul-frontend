import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import userimg from "./../../assets/images/user.png";
import logoutimg from "./../../assets/images/logout.png";

const Navbar = () => {
  /* scroll nav */
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  /* color nav */
  const [colnavbar, setColNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80 || window.innerWidth < 992) {
      setColNavbar(true);
    } else {
      setColNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });


  return (
    <>
      <nav
        className={
          colnavbar
            ? "navBar navbar navbar-expand-lg color"
            : "navBar navbar navbar-expand-lg"
        }
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <img
              className="navBar__image"
              src="/images/logo.png"
              alt="logo"
            ></img>
          </NavLink>
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
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/therapistslist"
                >
                  Therpist List
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
            <div className="navBar__login">
              <img className="navBar__login__user" src={userimg}></img>
              <span className="navBar__login__span">Menna Omar</span>
              <img className="navBar__login__logout" src={logoutimg}></img>
            </div>


            {/* <button className="button btn">
							<span className="mainbtn">
								<NavLink to="/login">Login</NavLink>
							</span>
						</button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
