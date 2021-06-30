import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addExperience } from "./../../actions/therapistProfile";
import logo from "./../../assets/images/logo.png";
import userRegister from "./../../assets/images/user-register.png";
import { Link } from "react-router-dom";

const AddTherapistExperience = ({ addExperience, history, match }) => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    from: "",
    to: "",
  });

  const { title, location, from, to } = formData;

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    let id = match.params.id.trim();
    console.log(id);

    addExperience(
      {
        ...formData,
      },
      id,
      history
    );
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 h-screen bg-soul_bg font-Nunito">
        <div className="">
          <div className="w-44 h-24 mx-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <h4 className="text-4xl mt-2 bold  text-center">
            Add Your Experience
          </h4>
          <form className="mt-2" onSubmit={(e) => onSubmit(e)}>
            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
        border focus:outline-none
        focus:ring-1 focus:to-soul focus:border-transparent 
        "
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
        border focus:outline-none
        focus:ring-1 focus:to-soul focus:border-transparent 
        "
                type="text"
                placeholder="From Where"
                name="location"
                value={location}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className=" mt-6 ">
              <h6 className="block mx-auto mt-2  w-4/5 p-2 rounded-full">
                From Date
              </h6>
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
        border focus:outline-none
        focus:ring-1 focus:to-soul focus:border-transparent 
        "
                type="date"
                placeholder="From Where"
                name="from"
                value={from}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className=" mt-6 ">
              <h6 className="block mx-auto mt-2  w-4/5 p-2 rounded-full">To</h6>
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
        border focus:outline-none
        focus:ring-1 focus:to-soul focus:border-transparent 
        "
                type="date"
                placeholder="To"
                name="to"
                value={to}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className="mt-6 sm:ml-2">
              <input
                type="submit"
                className=" block  bg-soul-100 hover:bg-soul-300  sm:ml-10 md:ml-16 ml-16  py-2 px-4 rounded-full
               outline-none
               shadow-sm cursor-pointer"
                value="Save"
              />
            </div>
          </form>
        </div>

        <div className=" h-screen sm:block hidden">
          <img src={userRegister} alt="" className="h-screen object-cover" />
        </div>
      </div>
    </>
  );
};

AddTherapistExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default withRouter(
  connect(null, { addExperience })(AddTherapistExperience)
);
