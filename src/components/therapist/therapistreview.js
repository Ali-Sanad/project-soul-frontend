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
					{/* review form */}
					<div className="therapistreview__data">
						<div className="row">
							<div className="col-12 col-md-6">
								<img src={userimg} alt="" className="therapistreview__userimg"></img>
								<h6>Menna Omar</h6>
								<div className="therapistreview__rate">
									<Box component="fieldset" mb={3} borderColor="transparent">
										<Rating name="read-only" value={3} readOnly />
									</Box>
									<p>24 Total Reviews</p>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<h5>Add Your Review</h5>
								<form>
									<Box component="fieldset" mb={3} borderColor="transparent">
										<Rating
											name="simple-controlled"
											value={value}
											onChange={(event, newValue) => {
												setValue(newValue);
											}}
										/>
									</Box>
									<textarea
										rows="3"
										className="input"
										placeholder="Add your review here..."
									></textarea>
									<button className="mainbtn">Add Review</button>
								</form>
							</div>
						</div>
					</div>
					{/* all reviews */}
					<h4 className="headers">All Reviews</h4>
					<div className="therapistreview__allreview">
						<div className="therapistreview__allreview__header">
							<Box component="fieldset" mb={3} borderColor="transparent">
								<Rating name="read-only" value={3} readOnly />
							</Box>
							<p>15-10-2021</p>
						</div>
						<div className="therapistreview__allreview__body">
							<p>
								Just like any muscle, your personality requires strengthening and your heart, mind and
								soul deserve specialized care. With Shezlong, you’ll get personalized treatment from a
								prescriber trained in mental health care.
							</p>
						</div>
					</div>

					<div className="therapistreview__allreview">
						<div className="therapistreview__allreview__header">
							<Box component="fieldset" mb={3} borderColor="transparent">
								<Rating name="read-only" value={3} readOnly />
							</Box>
							<p>15-10-2021</p>
						</div>
						<div className="therapistreview__allreview__body">
							<p>
								Just like any muscle, your personality requires strengthening and your heart, mind and
								soul deserve specialized care. With Shezlong, you’ll get personalized treatment from a
								prescriber trained in mental health care.
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistReview;
