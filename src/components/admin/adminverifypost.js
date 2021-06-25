import React from 'react'

import AdminPostCard from './adminpostcard'

const AdminVerifyPost = () => {
  return (
    <React.Fragment>
      <div className='adminverifypost'>
        <div className='container'>
          <h2 className='headers'>Post</h2>
          <AdminPostCard></AdminPostCard>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminVerifyPost
