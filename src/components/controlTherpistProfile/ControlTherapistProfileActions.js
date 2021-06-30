import React from "react";
import { Link } from "react-router-dom";

const ControlTherapistProfileActions = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  return (
    <>
      <Link to={`/therapist-data-form/${id}`} variant="body2">
        Edit Your Profile
      </Link>
      <Link to={`/addTherapistEducation/${id}`} variant="body2">
        Add Education
      </Link>
      <Link to={`/addTherapistExperience/${id}`} variant="body2">
        Add Experience
      </Link>
    </>
  );
};

export default ControlTherapistProfileActions;
