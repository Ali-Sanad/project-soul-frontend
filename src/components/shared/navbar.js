import React, { useState, useEffect } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
// import userimg from './../../assets/images/user-image.svg';
// import therapistimg from './../../assets/images/user.png';
import doctorImg from './../../assets/images/doctorImg.jpg';
import logoutimg from './../../assets/images/logout.png';
import noAvatar from '../../assets/images/noAvatar.gif';
import { connect } from 'react-redux';
import { Link as LinkScroll } from 'react-scroll';

//import { Link } from "@material-ui/core";

import { therapist_logout } from '../../actions/therapistAuth';
import { logout } from '../../actions/auth';

import logo from '../../assets/images/logo.png';

const Navbar = ({
  id,
  img,
  logout,
  therapist_logout,
  auth,
  therapistAuth,
  isAuthenticated_therapist,
  history,
}) => {
  /* scroll nav */
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  /* color nav */
  const [colnavbar, setColNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80 || window.innerWidth < 992) {
      setColNavbar(true);
    } else {
      setColNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });

  return (
    <>
      <nav
        className={
          colnavbar
            ? 'navBar navbar navbar-expand-lg color'
            : 'navBar navbar navbar-expand-lg'
        }
      >
        <div className='container'>
          <NavLink className='navbar-brand' to='/home'>
            <img className='navBar__image' src={logo} alt='logo'></img>
          </NavLink>
          <button
            className='custom-toggler navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarsExample09'
            aria-controls='navbarsExample09'
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label='Toggle navigation'
            onClick={handleNavCollapse}
          >
            <span className='navbar-toggler-icon'>
              <i className='fas fa-bars'></i>
            </span>
          </button>
          <div
            className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          >
            <ul className='navBar__list navbar-nav' id='navbarsExample09'>
              <li className='navBar__list__item nav-item'>
                <NavLink
                  className='navBar__list__item__link navBar__list__item__link--active nav-link'
                  aria-current='page'
                  to='/home'
                >
                  Home
                </NavLink>
              </li>
              <li className='navBar__list__item nav-item'>
                {/* <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/about"
                >
                  About
                </NavLink> */}
                <LinkScroll
                  to='about'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='navBar__list__item__link nav-link'
                  activeClass='active'
                >
                  About
                </LinkScroll>
              </li>
              <li className='navBar__list__item nav-item'>
                {/* <NavLink
                  className='navBar__list__item__link nav-link'
                  to='/works'
                >
                  How It Work
                </NavLink> */}
                <LinkScroll
                  to='works'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='navBar__list__item__link nav-link'
                  activeClass='active'
                >
                  How It Works
                </LinkScroll>
              </li>
              <li className='navBar__list__item nav-item'>
                <NavLink
                  className='navBar__list__item__link nav-link'
                  to='/articles'
                >
                  Article
                </NavLink>
              </li>
              <li className='navBar__list__item nav-item'>
                <NavLink
                  className='navBar__list__item__link nav-link'
                  to='/therapistlist'
                >
                  Therpist List
                </NavLink>
              </li>
              {auth && auth.isAuthenticated && (
                <li className='navBar__list__item nav-item'>
                  <NavLink
                    className='navBar__list__item__link nav-link'
                    to='/posts'
                  >
                    Community
                  </NavLink>
                </li>
              )}
              <li className='navBar__list__item nav-item'>
                {/* <NavLink
                  className='navBar__list__item__link nav-link'
                  to='/contact'
                >
                  Contact Us
                </NavLink> */}
                <LinkScroll
                  to='contact'
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='navBar__list__item__link nav-link'
                  activeClass='active'
                >
                  Contact
                </LinkScroll>
              </li>
            </ul>

            {auth &&
              therapistAuth &&
              !auth.isAuthenticated &&
              !therapistAuth.isAuthenticated_therapist && (
                <>
                  <button className='button btn'>
                    <span className='mainbtn'>
                      <NavLink to='/login' className='linkstyle'>
                        Login
                      </NavLink>
                    </span>
                  </button>

                  <button className='button btn'>
                    <span className='mainbtn'>
                      <NavLink to='/registeroptions' className='linkstyle'>
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
                <div className='navBar__login'>
                  {auth.isAuthenticated && (
                    // <Link to={`/therapistlist/${id}`}>
                    <Link
                      to={{
                        pathname: `/user-profile`,
                      }}
                    >
                      <img
                        className='navBar__login__user'
                        src={img || noAvatar}
                        alt=''
                      ></img>
                    </Link>
                  )}

                  {therapistAuth.isAuthenticated_therapist && (
                    <img
                      className='navBar__login__user'
                      src={
                        therapistAuth.therapist.therapistImg !== ''
                          ? therapistAuth.therapist.therapistImg
                          : doctorImg
                      }
                      alt=''
                    ></img>
                  )}

                  {/* <Link to="/user-profile"> */}
                  {isAuthenticated_therapist && (
                    <Link
                      to={{
                        pathname: `/therapistlist/${id}/summary`,
                      }}
                    >
                      <span className='navBar__login__span'>
                        {auth.isAuthenticated && auth.user.name}
                        {therapistAuth.isAuthenticated_therapist &&
                          therapistAuth.therapist.fname}
                      </span>
                    </Link>
                  )}
                  {!isAuthenticated_therapist && (
                    <Link
                      to={{
                        pathname: `/user-profile`,
                      }}
                    >
                      <span className='navBar__login__span'>
                        {auth.isAuthenticated && auth.user.name}
                        {therapistAuth.isAuthenticated_therapist &&
                          therapistAuth.therapist.fname}
                      </span>
                    </Link>
                  )}
                  <img
                    className='navBar__login__logout'
                    src={logoutimg}
                    alt=''
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      if (auth.isAuthenticated) {
                        logout();
                        history.replace('/');
                      }

                      if (therapistAuth.isAuthenticated_therapist) {
                        therapist_logout();
                        history.replace('/');
                      }
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

const mapStateToProps = (state) => ({
  img: state.therapistAuth?.therapist?.therapistImg,
  id: state.therapistAuth?.therapist?._id,
  isAuthenticated_therapist: state.therapistAuth.isAuthenticated_therapist,
  auth: state.auth,
  therapistAuth: state.therapistAuth,
});
export default connect(mapStateToProps, { logout, therapist_logout })(
  withRouter(Navbar)
);
