import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

const UserData = ({ auth }) => {
    
  return (
    <>
    {auth.user && (
      <div className="userprofile">
        <div className="container">
          <h2 className="headers">Profile</h2>
          <form>
            <div className="row">
              <div className=" col-12 col-md-6">
                <h6>Name</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={auth.user.name}
                ></input>

                <h6>Email</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={auth.user.email}
                ></input>

              

                <h6>Gender</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={auth.user.gender}
                ></input>

                <h6>Date Of Birth</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={auth.user.dob}
                ></input>

                <Link to="/updateUser">
                  <button className="button btn">
                    <span className="mainbtn">Edit your information</span>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )}
  </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(UserData);
