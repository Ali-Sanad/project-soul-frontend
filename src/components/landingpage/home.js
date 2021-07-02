import React, {useEffect} from 'react';

import Navbar from '../shared/navbar';
import HeroSection from './herosection';
import About from './about';
import Works from './works';
import Contact from './contact';
import Footer from '../shared/footer';
import MessageIcon from '../shared/message';
import ToTop from '../shared/totop';
//redux
import {getTherapists, getTherapist} from '../../actions/therapists';
import {connect} from 'react-redux';
import {therapist_logout} from '../../actions/therapistAuth';
import {logout} from '../../actions/auth';
const Home = (props) => {
  useEffect(() => {
    props.getTherapists();
    if (props.therapistAuth.therapist) {
      props.getTherapist(props.therapistAuth?.therapist?._id);
    }
  }, [props]);
  return (
    <>
      <Navbar {...props}></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
      <MessageIcon></MessageIcon>
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
export default connect(mapStateToProps, {
  getTherapists,
  logout,
  therapist_logout,
  getTherapist,
})(Home);
