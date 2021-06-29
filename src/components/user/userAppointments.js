import React from "react";
import Navbar from "../shared/navbar";
import Sidenavuser from "../shared/sidenavuser";

const UserAppointments = () => {
  return (
    <>
    <div className="userdashboard">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAppointments;
