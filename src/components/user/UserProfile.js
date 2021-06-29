import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Navbar from "../shared/navbar";
import SideNav from "../shared/sidenav";
import Sidenavuser from "../shared/sidenavuser";
import UserDate from "./userData";
import UserUpdateForm from "./userUpdateForm";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const UserProfile = (props) => {
  const { auth } = props;
  const history = useHistory();

  //make page private and redirect to home if logout
  if (!auth?.isAuthenticated && !auth?.user) {
    history.push("/");
  }
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

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {})(UserProfile);
