import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { getTherapist, getTherapists } from "../../actions/therapists";

import Navbar from "../shared/navbar";
import SideNav from "../shared/sidenav";
import TherapistProfile from "./therapistprofile";
import TherapistSummary from "./therapistsummary";
import TherapistReview from "./therapistreview";
import AddAppointment from "./addappointment";
import Appointments from "./appointments";
import MessageIcon from "../shared/message";

import { newConversation } from "../../actions/chat";
const TherapistDashboard = ({
  match,
  therapist,
  getTherapist,
  user,
  newConversation,
  getTherapists,
}) => {
  let content = match.params.content;
  let id = match.params.id.trim();
  useEffect(() => {
    getTherapist(id);
  }, [getTherapist, id, newConversation, user]);

  return (
    <React.Fragment>
      <div className="therapistdashboard">
        <div className="container">
          <div className="row">
            <div className="col-12 therapistdashboard__topnav">
              <Navbar className="therapistdashboard__navbar"></Navbar>
            </div>

            <>
              <div className="col-12 col-md-3">
                <div>
                  <SideNav id={id} therapist={therapist} />
                </div>
              </div>
            </>
            <div className="col-12 col-md-8">
              {content === "profile" && <TherapistProfile id={id} />}
              {content === "summary" && (
                <TherapistSummary id={id}></TherapistSummary>
              )}
              {content === "appointments" && (
                <>
                  <Appointments id={id}></Appointments>
                </>
              )}
              {content === "addappointment" && (
                <>
                  <AddAppointment></AddAppointment>
                </>
              )}
              {content === "reviews" && (
                <TherapistReview id={id}></TherapistReview>
              )}

              <MessageIcon></MessageIcon>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  therapist: state.therapists?.oneTherapist,
  user: state.auth?.user?._id,
});

export default connect(mapStateToProps, {
  getTherapist,
  getTherapists,
  newConversation,
})(TherapistDashboard);
