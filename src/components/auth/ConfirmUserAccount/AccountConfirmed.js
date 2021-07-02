import React from 'react';
import {Link} from 'react-router-dom';

const AccountConfirmed = (props) => {
  if (props.match.path === '/user-email-confirmed') {
  }

  return (
    <div className='  w-2/3  mt-24 mx-auto  h-screen bg-soul_bg font-Nunito'>
      <div className='mx-auto mt-24 ml-12 w-4/5'>
        <h4 className=' sm:text-4xl text-2xl bold my-2 text-soul-300'>
          Your Soul account has been confirmed !
        </h4>
        <h6 className='mt-12 mb-12'>
          Please login to your account ?
          <span className='text-soul-300 font-bold  sm:ml-6'>
            <Link
              to='/login'
              className=' text-gray-600 no-underline hover:text-soul-300'
            >
              Login
            </Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default AccountConfirmed;
