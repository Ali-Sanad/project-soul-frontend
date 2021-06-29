import React from "react";
import Navbar from "../shared/navbar";
import { connect } from "react-redux";
import Sidenavuser from "../shared/sidenavuser";
import classes from "../therapist/appointments.module.css";
import {Link} from "react-router-dom";
const UserAppointments = ({ auth, therapists }) => {


  return (
    <>
      {auth.user && (
        <div className="userdashboard">
          <div className={classes.APP}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Navbar className="therapistdashboard__navbar"></Navbar>
                </div>

                <div className="col-3">
                  <Sidenavuser></Sidenavuser>
                </div>
                <div className="col-8">
                  <h3>Appointments</h3>
                  <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-auto sm:shadow-lg my-5">
                    <thead className="text-black bg-soul-100 ">
                      <th className="p-3 text-left">Date</th>
                      <th className="p-3 text-left">From</th>
                      <th className="p-3 text-left">To</th>
                      <th className="p-3 text-left">Therapist</th>
                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                      {auth.user.appointments.map((app) => (
                        <tr
                          className="flex flex-col flex-no wrap sm:table-row mb-6   sm:mb-0"
                          key={app._id}
                        >
                          <td className="border-grey-light border hover:bg-gray-100 p-3 text-center ">
                            {new Date(app.date).toDateString()}
                          </td>
                          <td className="border-grey-light border hover:bg-gray-100 p-3  text-center">
                            {app.from}
                          </td>
                          <td className="border-grey-light border hover:bg-gray-100 p-3  text-center">
                            {app.to}
                          </td>
                          <td className="border-grey-light border hover:bg-gray-100 p-3  text-center">
                            {app.therapist.fname + " " + app.therapist.lname}
                            <br />
                            <Link
                              to={`/therapistlist/${app.therapist._id}/reviews`}
                            >
                              <button className="button btn">
                                <span className="mainbtn">visit</span>
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  therapistAuth: state.therapistAuth,
  oneTherapist: state.therapists.oneTherapist,
  auth: state.auth,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted === "Accepted"
  ),
});
export default connect(mapStateToProps)(UserAppointments);
