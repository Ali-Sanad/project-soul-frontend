import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import logo from "./../../assets/images/logo.png";
import userRegister from "./../../assets/images/user-register.png";

const Register = ({ history, setAlert, register, auth }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const { name, email, password, password2 } = formData;

  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(!passwordShown1);
  };

  const togglePasswordVisiblity2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "error");
    } else {
      register({ name, email, password });
    }
  };

  if (auth.status === "Pending") {
    history.replace("/pending-verification");
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 h-screen bg-soul_bg font-Nunito">
        <div className="">
          <div className="w-44 h-24 mx-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <h4 className="text-4xl mt-2 bold  text-center">User register</h4>
          <form className="mt-2" onSubmit={(e) => onSubmit(e)}>
            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
            border focus:outline-none
            focus:ring-1 focus:to-soul focus:border-transparent 
            "
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="mt-6">
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
            <div className="relative mx-auto  mt-6">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none 
                focus:ring-1 focus:to-soul focus:border-transparent 
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
                className=" absolute text-md text-soul-300  cursor-pointer
              md:top-4 sm:right-16 md:right-14 lg:right-20   top-4   right-20"
                aria-hidden="true"
                onClick={() => togglePasswordVisiblity1()}
              >
                {passwordShown1 ? "hide" : "show"}
              </span>
            </div>
            <div className="relative mx-auto  mt-6">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none
                focus:ring-1 focus:to-soul focus:border-transparent 
              "
                type={passwordShown2 ? "text" : "password"}
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={(e) => onChange(e)}
                required
              />
              <span
                className=" absolute text-md text-soul-300  cursor-pointer
                md:top-4 sm:right-16 md:right-14 lg:right-20   top-4   right-20"
                aria-hidden="true"
                onClick={() => togglePasswordVisiblity2()}
              >
                {passwordShown2 ? "hide" : "show"}
              </span>
            </div>
            <div className="mt-6 sm:ml-2">
              <input
                type="submit"
                className=" block  bg-soul-100 hover:bg-soul-300  sm:ml-10 md:ml-16 ml-16  py-2 px-4 rounded-full
                 outline-none
                 shadow-sm cursor-pointer"
                value="Register"
              />
            </div>
            <p className=" block sm:ml-12 md:ml-20 ml-16 mt-4  ">
              Already on Soul?{" "}
              <span className=" text-soul-300 font-bold ">
                <Link
                  to="/login"
                  className="text-black no-underline hover:text-soul-300"
                >
                  Sign In
                </Link>
              </span>
            </p>
          </form>
        </div>

        <div className=" h-screen sm:block hidden">
          <img src={userRegister} alt="" className="h-screen object-cover" />
        </div>
      </div>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { setAlert, register })(Register);
