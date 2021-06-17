import React from 'react';

const ConfirmUserAccount = (props) => {
  if (props.match.path === '/pending-verification') {
    console.log(props.match.path);
  }
  return (
    <div className=' mx-auto card rounded-lg   mt-24 mb-12  w-5/6 '>
      <div className='mx-auto mt-6 ml-12 w-4/5'>
        <h6 className='mt-12 mb-12 text-base '>
          Your account has been registered successfully! A link has been sent to
          to your email, Please check the inbox to verify your account.
        </h6>
      </div>
    </div>
  );
};

export default ConfirmUserAccount;
