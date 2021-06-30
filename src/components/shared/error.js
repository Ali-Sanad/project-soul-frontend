import React from "react";

import errorpage from "./../../assets/images/error.png";

const Error = () => {
  return (
    <React.Fragment>
      <div className="error">
        <h2>404</h2>
        <img src={errorpage} alt=""></img>
        <button className="mainbtn">Back Home</button>
      </div>
    </React.Fragment>
  );
};

export default Error;
