import React from 'react';

import userimg from '../../assets/images/user.png';
import starimg from '../../assets/images/star.png';

const TherapistCard = () => {
	return (
		<React.Fragment>
			<div className="therapistcard">
				<img src={userimg} alt="" className="therapistcard__userimg"></img>
				<p>Menna Omar</p>
				<div className="therapistcard__rate">
					<img src={starimg} alt="" className="therapistcard__rate__starimg"></img>
					<img src={starimg} alt="" className="therapistcard__rate__starimg"></img>
					<img src={starimg} alt="" className="therapistcard__rate__starimg"></img>
					<img src={starimg} alt="" className="therapistcard__rate__starimg"></img>
					<img src={starimg} alt="" className="therapistcard__rate__starimg"></img>
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
