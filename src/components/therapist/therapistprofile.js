import React, { useState } from "react";
import { connect } from "react-redux";
import { createTherapistProfile } from "../../actions/therapistProfile";
const TherapistProfile = ({ therapist, id, createTherapistProfile }) => {
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    fname: therapist.therapist.fname,
    lname: therapist.therapist.lname,
    email: therapist.therapist.email,
    yearsofEeperience: therapist.therapist.yearsofEeperience || 1,
    licenseNo: therapist.therapist.licenseNo,
  });
  const { fname, lname, email, yearsofEeperience, licenseNo } = formData;

  //  var { fname, lname, email, yearsofEeperience, licenseNo } =
  //therapist.therapist;

  console.log(fname);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    console.log("on submit");
    e.preventDefault();
    console.log("disable", disable);
    if (disable) {
      setDisable(false);
    } else {
      createTherapistProfile(formData, id);
      setDisable(true);
    }
  };
  return (
    <React.Fragment>
      <div className="therapistprofile" onSubmit={(e) => onSubmit(e)}>
        <div className="container">
          <h2 className="headers">Profile</h2>
          <form>
            <div className="row">
              <div className=" col-12 col-md-6">
                <h6>First Name</h6>
                <input
                  type="text"
                  disabled={disable}
                  className="inputstyle"
                  value={fname}
                  name="fname"
                  onChange={(e) => onChange(e)}
                ></input>

                <h6>Email</h6>
                <input
                  type="text"
                  className="inputstyle"
                  disabled={disable}
                  value={email}
                  name="email"
                  onChange={(e) => onChange(e)}
                ></input>

                <h6>Year Of Experience</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={yearsofEeperience}
                  disabled={disable}
                  name="yearsofEeperience"
                  onChange={(e) => onChange(e)}
                ></input>
              </div>
              <div className="col-12 col-md-6">
                <h6>Last Name</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={lname}
                  disabled={disable}
                  name="lname"
                  onChange={(e) => onChange(e)}
                ></input>
                <h6>Licenece</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value={licenseNo}
                  disabled={disable}
                  name="licenseNo"
                  onChange={(e) => onChange(e)}
                ></input>
              </div>
              {disable && (
                <div className="col-12">
                  <button className="mainbtn">edit</button>
                </div>
              )}
              {!disable && (
                <div className="col-12">
                  <button className="mainbtn">save</button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  state: state,
  therapist: state.therapist,
});
export default connect(mapStateToProps, { createTherapistProfile })(
  TherapistProfile
);
