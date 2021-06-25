import React, { useState } from "react";

import booking from "../../assets/images/booktherapist.png";
import "../../index.css";
//redux
import { connect } from "react-redux";
import {
  deleteAppointment,
  updateAppointment,
} from "../../actions/therapistAuth";

const Appointments = ({
  therapistAuth,
  publicTherapist,
  deleteAppointment,
  updateAppointment,
}) => {
  return (
    <React.Fragment>
      <div className="addappointment">
        <div className="container">
          <h4 className="headers">Appointments </h4>
          <table className="table-auto">
            <thead>
              <tr>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th>Fees</th>
              </tr>
            </thead>

            <tbody>
              {publicTherapist &&
                publicTherapist.appointments.map((app) => (
                  <tr key={app._id} className="bg-emerald-200">
                    <td>{app.date}</td>
                    <td>{app.from}</td>
                    <td>{app.to}</td>
                    <td>{app.fees}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <div className='col-12 col-md-6 addappointment__form'></div> */}
          {/* <div className='col-12 col-md-6 addappointment__image'>
              <img src={booking} alt=''></img>
            </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateTopProps = (state) => ({
  therapistAuth: state.therapistAuth,
  publicTherapist: state.therapists?.oneTherapist,
});

export default connect(mapStateTopProps, {
  deleteAppointment,
  updateAppointment,
})(Appointments);
