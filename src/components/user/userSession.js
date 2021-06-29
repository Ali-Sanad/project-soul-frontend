import React from "react";
import Navbar from "../shared/navbar";
import Sidenavuser from "../shared/sidenavuser";

const UserSession = () => {
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
              <div className="container">
                <form>
                  <h3>Session</h3>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSession;
