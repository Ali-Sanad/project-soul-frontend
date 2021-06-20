import React from 'react';

const About = () => {
	return (
		<>
			<div className="about">
				<div className="container">
					<div className="about__header">
						<h2 className="headers">What We Do?</h2>
					</div>
					<div className="row">
						<div className="col-6 about__image">
							<img src="./images/about.png" alt="" />
						</div>
						<div className="col-6 about__data">
							<p>
								Just like any muscle, your personality requires strengthening and your heart, mind and
								soul deserve specialized care. With Shezlong, you’ll get personalized treatment from a
								prescriber trained in mental health care. We want you to know that we're here to support
								you and help you develop your traits and overcome your personal weaknesses.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
