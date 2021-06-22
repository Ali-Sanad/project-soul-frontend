import React from 'react';

const TherapistSummary = () => {
	return (
		<React.Fragment>
			<div className="therapistsummary">
				<div className="container">
					<h2 className="headers">Summary</h2>
					<form>
						<h6>Summary</h6>
						<textarea className="inputstyle" rows="4" value="summaryyyyyy"></textarea>
						<h6>Main Focus</h6>
						<textarea className="inputstyle" rows="2" value="main focussss"></textarea>
						<h6>Specialist</h6>
						<input type="text" className="inputstyle" value="specialist"></input>
						<h6>Prefix</h6>
						<input type="text" className="inputstyle" value="prefix"></input>
						<button className="mainbtn">Save</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default TherapistSummary;
