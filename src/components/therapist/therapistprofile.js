import React from 'react';

const TherapistProfile = () => {
	return (
		<React.Fragment>
			<div className="therapistprofile">
				<div className="container">
					<h2 className="headers">Profile</h2>
					<form>
						<div className="row">
							<div className=" col-12 col-md-6">
								<h6>First Name</h6>
								<input type="text" className="inputstyle" value="Menna"></input>

								<h6>Email</h6>
								<input type="text" className="inputstyle" value="menna@gmail.com"></input>

								<h6>Year Of Experience</h6>
								<input type="text" className="inputstyle" value="6"></input>
							</div>
							<div className="col-12 col-md-6">
								<h6>Last Name</h6>
								<input type="text" className="inputstyle" value="Omar"></input>

								<h6>Licenece</h6>
								<input type="text" className="inputstyle" value="licence"></input>

							</div>
							<div className="col-12">
								<button className="mainbtn">Save</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistProfile;
