import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a class="navbar-brand navbar__logo" href="#">
						<img src="./images/logo.png" />
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<a class="nav-link" href="#">
									HOME
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link disabled" href="#">
									Disabled
								</a>
							</li>
						</ul>
						<form class="form-inline my-2 my-lg-0 navbar__login">
							<button className="mainbtn">LOGIN</button>
						</form>
					</div>
				</div>
			</nav>

			{/* <nav className="navbar">
				<div className="container">
					<div className="row">
						<div className="navbar__logo">
							<img src="./images/logo.png" />
						</div>
						<div className="navbar__content">
				
								<span>HOME</span>
								<span>ABOUT</span>
								<span>HOW IT WORK</span>
								<span>ARTICLE</span>
								<span>COMMUNITY</span>
								<span>CONTACT US</span>
						</div>
						<div className="navbar__btn">
							<button className="mainbtn">LOGIN</button>
						</div>
					</div>
				</div>
			</nav> */}
		</>
	);
};

export default Navbar;
