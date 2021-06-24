import React, { useEffect } from "react";

import userimg from "./../../assets/images/user.png";
import iconimg from "./../../assets/images/iconimg.png";
import { connect } from "react-redux";
//import { getTherapist } from "../../actions/therapist";

const Sidenav = ({ id }) => {
  console.log("id in sidnav", id);
  // useEffect(() => {
  //   getTherapist(id);
  // }, [getTherapist, id]);
  // console.log("thera", therapist);
  // console.log("state", state);

  return (
    <React.Fragment>
      <div className="sidenav">
        <div className="container">
          <div className="sidenav__image">
            <img src={userimg} alt="" className="sidenav__image__user"></img>
            {/* <input type="file"></input> */}

            <div className="file-upload">
              <label htmlFor="file-input">
                <img src={iconimg} className="sidenav__image__upload" />
              </label>

              <input id="file-input" type="file" />
            </div>
          </div>
          <div className="sidenav__name">
            <h4>{/* {therapist.fname} {therapist.lname} */}</h4>
          </div>
          <div className="sidenav__menu">
            <ul>
              <li className="active">Profile</li>
              <li>Summary</li>
              <li>Appointments</li>
              <li>Educational</li>
              <li>Documnents</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  therapist: state.therapists.oneTherapist,
});
export default connect(mapStateToProps)(Sidenav);
