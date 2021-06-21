import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 footer__logo'>
              <img src='./images/logo.png' alt=''></img>
            </div>
            <div className='col-4 footer__content'>
              <h5>Content</h5>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>How it works</li>
                <li>Reviews</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='col-4 footer__links'>
              <h5>Follow Us</h5>
              <img src='./images/facebook.png' alt=''></img>
              <img src='./images/twitter.png' alt=''></img>
              <img src='./images/insta.png' alt=''></img>
            </div>
            <hr></hr>
            <div className='col-12'>
              <p>All Rights Reserved. copyright © 2021 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
