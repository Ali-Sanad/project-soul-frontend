import React from "react";
import { NavLink } from "react-router-dom";

import noAvatar from "../../assets/images/noAvatar.gif";

import iconimg from "./../../assets/images/iconimg.png";
import { connect } from "react-redux";
import { addTherapistProfileImage } from "../../actions/therapists";

const Sidenav = ({
  id,
  isAuth,
  therapist,
  addTherapistProfileImage,
  authId,
}) => {
  const uploadTherapistImage = (e, id) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      addTherapistProfileImage({ data: reader.result }, id);
    };
    reader.onerror = () => {};
  };

  return (
    <React.Fragment>
      <div className="sidenav">
        <div className="container">
          <div className="sidenav__image">
            <img
              src={
                therapist && therapist.therapistImg !== ""
                  ? therapist.therapistImg
                  : noAvatar
              }
              alt=""
              className="sidenav__image__user"
            />
            {id === authId && (
              <div className="file-upload">
                <label htmlFor="file-input">
                  <img
                    src={iconimg}
                    className="sidenav__image__upload"
                    alt=""
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  name="image"
                  onChange={(e) => {
                    uploadTherapistImage(e, therapist?._id);
                  }}
                />
              </div>
            )}
          </div>

          <div className="sidenav__name">
            <h4>
              {therapist && therapist.fname} {therapist && therapist.lname}
            </h4>
          </div>
          <div className="sidenav__menu">
            <ul>
              {/* {isAuth && (
                <li>
                  <NavLink
                    to={{
                      pathname: `/therapistlist/${id}/pr`,
                    }}
                  >
                    Profile
                  </NavLink>
                </li>
              )} */}
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/summary`,
                  }}
                >
                  Summary
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/appointments`,
                  }}
                >
                  Appointments
                </NavLink>
              </li>
              {isAuth && authId === therapist._id && (
                <li>
                  <NavLink
                    to={{
                      pathname: `/therapistlist/${id}/addappointment`,
                    }}
                  >
                    Add Appointment
                  </NavLink>
                </li>
              )}
              {/* <li>Educational</li>
              <li>Documnents</li> */}
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/reviews`,
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  therapist: state.therapists.oneTherapist,
  authId: state.therapistAuth?.therapist?._id,
  isAuth: state.therapistAuth?.isAuthenticated_therapist,
});
export default connect(mapStateToProps, { addTherapistProfileImage })(Sidenav);
