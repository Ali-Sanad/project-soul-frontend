import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import userimg from '../../assets/images/user.png';

const TherapistReview = () => {
	const [value, setValue] = React.useState(0);

	return (
		<React.Fragment>
			<div className="therapistreview">
				<div className="container">
					<h2 className="headers">Reviews</h2>
					<div className="therapistreview__data">
						<div className="row">
							<div className="col-6">
								<img src={userimg} alt="" className="therapistreview__userimg"></img>
								<h6>Menna Omar</h6>
								<div className="therapistreview__rate">
									<Box component="fieldset" mb={3} borderColor="transparent">
										<Rating name="read-only" value={3} readOnly />
									</Box>
                                    <p>24 Total Reviews</p>

									{/* <Box component="fieldset" mb={3} borderColor="transparent">
										<Rating
											name="simple-controlled"
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										/>
									</Box> */}
								</div>
							</div>
							<div className="col-6">6</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistReview;
