import React from 'react'

import AdminTherapistCard from './admintherapistcard'

const AdminVerifyTherapist = () => {
  return (
    <React.Fragment>
      <div className='adminverifytherapist'>
        <div className='container'>
          <h2 className='headers'>Therapist</h2>
          <AdminTherapistCard></AdminTherapistCard>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminVerifyTherapist
