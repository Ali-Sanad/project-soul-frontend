import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {withRouter} from 'react-router-dom';

import userimg from '../../assets/images/user.png';

const TherapistCard = ({therapist, history}) => {
  const bookTherapistHandler = (id) => {
    history.push(`/booktherapist/${id}`);
  };

  const viewProfileHandler = (id) => {
    // history.push(`/therapistdashboard/${id}`);
    history.push(`therapistlist/${id}`);
  };

  return (
    <React.Fragment>
      <div className='therapistcard'>
        <img
          src={therapist?.therapistImg}
          alt={therapist?.therapistImg}
          className='therapistcard__userimg'
        ></img>
        <p>
          {therapist?.fname} {therapist?.lname}
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
          <button
            className='mainbtn'
            onClick={() => bookTherapistHandler(therapist._id)}
          >
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
  );
};

export default withRouter(TherapistCard);
