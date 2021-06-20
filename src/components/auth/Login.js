import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';
import {setAlert} from '../../actions/alert';
import loginImage from './../../assets/images/login.png';
import logo from './../../assets/images/logo.png';
import '../../index.css';
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
      return <Redirect to='/' />;
    } else if (user.isAdmin === true) {
      return <Redirect to='/admin-dashboard' />;
    }
  }
  return (
    <>
      <div className='grid sm:grid-cols-2 grid-cols-1  h-screen bg-soul_bg font-Nunito'>
        <div className=''>
          <div className='w-44 h-24 mx-auto'>
            <img src={logo} alt='' />
          </div>
          <h4 className='text-4xl font-bold  text-center'>Login</h4>
          <div className='flex justify-center mt-12 mb-12'>
            <h2 className='text-2xl   inline-block mx-3 cursor-pointer '>
              {' '}
              <Link to='/login' className='hover:text-soul-300 hover:underline'>
                User
              </Link>
            </h2>
            <h2 className='text-2xl inline-block mx-3 cursor-pointer '>
              <Link
                to='/logintherapist'
                className='hover:text-soul-300
               hover:underline'
              >
                Therapist
              </Link>
            </h2>
          </div>
          <form className='mt-2' onSubmit={(e) => onSubmit(e)}>
            <div className=' mt-6 '>
              <input
                className='block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none
                focus:ring-1 focus:to-soul focus:border-transparent 
            '
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='relative mx-auto  mt-6'>
              <input
                className='block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none 
                focus:ring-1 focus:to-soul focus:border-transparent 
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
                className=' absolute text-md text-soul-300  cursor-pointer
                md:top-4 sm:right-16 md:right-14 lg:right-20   top-4   right-20'
                aria-hidden='true'
                onClick={() => togglePasswordVisiblity()}
              >
                {passwordShown ? 'hide' : 'show'}
              </span>
              <div className='grid grid-cols-2 lg:ml-20 md:ml-16 sm:ml-10 ml-16 '>
                <p className=' inline-block mt-6    cursor-pointer'>
                  <Link to='/forgot-password' className='hover:text-soul-300'>
                    Forgot password ?
                  </Link>
                </p>
                <p className=' inline-block mt-6   cursor-pointer'>
                  <Link to='/register' className='hover:text-soul-300'>
                    Don't have an account ?
                  </Link>
                </p>
              </div>
            </div>
            <div className='mt-8 sm:ml-2'>
              <input
                type='submit'
                className=' block  bg-soul-100 hover:bg-soul-300  sm:ml-10 md:ml-16 ml-16  py-2 px-4 rounded-full
                outline-none
                shadow-sm cursor-pointer'
                value='Sign in'
              />
            </div>
          </form>
        </div>
        <div className=' h-screen sm:block hidden'>
          <img src={loginImage} alt='' className='h-screen object-cover' />
        </div>
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
