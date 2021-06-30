import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

import msg from "../../assets/images/message.png";

const MessageIcon = ({
  auth: { isAuthenticated, user },
  therapistAuth: { isAuthenticated_therapist, therapist },
}) => {
  return (
    <React.Fragment>
      {isAuthenticated && user && (
        <Link className="message__icon" to="/messenger-user">
          <img src={msg} alt=""></img>
        </Link>
      )}
      {isAuthenticated_therapist && therapist && (
        <Link className="message__icon" to="/messenger-therapist">
          <img src={msg} alt=""></img>
        </Link>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    therapistAuth: state.therapistAuth,
  };
};

export default connect(mapStateToProps, {})(MessageIcon);
