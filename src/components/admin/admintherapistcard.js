import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getTherapist } from "../../actions/therapists";
import { createTherapistProfile } from "../../actions/therapistProfile";
const AdminTherapistCard = ({
  match,
  therapist,
  getTherapist,
  createTherapistProfile,
}) => {
  let id = match.params.id.trim();
  useEffect(() => {
    getTherapist(id);
  }, [getTherapist, id]);
  return (
    <React.Fragment>
      {therapist && (
        <div className="admintherapistcard">
          <div className="container">
            {/* Personal Information */}

            <h5 className="headers">Personal Information</h5>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  First Name: <span>{therapist?.fname}</span>
                </p>
                <p>
                  Email: <span>{therapist?.email}</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  Last Name: <span>{therapist?.lname}</span>
                </p>
                {/* <p>
                  Date Of Birth: <span>{therapist?}</span>
                </p> */}
              </div>
            </div>
            <hr></hr>
            {/* Education */}
            <h5 className="headers">Education</h5>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  Specialist: <span>{ therapist?.specialties.toString()}</span>
                </p>
                <p>
                  Prefix: <span>{therapist?.prefix}</span>
                </p>
                <p>
                  Licenec: <span>{therapist?.licenseNo}</span>
                </p>
                <p>
                  Summary: <span>{therapist?.summary}</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  Main Focus: <span>{therapist?.mainsFocus.toString()}</span>
                </p>
                <p>
                  Licence No.: <span>15-10-1996</span>
                </p>
              </div>
            </div>
            <hr></hr>

            {/* Social Links */}
            <h5 className="headers">Social Links</h5>
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  Facebook: <span>{therapist?.facebook}</span>
                </p>
                <p>
                  Twitter: <span>{therapist?.twitter}</span>
                </p>
                <p>
                  Instagram: <span>{therapist?.instagram}</span>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  Linkedin: <span>{therapist?.linkedIn}</span>
                </p>
                <p>
                  Youtube: <span>{therapist?.youtube}</span>
                </p>
              </div>
            </div>

            <div className="admintherapistcard__btns">
              <button
                onClick={() => {
                  createTherapistProfile({ isAccepted: true }, id);
                }}
                className="mainbtn admintherapistcard__verifybtn"
              >
                Verify
              </button>
              <button className="mainbtn admintherapistcard__rejectbtn">
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  therapist: state.therapists.oneTherapist,
});
export default connect(mapStateToProps, {
  getTherapist,
  createTherapistProfile,
})(AdminTherapistCard);
