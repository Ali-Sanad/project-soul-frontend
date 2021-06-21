import React from 'react';

import userimg from './../../assets/images/user.png';
import iconimg from './../../assets/images/iconimg.png';


const Sidenav = () => {
	return (
		<React.Fragment>
			<div className="sidenav">
				<div className="container">
					<div className="sidenav__image">
						<img src={userimg} alt="" className="sidenav__image__user"></img>
						{/* <input type="file"></input> */}
						<div class="file-upload">
							<label for="file-input">
								<img src={iconimg} className="sidenav__image__upload"/>
							</label>

							<input id="file-input" type="file" />
						</div>
					</div>
					<div className="sidenav__name">
						<h4>Menna Omar</h4>
					</div>
					<div className="sidenav__menu">
						<ul>
							<li className="active">Profile</li>
							<li>Summary</li>
							<li>Appointments</li>
							<li>Educational</li>
							<li>Documnents</li>
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Sidenav;
