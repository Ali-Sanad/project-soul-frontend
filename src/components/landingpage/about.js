import React,{useEffect} from "react";
import WOW from 'wowjs';

const About = () => {
  
  useEffect(()=>{
    new WOW.WOW({
        live: false
    }).init();
})

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="about__header">
            <h2 className="headers">What We Do?</h2>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 about__image wow fadeInLeft" data-wow-duration="1s">
              <img src="./images/about.png" alt="" />
            </div>
            <div className="col-12 col-md-6 about__data wow fadeInRight" data-wow-duration="1s"  data-wow-delay=".1s">
              <p>
                Just like any muscle, your personality requires strengthening
                and your heart, mind and soul deserve specialized care. With
                Shezlong, you’ll get personalized treatment from a prescriber
                trained in mental health care. We want you to know that we're
                here to support you and help you develop your traits and
                overcome your personal weaknesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
