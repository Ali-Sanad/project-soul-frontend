import React from "react";

const UserData = () => {
    
  return (
    <>
      <div className="userprofile">
        <div className="container">
          <h2 className="headers">Profile</h2>
          <form>
            <div className="row">
              <div className=" col-12 col-md-6">
                <h6>Name</h6>
                <input type="text" className="inputstyle" value="Hadeer"></input>

                <h6>Email</h6>
                <input
                  type="text"
                  className="inputstyle"
                  value="hadeer@gmail.com"
                ></input>

                <h6>Password</h6>
                <input type="text" className="inputstyle" value="1234567"></input>

                <h6>Gender</h6>
                <input type="text" className="inputstyle" value ="Female"></input>

                <h6>Date Of Birth</h6>
                <input type="text" className="inputstyle" value="12/2/1998"></input>

                <button className="button btn" >
					<span className="mainbtn">
						Edit your information
					</span>
				</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserData;