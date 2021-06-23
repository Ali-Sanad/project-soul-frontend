import React from 'react';

import Navbar from '../shared/navbar';
import SideNav from '../shared/sidenav';
import TherapistFiles from './therapistfiles';
import TherapistProfile from './therapistprofile';
import TherapistSummary from './therapistsummary';

const TherapistDashboard = () => {
  return (
    <React.Fragment>
      <div className='therapistdashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Navbar className='therapistdashboard__navbar'></Navbar>
            </div>
            <div className='col-3'>
              <SideNav></SideNav>
            </div>
            <div className='col-8'>
              <TherapistFiles></TherapistFiles>
              <TherapistProfile></TherapistProfile>
              <TherapistSummary></TherapistSummary>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TherapistDashboard;
