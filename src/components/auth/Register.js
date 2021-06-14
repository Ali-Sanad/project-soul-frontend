import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';

const Register = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const {name, email, password, password2} = formData;

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(!passwordShown1);
  };

  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'error');
    } else {
      register({name, email, password});
      setAlert('Account created successfully', 'success');
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className=' mx-auto card rounded-lg  mt-6 mb-12 sm:w-4/5 md:w-1/2 lg:w-2/6 w-5/6'>
        <div className='mx-auto mt-6 ml-12 w-4/5'>
          <h4 className=' text-4xl bold my-2 text-blue-500'>Join Us </h4>
          <p className='text-md'>Make the most out of your life</p>
        </div>
        <form className='mt-2' onSubmit={(e) => onSubmit(e)}>
          <div className=' mt-6 '>
            <input
              className='block mx-auto mt-2  w-4/5 p-3 rounded-md
            border border-gray-900  focus:outline-none
            focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
            '
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='mt-6'>
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
          <div className='relative mx-auto  mt-6'>
            <input
              className='block mx-auto mt-6  w-4/5 p-3 rounded-md
             border border-gray-900 focus:outline-none
               focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
              '
              type={passwordShown1 ? 'text' : 'password'}
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
              onClick={() => togglePasswordVisiblity1()}
            >
              {passwordShown1 ? 'hide' : 'show'}
            </span>
          </div>
          <div className='relative mx-auto  mt-6'>
            <input
              className='block mx-auto mt-6  w-4/5 p-3 rounded-md
              border border-gray-900 focus:outline-none
              focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
              '
              type={passwordShown2 ? 'text' : 'password'}
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              value={password2}
              onChange={(e) => onChange(e)}
              required
            />
            <span
              className=' absolute text-md text-blue-500  cursor-pointer
             md:top-3 sm:right-16 md:right-14 lg:right-14   top-3   right-14'
              aria-hidden='true'
              onClick={() => togglePasswordVisiblity2()}
            >
              {passwordShown2 ? 'hide' : 'show'}
            </span>
          </div>
          <input
            type='submit'
            className=' block mx-auto mt-12 mb-12  bg-blue-500 hover:bg-blue-800 w-4/5 p-4 rounded-full text-white
           outline-none
           shadow-sm cursor-pointer'
            value='Register'
          />
        </form>
        <p className=' block text-center mt-12 mb-12'>
          Already on Soul?{' '}
          <span className=' text-blue-500  font-bold '>
            <Link to='/login'>Sign In</Link>
          </span>
        </p>
      </div>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {setAlert, register})(Register);
