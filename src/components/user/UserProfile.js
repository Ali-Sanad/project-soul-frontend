import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Navbar from "../shared/navbar";
import SideNav from "../shared/sidenav";
import Sidenavuser from "../shared/sidenavuser";
import UserDate from "./userData";


const UserProfile = (props) => {
  return (
    <>
      <div className="userdashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar className="therapistdashboard__navbar"></Navbar>
            </div>
            <div className="col-3">
              <Sidenavuser></Sidenavuser>
            </div>
            <div className="col-8">
              <UserDate></UserDate>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};
 
UserProfile.propTypes = {};

export default UserProfile;
