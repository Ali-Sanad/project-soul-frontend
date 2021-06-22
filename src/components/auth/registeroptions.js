import React from 'react';

import logo from './../../assets/images/logo.png';
import therapist from './../../assets/images/therapist.png';
import users from './../../assets/images/users.png';

const RegisterOptions = () => {
	return (
		<React.Fragment>
			<div className="registeroptions">
				<div className="container">
					<img src={logo} className="registeroptions__logo"></img>
					<h2>Register As</h2>
					<div className="row">
						<div className="col-6">
							<img src={therapist} alt=""></img>
							<h4>Therapist</h4>
						</div>
						<div className="col-6">
							<img src={users} alt=""></img>
							<h4>User</h4>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RegisterOptions;
