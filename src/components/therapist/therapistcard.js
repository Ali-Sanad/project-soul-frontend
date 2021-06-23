import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

import userimg from '../../assets/images/user.png'

const TherapistCard = ({ therapist }) => {
  const history = useHistory()

  const bookTherapistHandler = id => {
    history.push(`/booktherapist/${id}`)
  }

  const viewProfileHandler = id => {
    history.push(`/therapistdashboard/${id}`)
  }

  console.log('therapist', therapist)
  return (
    <React.Fragment>
      <div className='therapistcard'>
        <img src={userimg} alt='' className='therapistcard__userimg'></img>
        <p>
          {therapist.fname} {therapist.lname}
        </p>
        <div className='therapistcard__rate'>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Rating
              name='read-only'
              value={therapist.ratingsAverage}
              readOnly
            />
          </Box>
        </div>
        <div className='therapistcard__btn'>
          <button className='mainbtn' onClick={() => bookTherapistHandler(therapist._id)}>
            Book Now
          </button>
          <button
            className='mainbtn'
            onClick={() => viewProfileHandler(therapist._id)}
          >
            View Profile
          </button>
          {/* <Link className='mainbtn' to={`/therapistdashboard/${therapist._id}`}>
            {' '}
            View Profile
          </Link> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default TherapistCard
