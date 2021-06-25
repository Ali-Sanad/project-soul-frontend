import React from 'react'

import Navbar from '../shared/navbar'
import AdminSideNav from './adminsidenav'
import AdminVerifyTherapist from './adminverifytherapist'

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <div className='adminashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Navbar className='adminashboard__navbar'></Navbar>
            </div>
            <>
              <div className='col-3'>
                <AdminSideNav />
              </div>
            </>
            <div className='col-8 adminashboard__content'>
              <AdminVerifyTherapist></AdminVerifyTherapist>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminDashboard
