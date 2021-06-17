import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';
import {setAlert} from '../../actions/alert';

const Login = ({login, isAuthenticated, user, setAlert}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const {email, password} = formData;

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  if (isAuthenticated && user) {
    if (user.isAdmin === false) {
      setAlert('User logged in successfully', 'success');
      return <Redirect to='/' />;
    } else if (user.isAdmin === true) {
      setAlert('Admin logged in successfully', 'success');
      return <Redirect to='/admin-dashboard' />;
    }
  }
  return (
    <>
      <div className=' mx-auto card rounded-lg  mt-24 mb-12 sm:w-4/5 md:w-1/2 lg:w-2/6 w-5/6  '>
        <div className='mx-auto mt-6 ml-12 w-4/5'>
          <h4 className=' text-4xl bold my-2 text-blue-500'>Sign In</h4>
          <p className='text-sm'>Stay updated in your mintal world</p>
        </div>

        <form className='mt-6 ' onSubmit={(e) => onSubmit(e)}>
          <div className=' mt-6 '>
            <input
              className='block mx-auto mt-6  w-4/5 p-3 rounded-md
            border border-gray-900  focus:outline-none
             focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
            '
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          {/* password field and toggle password visibility */}
          <div className='relative mx-auto  mt-6'>
            <input
              className='block mx-auto mt-6  w-4/5 p-3 rounded-md
            border border-gray-900 focus:outline-none
              focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
             '
              type={passwordShown ? 'text' : 'password'}
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <span
              className=' absolute text-md text-blue-500  cursor-pointer
            md:top-3 sm:right-16 md:right-14 lg:right-14   top-3   right-14'
              aria-hidden='true'
              onClick={() => togglePasswordVisiblity()}
            >
              {passwordShown ? 'hide' : 'show'}
            </span>
          </div>

          <input
            type='submit'
            className=' block mx-auto mt-12 mb-12  bg-blue-500 hover:bg-blue-800 w-4/5 p-4 rounded-full text-white
            outline-none
            shadow-sm cursor-pointer'
            value='Sign in'
          />
        </form>

        <p className=' block text-center mt-12 mb-12'>
          New to Soul?
          <span className=' text-blue-500  font-bold '>
            <Link to='/register'>
              <span> </span>Join now
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {login, setAlert})(Login);
