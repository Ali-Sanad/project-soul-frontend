import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/auth";
const UserUpdateForm = ({ auth, updateProfile }) => {
  const [disable, setDisable] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
  });

  useEffect(() => {
    setFormData({
      name: auth.user?.name,
      email: auth.user?.email,
      gender: auth.user?.gender,
      dob: auth.user?.dob,
    });
  }, [auth.user]);
  const { name, email, gender, dob } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    if (disable) {
      setDisable(false);
    } else {
      updateProfile(formData);
      setDisable(true);
    }
  };
  return (
    <>
      {auth.user && (
        <div className="userprofile">
          <div className="container">
            <h4 className="headers">Profile</h4>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className=" col-12 col-md-6">
                  <h6>Name</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    disabled={disable}
                    value={name}
                    name="name"
                    onChange={(e) => onChange(e)}
                  ></input>

                  <h6>Email</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    value={email}
                    disabled={disable}
                    name="email"
                    onChange={(e) => onChange(e)}
                  ></input>

                  <h6>Gender</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    value={gender}
                    disabled={disable}
                    name="gender"
                    onChange={(e) => onChange(e)}
                  ></input>

                  <h6>Date Of Birth</h6>
                  <input
                    type="text"
                    className="inputstyle"
                    value={dob}
                    disabled={disable}
                    name="dob"
                    onChange={(e) => onChange(e)}
                  ></input>
                  {disable && (
                    <button>
                      <span className="mainbtn">Edit your information</span>
                    </button>
                  )}

                  {!disable && (
                    <button className="button btn">
                      <span className="mainbtn">Save</span>
                    </button>
                  )}
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
