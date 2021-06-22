import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import userimg from '../../assets/images/user.png';

const TherapistCard = () => {
	return (
		<React.Fragment>
			<div className="therapistcard">
				<img src={userimg} alt="" className="therapistcard__userimg"></img>
				<p>Menna Omar</p>
				<div className="therapistcard__rate">
					<Box component="fieldset" mb={3} borderColor="transparent">
						<Rating name="read-only" value={3} readOnly />
					</Box>
				</div>
				<div className="therapistcard__btn">
					<button className="mainbtn">Book Now</button>
					<button className="mainbtn">View Profile</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistCard;
