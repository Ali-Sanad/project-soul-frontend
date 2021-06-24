import React, { useState } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/auth";
const UserUpdateForm = ({ auth, updateProfile }) => {
  // console.log("auth", auth);
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
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    console.log("on submit");
    e.preventDefault();
    updateProfile();
  };
  return (
    <>
      {auth.user && (
        <div className="userprofile">
          <div className="container">
            <h2 className="headers">Profile</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className=" col-12 col-md-6">
                  <h6>Name</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    value={name}
                    name="name"
                    onChange={(e) => onChange(e)}
                  ></input>

                  <h6>Email</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
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
                    value={gender}
                    name="gender"
                    onChange={(e) => onChange(e)}
                  ></input>

                  <h6>Date Of Birth</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    value={dob}
                    name="dob"
                    onChange={(e) => onChange(e)}
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
export default connect(mapStateToProps, { updateProfile })(UserUpdateForm);
