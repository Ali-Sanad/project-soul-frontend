import React from 'react';

const HeroSection = () => {
	return (
		<>
			<div className="herosection">
				<div className="container">
					<div className="row">
						<div className="col-6 herosection__data">
							<h4>Talk to your therapist online privately anytime anywhere !</h4>
							<button className="mainbtn">Get Started</button>
						</div>
						<div className="col-6 herosection__image">
							<img src="./images/herosection.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
