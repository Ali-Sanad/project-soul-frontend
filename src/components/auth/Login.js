import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';

const Login = ({login, isAuthenticated, user}) => {
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
    return <Redirect to='/' />;
  }
  return (
    <>
      <div className=' mx-auto card rounded-md  mt-24 md:w-4/12 w-4/6  '>
        <div className='mx-auto mt-6 ml-12 w-4/5'>
          <h4 className=' text-3xl bold my-2'>Sign In</h4>
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
              placeholder='Email Address'
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
            md:top-3 md:right-13 lg:right-14   top-3   right-14  '
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
      </div>

      <p className=' block text-center mt-12'>
        New to Soul?
        <span className=' text-blue-500  font-bold '>
          <Link to='/register'>
            <span> </span>Join now
          </Link>
        </span>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, {login})(Login);
