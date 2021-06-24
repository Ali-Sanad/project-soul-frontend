import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { getTherapist } from "../../actions/therapist";

import Navbar from "../shared/navbar";
import SideNav from "../shared/sidenav";
import TherapistFiles from "./therapistfiles";
import TherapistProfile from "./therapistprofile";
import TherapistSummary from "./therapistsummary";
import TherapistReview from "./therapistreview";
import AddAppointment from "./addappointment";

const TherapistDashboard = ({ match, therapist, getTherapist }) => {
  let id = match.params.id.trim();

  // console.log("isAuth",isAuth);
  // console.log("iddddd", id);
  useEffect(() => {
    getTherapist(id);
  }, [getTherapist, id]);
  return (
    <React.Fragment>
      <div className="therapistdashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar className="therapistdashboard__navbar"></Navbar>
            </div>
            (
            <div className="col-3">
              <SideNav id={id} />
            </div>
            )
            <div className="col-8">
              {/* <TherapistFiles></TherapistFiles> */}
              {/* <TherapistProfile></TherapistProfile> */}
              {/* <TherapistSummary></TherapistSummary> */}

              <TherapistReview id={id}></TherapistReview>
              <TherapistProfile id={id} />

              <AddAppointment></AddAppointment>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  therapist: state.therapists.oneTherapist,
});

export default connect(mapStateToProps, { getTherapist })(TherapistDashboard);
