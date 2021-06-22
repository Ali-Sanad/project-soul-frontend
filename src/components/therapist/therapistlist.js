import React from 'react';

import Navbar from '../shared/navbar';
import TherapistCard from './therapistcard';

const TherapistList = () => {
	return (
		<React.Fragment>
			<Navbar></Navbar>
			<div className="therapistlist">
				<h2 className="headers">Our Therapists</h2>
				<div className="container">
					<div className="row">
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
						<div className="col-6 col-md-3">
							<TherapistCard></TherapistCard>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistList;
