import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTherapists } from "../../actions/therapists";
import { createTherapistProfile } from "../../actions/therapistProfile";
const AdminShowWaitingTherapists = ({
  getTherapists,
  createTherapistProfile,
  therapists,
}) => {
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);

  console.log("therapistsssssss", therapists);
  return (
    <>
      {therapists &&
        therapists.map((th) => (
          <div key={th._id}>
            <h4>{th?.fname}</h4>
            <h4>{th?.email}</h4>
            <button
              className="btn "
              onClick={() => {
                createTherapistProfile({ isAccepted: true }, th._id);
                getTherapists();
              }}
            >
              Approve
            </button>
            <Link className="btn" to={`/therapist-card/${th?._id}`}>
              more Details
            </Link>
          </div>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  state: state,
  //  oneTherapist: state.oneTherapist,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted == false
  ),
  // therapist: state.therapistAuth,
});
export default connect(mapStateToProps, {
  getTherapists,
  createTherapistProfile,
})(AdminShowWaitingTherapists);
