import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom"
import userimg from '../../assets/images/user.png';

const TherapistCard = ({therapist}) => {
	console.log("therapist",therapist)
	return (
		<React.Fragment>
			<div className="therapistcard">
				<img src={userimg} alt="" className="therapistcard__userimg"></img>
				<p>{therapist.fname}  {therapist.lname}</p>
				<div className="therapistcard__rate">
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Rating name="read-only" value={therapist.ratingsAverage} readOnly />
					</Box>
				</div>
				<div className="therapistcard__btn">
					<button className="mainbtn">Book Now</button>
					<Link className="mainbtn" to={`/therapistdashboard/${therapist._id}`}> View Profile</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistCard;
