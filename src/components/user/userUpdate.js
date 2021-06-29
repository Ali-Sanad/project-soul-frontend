import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../actions/auth";
import {Link} from 'react-router-dom';


const UserUpdate = ({ auth }) => {
  const {
    user: { _id, name, email, gender, dob },
  } = useSelector((user) => user.auth);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userDob, setUserDob] = useState("");

  const dispatch = useDispatch();
  const updateUserProfile = (e) => {
    e.preventDefault();
    console.log("updateee", userName, userEmail, userGender, userDob);
    dispatch(
      updateUser({
        id: _id,
        name: userName,
        email: userEmail,
        gender: userGender,
        dob: userDob,
      })

    );
  };

  useEffect(() => {
    setUserName(name);
    setUserEmail(email);
    setUserGender(gender);
    setUserDob(dob);
  }, []);

  return (
    <>
      {auth.user && (
        <div className="userprofile">
          <div className="container">
            <h2 className="headers">Profile</h2>
            <form onSubmit={auth.user && updateUserProfile}>
              <div className="row">
                <div className=" col-12 col-md-6">
                  <h6>Name</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    placeholder={auth.user.name}
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  ></input>

                  <h6>Email</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    placeholder={auth.user.email}
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                  ></input>

                  <h6>Gender</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    placeholder={auth.user.gender}
                    onChange={(e) => setUserGender(e.target.value)}
                    value={userGender}
                  ></input>

                  <h6>Date Of Birth</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    placeholder={auth.user.dob}
                    onChange={(e) => setUserDob(e.target.value)}
                    value={userDob}
                  ></input>
                  <button className="button btn" >
                    <span className="mainbtn">Save</span>
                  </button>
                 <Link to="/user-profile">
                 <button className="button btn" >
                    <span className="mainbtn">Back</span>
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
export default connect(mapStateToProps)(UserUpdate);
