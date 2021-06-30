import React from "react";
import { Link } from "react-router-dom";

const TherapistAccountConfirmed = (props) => {
  if (props.match.path === "/therapist-email-confirmed") {
  }

  return (
    <div className=" mx-auto card rounded-lg   mt-24 mb-12  w-5/6 ">
      <div className="mx-auto mt-6 ml-12 w-4/5">
        <h4 className=" sm:text-4xl text-2xl bold my-2 text-blue-500">
          Your Soul account has been confirmed !
        </h4>
        <h6 className="mt-12 mb-12">
          Please login to your account ?
          <span className="text-blue-500 font-bold  sm:ml-6">
            please contuniue
            <Link to="/logintherapist">Login</Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default TherapistAccountConfirmed;
