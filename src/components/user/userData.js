import React, { useState } from "react";
import { connect } from "react-redux";

const UserData = ({ auth }) => {
  // console.log("auth", auth);
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
  });
  // if (auth.user) {
  //   console.log("Authen");
  //   async function data() {
  //     await setFormData({
  //       name: auth.user.name,
  //       email: auth.user.email,
  //       gender: auth.user.gender,
  //       dob: auth.user.dob,
  //     });
  //   }
  //   data();
  // }
  const { name, email, gender, dob } = formData;
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

                  {/* <h6>Password</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value="1234567"
                ></input> */}

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

                  <button className="button btn">
                    <span className="mainbtn">Edit your information</span>
                  </button>
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
