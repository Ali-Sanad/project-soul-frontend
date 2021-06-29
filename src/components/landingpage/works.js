import React from "react";

const Works = () => {
  return (
    <>
      <div className="works" id="works">
        <div className="container">
          <div className="works__header">
            <h2 className="headers">How It Works?</h2>
          </div>
          <div className="row">
            <div className="col-3 works__image">
              <img src="./images/works1.png" alt=""></img>
              <p>Choose Therapist</p>
            </div>
            <div className="col-3 works__image">
              <img src="./images/works2.png" alt=""></img>
              <p>Reserve Session</p>
            </div>
            <div className="col-3 works__image">
              <img src="./images/works3.png" alt=""></img>
              <p>Choose Payment</p>
            </div>
            <div className="col-3 works__image">
              <img src="./images/works4.png" alt=""></img>
              <p>Start Session</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
