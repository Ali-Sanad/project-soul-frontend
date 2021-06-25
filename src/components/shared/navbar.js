import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import userimg from "./../../assets/images/user-image.svg";
import therapistimg from "./../../assets/images/user.png";
import logoutimg from "./../../assets/images/logout.png";

const Navbar = ({ logout, therapist_logout, auth, therapistAuth }) => {
  /* scroll nav */
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  console.log(auth);
  /* color nav */
  const [colnavbar, setColNavbar] = useState(false);
  const changeBackground = () => {
    // console.log(window.scrollY);
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
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/works"
                >
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
                  to="/therapistlist"
                >
                  Therpist List
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/posts"
                >
                  Community
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {auth &&
              therapistAuth &&
              !auth.isAuthenticated &&
              !therapistAuth.isAuthenticated_therapist && (
                <>
                  <button className="button btn">
                    <span className="mainbtn">
                      <NavLink to="/login" className="linkstyle">
                        Login
                      </NavLink>
                    </span>
                  </button>

                  <button className="button btn">
                    <span className="mainbtn">
                      <NavLink to="/registeroptions" className="linkstyle">
                        Register
                      </NavLink>
                    </span>
                  </button>
                </>
              )}

            {/* logout user or therapist */}
            {((auth && auth.isAuthenticated) ||
              (therapistAuth && therapistAuth.isAuthenticated_therapist)) && (
              <>
                <div className="navBar__login">
                  {auth.isAuthenticated && (
                    <img
                      className="navBar__login__user"
                      src={userimg}
                      alt=""
                    ></img>
                  )}

                  {therapistAuth.isAuthenticated_therapist && (
                    <img
                      className="navBar__login__user"
                      src={
                        therapistAuth.therapist.therapistImg !== ""
                          ? therapistAuth.therapist.therapistImg
                          : therapistimg
                      }
                      alt=""
                    ></img>
                  )}

                  <span className="navBar__login__span">
                    {auth.isAuthenticated && auth.user.name}
                    {therapistAuth.isAuthenticated_therapist &&
                      therapistAuth.therapist.fname}
                  </span>
                  <img
                    className="navBar__login__logout"
                    src={logoutimg}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (auth.isAuthenticated) logout();
                      if (therapistAuth.isAuthenticated_therapist)
                        therapist_logout();
                    }}
                  ></img>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
