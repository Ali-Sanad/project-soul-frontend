import React from 'react';

import Navbar from "../shared/navbar";
import SideNav from "../shared/sidenav";

const TherapistDashboard = () => {
	return (
		<React.Fragment>
			<div className="therapistdashboard">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Navbar className="therapistdashboard__navbar"></Navbar>
                    </div>
                    <div className="col-3">
                        <SideNav></SideNav>
                    </div>
                    <div className="col-8">
                        content
                    </div>
                </div>
            </div>
			</div>
		</React.Fragment>
	);
};

export default TherapistDashboard;