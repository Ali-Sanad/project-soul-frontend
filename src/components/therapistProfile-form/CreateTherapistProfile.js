import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createTheraProfile } from '../../actions/therapistProfile';

import logo from './../../assets/images/logo.png';
import userRegister from './../../assets/images/user-register.png';

const CreateTherapistProfile = ({
  createTheraProfile,
  isAuthenticated_therapist,
  match,
}) => {
  const [formData, setFormData] = useState({
    summary: '',
    therapist_image_url: '',
    licenseOfOrganization: '',
    // prefix: '',
    yearsofEeperience: '',
    licenseNo: '',
    mainsFocus: '',
    birthOfDate: '',
    specialties: '',
    uploadCv: '',
    uploadimg: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    youtube: '',
  });
  const {
    summary,
    therapist_image_url,
    licenseOfOrganization,
    // prefix,
    yearsofEeperience,
    licenseNo,
    mainsFocus,
    birthOfDate,
    specialties,
    uploadCv,
    uploadimg,
    twitter,
    facebook,
    linkedin,
    instagram,
    youtube,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const [ID, setID] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    let id = match.params.id.trim();
    console.log(id);
    setID(match.params.id.trim());
    console.log(ID);
    createTheraProfile(formData, id);
  };
  console.log(formData);
  console.log(ID);

  const [previewImage, setPreviewImage] = useState(null);
  // const [image, setImage] = useState('');
  const uploadTherapistImage = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setFormData({ ...formData, [e.target.name]: reader.result });
    };
    reader.onerror = () => {};
  };

  if (
    !summary ||
    !therapist_image_url ||
    !licenseOfOrganization ||
    // !prefix ||
    !yearsofEeperience ||
    !licenseNo ||
    !mainsFocus ||
    !birthOfDate ||
    !specialties ||
    !uploadCv ||
    !uploadimg 
    // ||
    // !twitter ||
    // !facebook ||
    // !linkedin ||
    // !instagram ||
    // !youtube
  ) {
  } else {
    createTheraProfile({
      summary,
      therapist_image_url,
      licenseOfOrganization,
      // prefix,
      yearsofEeperience,
      licenseNo,
      mainsFocus,
      birthOfDate,
      specialties,
      uploadCv,
      uploadimg,
      twitter,
      facebook,
      linkedin,
      instagram,
      youtube,
    });
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 h-screen bg-soul_bg font-Nunito createtheraistprofile">
        <div className="">
          <div className="w-44 h-24 mx-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <h4 className="text-4xl mt-2 bold  text-center">
            Create Your Profile
          </h4>
          <form className="mt-2" onSubmit={(e) => onSubmit(e)}>
            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="text"
                placeholder="Summary"
                name="summary"
                value={summary}
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
                placeholder="License Of Organization"
                name="licenseOfOrganization"
                value={licenseOfOrganization}
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
                placeholder="License Number"
                name="licenseNo"
                value={licenseNo}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className=" mt-6 ">
              <h6 className="block mx-auto mt-2  w-4/5 p-2 rounded-full text-gray-400">
               Birth of Date
              </h6>
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
       type="date"
                placeholder="Date Of Birth "
                name="birthOfDate"
                value={birthOfDate}
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
                placeholder="Years of Experience "
                name="yearsofEeperience"
                value={yearsofEeperience}
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
                placeholder="Mains Focus"
                name="mainsFocus"
                value={mainsFocus}
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
                placeholder="Specialties"
                name="specialties"
                value={specialties}
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
                placeholder="Twitter "
                name="twitter"
                value={twitter}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>

            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="text"
                placeholder="Facebook "
                name="facebook"
                value={facebook}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>

            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="text"
                placeholder="Linkedin "
                name="linkedin"
                value={linkedin}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>

            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="text"
                placeholder="Instagram "
                name="instagram"
                value={instagram}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>

            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="text"
                placeholder="Youtube"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>

            <div className=" mt-6 ">
              <h6 className="block mx-auto mt-2  w-4/5 p-2 rounded-full text-gray-400">
                Upload your Licence
              </h6>

              <input
                type="file"
                id="files"
                name="uploadCv"
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none
                focus:ring-1 focus:to-soul focus:border-transparent"
                onChange={(e) => {
                  uploadTherapistImage(e);
                }}
              />

              {previewImage && (
                <img
                  src={previewImage}
                  alt="chosen"
                  style={{
                    height: '80px',
                    paddingLeft: '5rem',
                    paddingTop: '1rem',
                  }}
                />
              )}
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

CreateTherapistProfile.propTypes = {
  // createTheraProfile: PropTypes.func.isRequired,

  isAuthenticated_therapist: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  therapistProfile: state.therapistProfile,
});
export default connect(mapStateToProps, {
  createTheraProfile,
})(withRouter(CreateTherapistProfile));
