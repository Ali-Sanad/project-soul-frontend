import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4 footer__logo">
              <img src="./images/logo.png" alt=""></img>
            </div>
            <div className="col-4 footer__content">
              <h5>Content</h5>
              <ul className="footer_list">
                <NavLink to="/home">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/about">
                  <li>About</li>
                </NavLink>
                <NavLink to="/works">
                  <li>How it works</li>
                </NavLink>
                <NavLink to="/contact">
                  <li>Contact Us</li>
                </NavLink>
              </ul>
            </div>
            <div className="col-4 footer__links">
              <h5>Follow Us</h5>
              <img src="./images/facebook.png" alt=""></img>
              <img src="./images/twitter.png" alt=""></img>
              <img src="./images/insta.png" alt=""></img>
            </div>
            <hr></hr>
            <div className="col-12">
              <p>All Rights Reserved. copyright © 2021 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
