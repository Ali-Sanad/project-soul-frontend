import React from 'react';

import Navbar from '../shared/navbar';
import HeroSection from './herosection';
import About from './about';
import Works from './works';
import Contact from './contact';
import Footer from '../shared/footer';
import Message from '../shared/message';
import ToTop from '../shared/totop';

const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<HeroSection></HeroSection>
			<About></About>
			<Works></Works>
			<Contact></Contact>
			<Footer></Footer>
			<Message></Message>
			<ToTop></ToTop>
		</>
	);
};

export default Home;
