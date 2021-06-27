import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTherapist } from '../../actions/therapists'

import Navbar from '../shared/navbar'
import SideNav from '../shared/sidenav'
import TherapistFiles from './therapistfiles'
import TherapistProfile from './therapistprofile'
import TherapistSummary from './therapistsummary'
import TherapistReview from './therapistreview'
import AddAppointment from './addappointment'
import Appointments from './appointments'
import MessageIcon from '../shared/message'

import { newConversation } from '../../actions/chat'
const TherapistDashboard = ({
  match,
  therapist,
  getTherapist,
  user,
  review,
  newConversation
}) => {
  let content = match.params.content
  let id = match.params.id.trim()
  const senderId = user
  const receiverId = id
  console.log('user', user)
  useEffect(() => {
    // if (id && user) {
    //   newConversation({ senderId, receiverId });
    // }
    getTherapist(id)
  }, [getTherapist, id, newConversation, user])

  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <React.Fragment>
      <div className='therapistdashboard'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 therapistdashboard__topnav'>
              <Navbar className='therapistdashboard__navbar'></Navbar>
            </div>

            {/* <button
                className='custom-toggler navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarsExample09'
                aria-controls='navbarsExample09'
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label='Toggle navigation'
                onClick={handleNavCollapse}
              >
                <span className='navbar-toggler-icon'>
                  <i className='fas fa-bars'></i>
                </span>
              </button> */}

            <>
              <div className='col-12 col-md-3'>
                <div
                // className={`${
                //   isNavCollapsed ? 'collapse' : ''
                // } navbar-collapse`}
                >
                  <SideNav id={id} therapist={therapist} />
                </div>
              </div>
            </>
            <div className='col-12 col-md-8'>
              {/* <TherapistFiles></TherapistFiles> */}
              {/* <TherapistProfile></TherapistProfile> */}

              {content == 'profile' && <TherapistProfile id={id} />}
              {content == 'summary' && (
                <TherapistSummary id={id}></TherapistSummary>
              )}
              {content == 'appointments' && (
                <>
                <Appointments id={id}></Appointments>
                </>
              )}
              {content == 'addappointment' && (
                <>
                <AddAppointment></AddAppointment>
                </>
              )}
              {content == 'reviews' && (
                <TherapistReview id={id}></TherapistReview>
              )}

              {/* <AddAppointment></AddAppointment> */}

              <MessageIcon></MessageIcon>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = state => ({
  therapist: state.therapists.oneTherapist,
  review: state.therapists?.oneTherapist?.reviews,
  user: state.auth?.user?._id
})

export default connect(mapStateToProps, { getTherapist, newConversation })(
  TherapistDashboard
)
