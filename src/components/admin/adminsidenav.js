import React from 'react'

import userimg from './../../assets/images/user.png'
import iconimg from './../../assets/images/iconimg.png'

const AdminSideNav = () => {
  return (
    <React.Fragment>
      <div className='sidenav'>
        <div className='container'>
          <div className='sidenav__image'>
            <img src={userimg} alt='' className='sidenav__image__user'></img>

            <div className='file-upload'>
              <label htmlFor='file-input'>
                <img src={iconimg} className='sidenav__image__upload' alt='' />
              </label>

              <input id='file-input' type='file' />
            </div>
          </div>
          <div className='sidenav__name'>
            <h4>Menna</h4>
          </div>
          <div className='sidenav__menu'>
            <ul>
              <li className='active'>Therapist</li>
              <li>Post</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminSideNav
