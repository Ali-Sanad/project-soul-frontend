import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/images/logo.png";
import therapist from "./../../assets/images/therapist.png";
import users from "./../../assets/images/users.png";

const RegisterOptions = () => {
  return (
    <React.Fragment>
      <div className="registeroptions">
        <div className="container">
          <img src={logo} className="registeroptions__logo" alt=""></img>
          <h2>Register As</h2>
          <div className="row">
            <div className="col-6">
              <img src={therapist} alt=""></img>
              <h4>
                <Link to="/registertherapist" className="linkstyle">
                  Therapist
                </Link>
              </h4>
            </div>
            <div className="col-6">
              <img src={users} alt=""></img>
              <h4>
                <Link to="/register" className="linkstyle">
                  User
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterOptions;
