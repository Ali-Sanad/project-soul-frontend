import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetPassword } from "../../../actions/therapistAuth";
import { Redirect } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

import { setTherapistAuthToken } from "../../../utils/setAuthToken";
import { Link } from "react-router-dom";
const TherapistResetPassword = ({ match, resetPassword, auth }) => {
  useEffect(() => {
    setTherapistAuthToken(match.params.id);
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
  if (auth.redirect === true) {
    return <Redirect to="/logintherapist" />;
  }

  return (
    <>
      <div className=" w-3/4 md:w-2/3 lg:w-1/3 mt-24 mx-auto  h-screen bg-soul_bg font-Nunito">
        <div className="w-44 h-24 mx-auto">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <h4 className="text-2xl   text-center"> Reset Password</h4>

        <form className="mt-6 " onSubmit={(e) => onSubmit(e)}>
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

          <div className="mt-8  ">
            <input
              type="submit"
              className=" block bg-soul-100 mx-auto hover:bg-soul-300 py-2 px-4 rounded-full
                outline-none
                shadow-sm cursor-pointer"
              value="Submit"
            />
          </div>
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
