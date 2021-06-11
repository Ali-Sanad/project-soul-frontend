import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const LandingPage = ({isAuthenticated, logout}) => {
  return (
    <>
      <div className='text-center font-bold  text-lg font-Nunito mt-24'>
        "Welcome to soul project created with react + tailwindcss"
      </div>

      {!isAuthenticated && (
        <div className='flex justify-center mt-10'>
          <Link
            to='/login'
            className=' btn mx-5 text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-in-out duration-500'
          >
            Login
          </Link>

          <Link
            to='/register'
            className=' btn mx-5 text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-in-out duration-500'
          >
            Register
          </Link>
        </div>
      )}

      {isAuthenticated && (
        <div className='flex justify-center mt-10'>
          <Link
            to='/'
            onClick={logout}
            className=' btn mx-5 text-primary border-primary md:border-2
            hover:bg-primary hover:text-white transition ease-in-out
            duration-500'
          >
            {' '}
            Logout
          </Link>
        </div>
      )}
    </>
  );
};

LandingPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {logout})(LandingPage);
