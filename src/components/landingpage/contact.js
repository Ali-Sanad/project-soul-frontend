import React from 'react';

const Contact = () => {
	return (
		<>
			<div className="contact">
				<div className="container">
					<div className="contact__header">
						<h2 className="headers">Contact Us</h2>
					</div>
					<div className="row">
						<div className="col-6 contact__form">
							<form>
                                <input type="text" className="input" placeholder="Subject"></input>
                                <textarea rows="7" className="input" placeholder="Leave your message here..."></textarea>
                                <button className="mainbtn">Contact Us</button>
                            </form>
						</div>
						<div className="col-6 contact__image">
							<img src="./images/contact.png" alt=""></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
