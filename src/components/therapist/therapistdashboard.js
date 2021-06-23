import React from "react";
import { useEffect } from "react";

import Navbar from "../shared/navbar";
import SideNav from "../shared/sidenav";
import TherapistFiles from "./therapistfiles";
//import TherapistProfile from "./therapistprofile";
import TherapistSummary from "./therapistsummary";
import TherapistReview from "./therapistreview";
import { connect } from "react-redux";
import { getTherapist } from "../../actions/therapist";
import TherapistProfile from "./therapistprofile";
const TherapistDashboard = ({ match }) => {
  let id = match.params.id.trim();
  // console.log("isAuth",isAuth);
  console.log("iddddd", id);

  //console.log("therapistttt", therapist);

  return (
    <React.Fragment>
      <div className="therapistdashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar className="therapistdashboard__navbar"></Navbar>
            </div>
            <div className="col-3">
              <SideNav id={id} />
            </div>
            <div className="col-8">
              {/* <TherapistFiles></TherapistFiles> */}
              {/* <TherapistProfile></TherapistProfile> */}
              {/* <TherapistSummary></TherapistSummary> */}
              <TherapistReview id={id}></TherapistReview>
              <TherapistProfile id={id} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  therapist: state.therapist,
});

export default connect(null)(TherapistDashboard);
