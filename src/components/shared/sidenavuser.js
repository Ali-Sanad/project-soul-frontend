import React from "react";
import { connect } from "react-redux";
import noAvatar from "./../../assets/images/noAvatar.gif";
import { NavLink } from "react-router-dom";

const Sidenavuser = ({ auth }) => {
  return (
    <>
      {auth.user && (
        <div className="sidenav">
          <div className="container">
            <div className="sidenav__image">
              <img src={noAvatar} alt="" className="sidenav__image__user"></img>
              <div className="file-upload">
                <input id="file-input" type="file" />
              </div>
            </div>
            <div className="sidenav__name">
              <h4> {auth.user.name}</h4>
            </div>
            <div className="sidenav__menu">
              <ul>
                <li>
                  <NavLink
                    to={{
                      pathname: `/user-profile`,
                    }}
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: `/userAppointments`,
                    }}
                  >
                    Appointments
                  </NavLink>
                </li>
               
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
