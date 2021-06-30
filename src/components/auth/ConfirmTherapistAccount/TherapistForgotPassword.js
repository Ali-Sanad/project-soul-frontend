import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forgotPassword } from "../../../actions/therapistAuth";
import logo from "../../../assets/images/logo.png";

const TherapistForgotPassword = ({ forgotPassword, auth }) => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    forgotPassword({ email });
  };

  return (
    <div className=" w-2/3 lg:w-1/3 mt-24 mx-auto  h-screen bg-soul_bg font-Nunito ">
      {auth.note ? (
        <>
          <div className="mx-auto mt-25  w-4/5 font-Nunito">
            <h4 className=" text-xl bold my-2 text-center ">
              An email has been sent to{" "}
              <span className="text-soul-300">{email} </span>, check your inbox
              and reset your password !
            </h4>
          </div>
        </>
      ) : (
        <>
          <div className="w-44 h-24 mx-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <h4 className="text-2xl   text-center"> Forgot Password</h4>

          <form className="mt-6 mx-auto" onSubmit={(e) => onSubmit(e)}>
            <div className=" mt-6">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
              border focus:outline-none
              focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="mt-8  ">
              <input
                type="submit"
                className=" block bg-soul-100 mx-auto hover:bg-soul-300 py-2 px-4 rounded-full
              outline-none
              shadow-sm cursor-pointer"
                value="Send"
              />
            </div>
            <p className=" mt-6 text-center  cursor-pointer">
              <Link
                to="/registertherapist"
                className=" text-black no-underline hover:text-soul-300"
              >
                Don't have an account ?
              </Link>
            </p>
          </form>
        </>
      )}
    </div>
  );
};
TherapistForgotPassword.propTypes = {
  forgotPassword: PropTypes.func,
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.therapistAuth,
});

export default connect(mapStateToProps, { forgotPassword })(
  TherapistForgotPassword
);
