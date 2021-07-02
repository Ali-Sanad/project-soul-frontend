import React from "react";
import Navbar from "../shared/navbar";
import Sidenavuser from "../shared/sidenavuser";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import UserUpdateForm from"./userUpdateForm"

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
            <div className="col-12">
              <Navbar className="therapistdashboard__navbar"></Navbar>
            </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <Sidenavuser></Sidenavuser>
            </div>
            <div className="col-12 col-md-8">
              
              <UserUpdateForm></UserUpdateForm>
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
