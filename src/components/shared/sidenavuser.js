import React from "react";
import { connect } from "react-redux";
import client from "./../../assets/images/client.jpeg";
import iconimg from "./../../assets/images/iconimg.png";

const Sidenavuser = ({ auth }) => {
  return (
    <>
      {auth.user && (
        <div className="sidenav">
          <div className="container">
            <div className="sidenav__image">
              <img src={client} alt="" className="sidenav__image__user"></img>
              <div className="file-upload">
                <label htmlFor="file-input">
                  <img
                    src={iconimg}
                    className="sidenav__image__upload"
                    alt=""
                  />
                </label>

                <input id="file-input" type="file" />
              </div>
            </div>
            <div className="sidenav__name">
              <h4> {auth.user.name}</h4>
            </div>
            <div className="sidenav__menu">
              <ul>
                <li className="active">Profile</li>
                <li>Appointments</li>
                <li>Wallet</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Sidenavuser);
