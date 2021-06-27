import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'

import noAvatar from '../../assets/images/noAvatar.gif'

import userimg from './../../assets/images/user.png'
import iconimg from './../../assets/images/iconimg.png'
import { connect } from 'react-redux'
import { addTherapistProfileImage } from '../../actions/therapists'

const Sidenav = ({ id, therapist, addTherapistProfileImage, authId }) => {
  const history = useHistory()
  // console.log('id in sidnav', id);
  // useEffect(() => {
  //   getTherapist(id);
  // }, [getTherapist, id]);
  // console.log("thera", therapist);
  // console.log("state", state);

  // const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null)

  const uploadTherapistImage = e => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]))

    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onloadend = () => {
      addTherapistProfileImage({ data: reader.result })
      console.log({ data: reader.result })
    }
    reader.onerror = () => {
      console.error('Article failed')
    }
  }

  return (
    <React.Fragment>
      <div className='sidenav'>
        <div className='container'>
          <div className='sidenav__image'>
            {previewImage ? (
              <img src={previewImage} />
            ) : (
              <img
                src={
                  therapist && therapist.therapistImg !== ''
                    ? therapist.therapistImg
                    : noAvatar
                }
                alt=''
                className='sidenav__image__user'
              ></img>
            )}
            {id == authId && (
              <div className='file-upload'>
                <label htmlFor='file-input'>
                  <img
                    src={iconimg}
                    className='sidenav__image__upload'
                    alt=''
                  />
                </label>
                <input
                  id='file-input'
                  type='file'
                  name='image'
                  onChange={e => {
                    uploadTherapistImage(e)
                  }}
                />
              </div>
            )}
          </div>

          <div className='sidenav__name'>
            <h4>
              {therapist && therapist.fname} {therapist && therapist.lname}
            </h4>
          </div>
          <div className='sidenav__menu'>
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/profile`
                  }}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/summary`
                  }}
                >
                  Summary
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/appointments`
                  }}
                >
                  Appointments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/addappointment`
                  }}
                >
                  Add Appointment
                </NavLink>
              </li>
              {/* <li>Educational</li>
              <li>Documnents</li> */}
              <li>
                <NavLink
                  to={{
                    pathname: `/therapistlist/${id}/reviews`
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  therapist: state.therapists.oneTherapist,
  authId: state.therapistAuth?.therapist?._id
})
export default connect(mapStateToProps, { addTherapistProfileImage })(Sidenav)
