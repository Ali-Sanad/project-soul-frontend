import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";
import noAvatar from "../../assets/images/noAvatar.gif";

const TherapistCard = ({ therapist, history }) => {
  const bookTherapistHandler = (id) => {
    history.push(`/therapistlist/${id}/appointments`);
  };

  const viewProfileHandler = (id) => {
    history.push(`therapistlist/${id}/summary`);
  };

  return (
    <React.Fragment>
      <div className="therapistcard">
        <img
          src={therapist?.therapistImg || noAvatar}
          alt={therapist?.therapistImg}
          className="therapistcard__userimg"
        ></img>
        <p>
          {therapist?.fname} {therapist?.lname}
        </p>
        <div className="therapistcard__rate">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="read-only"
              value={therapist.ratingsAverage}
              readOnly
            />
          </Box>
        </div>
        <div className="therapistcard__btn">
          <button
            className="mainbtn"
            onClick={() => bookTherapistHandler(therapist._id)}
          >
            Book Now
          </button>
          <button
            className="mainbtn"
            onClick={() => viewProfileHandler(therapist._id)}
          >
            View Profile
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(TherapistCard);
