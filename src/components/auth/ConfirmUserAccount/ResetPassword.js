import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPassword } from "../../../actions/auth";
import { Redirect } from "react-router-dom";

import setAuthToken from "../../../utils/setAuthToken";

const ResetPassword = ({ match, resetPassword, auth }) => {
  useEffect(() => {
    setAuthToken(match.params.id);
  }, [match.params.id]);

<<<<<<< HEAD
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });
=======
  const [newPassword, setNewPassword] = useState('');
>>>>>>> e5312ffbd27becc5f42bbbc70969c98d460e539f

  const [passwordShown, setPasswordShown] = useState(false);

<<<<<<< HEAD
  const { password, newPassword } = formData;

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(!passwordShown1);
  };
  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    resetPassword({ password, newPassword });
=======
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onChange = (e) => {
    setNewPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    resetPassword({newPassword});
>>>>>>> e5312ffbd27becc5f42bbbc70969c98d460e539f
  };

  if (auth.redirect === true) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div className=" mx-auto card rounded-lg  mt-24 mb-12 sm:w-4/5 md:w-1/2 lg:w-2/6 w-5/6  ">
        <div className="mx-auto mt-6 ml-12 w-4/5">
          <h4 className=" text-4xl bold my-2 text-blue-500">Reset Password</h4>
        </div>

        <form className="mt-6 " onSubmit={(e) => onSubmit(e)}>
          {/* password field and toggle password visibility */}
          <div className="relative mx-auto  mt-6">
            <input
              className="block mx-auto mt-6  w-4/5 p-3 rounded-md
            border border-gray-900 focus:outline-none
              focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
<<<<<<< HEAD
             "
              type={passwordShown1 ? "text" : "password"}
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <span
              className=" absolute text-md text-blue-500  cursor-pointer
            md:top-3 sm:right-16 md:right-14 lg:right-14   top-3   right-14"
              aria-hidden="true"
              onClick={() => togglePasswordVisiblity1()}
            >
              {passwordShown1 ? "hide" : "show"}
            </span>
          </div>

          <div className="relative mx-auto  mt-6">
            <input
              className="block mx-auto mt-6  w-4/5 p-3 rounded-md
            border border-gray-900 focus:outline-none
              focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
             "
              type={passwordShown2 ? "text" : "password"}
              placeholder="New Password"
              name="newPassword"
              minLength="6"
=======
             '
              type={passwordShown ? 'text' : 'password'}
              placeholder='New Password'
              name='password'
              minLength='6'
>>>>>>> e5312ffbd27becc5f42bbbc70969c98d460e539f
              value={newPassword}
              onChange={(e) => onChange(e)}
              required
            />
            <span
<<<<<<< HEAD
              className=" absolute text-md text-blue-500  cursor-pointer
            md:top-3 sm:right-16 md:right-14 lg:right-14   top-3   right-14"
              aria-hidden="true"
              onClick={() => togglePasswordVisiblity2()}
            >
              {passwordShown2 ? "hide" : "show"}
=======
              className=' absolute text-md text-blue-500  cursor-pointer
            md:top-3 sm:right-16 md:right-14 lg:right-14   top-3   right-14'
              aria-hidden='true'
              onClick={() => togglePasswordVisiblity()}
            >
              {passwordShown ? 'hide' : 'show'}
>>>>>>> e5312ffbd27becc5f42bbbc70969c98d460e539f
            </span>
          </div>

          <input
            type="submit"
            className=" block mx-auto mt-12 mb-12  bg-blue-500 hover:bg-blue-800 w-4/5 p-4 rounded-full text-white
            outline-none
            shadow-sm cursor-pointer"
            value="Submit"
          />
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

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
