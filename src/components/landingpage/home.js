import React from 'react';

import Navbar from '../shared/navbar';
import HeroSection from './herosection';
import About from './about';
import Works from './works';
import Contact from './contact';
import Footer from '../shared/footer';
import Message from '../shared/message';
import ToTop from '../shared/totop';
//redux
import {connect} from 'react-redux';
import {therapist_logout} from '../../actions/therapistAuth';
import {logout} from '../../actions/auth';
const Home = (props) => {
  return (
    <>
      <Navbar {...props}></Navbar>
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
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    therapistAuth: state.therapistAuth,
  };
};
export default connect(mapStateToProps, {logout, therapist_logout})(Home);
