import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {resetPassword} from '../../../actions/auth';
import {Link, Redirect} from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

import {setAuthToken} from '../../../utils/setAuthToken';

const ResetPassword = ({match, resetPassword, auth}) => {
  useEffect(() => {
    setAuthToken(match.params.id);
  }, [match.params.id]);

  const [newPassword, setNewPassword] = useState('');

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onChange = (e) => {
    setNewPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    resetPassword({newPassword});
  };

  if (auth.redirect === true) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      <div className=' w-3/4 md:w-2/3 lg:w-1/3 mt-24 mx-auto  h-screen bg-soul_bg font-Nunito'>
        <div className='w-44 h-24 mx-auto'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <h4 className='text-2xl   text-center'> Reset Password</h4>

        <form className='mt-6 ' onSubmit={(e) => onSubmit(e)}>
          {/* password field and toggle password visibility */}
          <div className='relative mx-auto  mt-6'>
            <input
              className='block mx-auto mt-2  w-4/5 p-3 rounded-full
              border focus:outline-none
              focus:ring-1 focus:to-soul focus:border-transparent 
             '
              type={passwordShown ? 'text' : 'password'}
              placeholder='New Password'
              name='password'
              minLength='6'
              value={newPassword}
              onChange={(e) => onChange(e)}
              required
            />
            <span
              className=' absolute text-md text-soul-300  cursor-pointer
              md:top-4 sm:right-16 md:right-20    top-4   right-12'
              aria-hidden='true'
              onClick={() => togglePasswordVisiblity()}
            >
              {passwordShown ? 'hide' : 'show'}
            </span>
          </div>

          <div className='mt-8  '>
            <input
              type='submit'
              className=' block bg-soul-100 mx-auto hover:bg-soul-300 py-2 px-4 rounded-full
                outline-none
                shadow-sm cursor-pointer'
              value='Submit'
            />
          </div>
        </form>
      </div>
    </>
  );
};
ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {resetPassword})(ResetPassword);
