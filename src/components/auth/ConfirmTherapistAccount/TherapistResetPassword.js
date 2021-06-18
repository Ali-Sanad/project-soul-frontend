import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPassword } from "../../../actions/therapistAuth";
import { Redirect } from "react-router-dom";

import setAuthToken from "../../../utils/setAuthToken";

const TherapistResetPassword = ({ match, resetPassword, auth }) => {
  useEffect(() => {
    setAuthToken(match.params.id);
  }, [match.params.id]);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const { password, confirmPassword } = formData;

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
    resetPassword(match.params.id, { password, confirmPassword });
  };
  console.log("auth", auth);
  if (auth.redirect === true) {
    return <Redirect to="/logintherapist" />;
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
              placeholder="confirm Password"
              name="confirmPassword"
              minLength="6"
              value={confirmPassword}
              onChange={(e) => onChange(e)}
              required
            />
            <span
              className=" absolute text-md text-blue-500  cursor-pointer
            md:top-3 sm:right-16 md:right-14 lg:right-14   top-3   right-14"
              aria-hidden="true"
              onClick={() => togglePasswordVisiblity2()}
            >
              {passwordShown2 ? "hide" : "show"}
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
TherapistResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.therapistAuth,
});

export default connect(mapStateToProps, { resetPassword })(
  TherapistResetPassword
);
