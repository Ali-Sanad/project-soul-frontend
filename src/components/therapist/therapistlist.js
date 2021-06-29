import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { getTherapists } from "../../actions/therapists";

import TherapistCard from "./therapistcard";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import Message from "../shared/message";
import ToTop from "../shared/totop";

const TherapistList = ({ getTherapists, therapists }) => {
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="therapistlist">
        <h2 className="headers">Our Therapists</h2>
        <div className="container">
          <div className="row">
            {therapists &&
              therapists.map((therapist) => (
                <div className="col-6 col-md-3" key={therapist._id}>
                  <TherapistCard therapist={therapist}></TherapistCard>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
      <Message />
      <ToTop />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  state: state,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted === "Accepted"
  ),
});

export default connect(mapStateToProps, { getTherapists })(TherapistList);
