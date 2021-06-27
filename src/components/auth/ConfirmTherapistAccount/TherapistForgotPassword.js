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
    console.log(email);
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
    // <div className=" mx-auto card rounded-lg  mt-24 mb-12 sm:w-4/5 md:w-1/2 lg:w-2/6 w-5/6  ">
    //   {auth.note ? (
    //     <>
    //       <div className="mx-auto mt-6 ml-12 w-4/5">
    //         <h4 className=" text-xl bold my-2 text-center text-blue-500">
    //           An email has been sent to{" "}
    //           <span className="text-green-600">{email} </span>, check your inbox
    //           and reset your password !
    //         </h4>
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <div className="mx-auto mt-6 ml-12 w-4/5">
    //         <h4 className=" text-4xl bold my-2 text-center text-blue-500">
    //           Forgot Password
    //         </h4>
    //       </div>

    //       <form className="mt-6 " onSubmit={(e) => onSubmit(e)}>
    //         <div className=" mt-6 ">
    //           <input
    //             className="block mx-auto mt-6  w-4/5 p-3 rounded-md
    //         border border-gray-900  focus:outline-none
    //          focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm
    //         "
    //             type="email"
    //             placeholder="Email"
    //             name="email"
    //             value={email}
    //             onChange={(e) => onChange(e)}
    //             required
    //           />
    //         </div>
    //         <input
    //           type="submit"
    //           className=" block mx-auto mt-6 mb-6  bg-blue-500 hover:bg-blue-800 w-4/5 p-4 rounded-full text-white
    //         outline-none
    //         shadow-sm cursor-pointer"
    //           value="Send"
    //         />
    //       </form>

    //       <p className=" block text-center mt-12 mb-12">
    //         New to Soul?
    //         <span className=" text-blue-500  font-bold ">
    //           <Link to="/register">
    //             <span> </span>Join now
    //           </Link>
    //         </span>
    //       </p>
    //     </>
    //   )}
    // </div>
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
