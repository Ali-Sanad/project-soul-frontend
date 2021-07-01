import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {updateTherapistForm} from '../../actions/therapistProfile';
const TherapistProfile = ({therapist, id, updateTherapistForm, auth}) => {
  useEffect(() => {
    setFormData({
      fname: therapist?.fname,
      lname: therapist?.lname,
      email: therapist?.email,
      yearsofEeperience: therapist?.yearsofEeperience || 1,
      licenseNo: therapist?.licenseNo,
    });
  }, [therapist]);
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    yearsofEeperience: 0,
    licenseNo: '',
  });
  const {fname, lname, email, yearsofEeperience, licenseNo} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = async (e) => {
    e.preventDefault();
    if (disable) {
      setDisable(false);
    } else {
      updateTherapistForm(formData, id);
      setDisable(true);
    }
  };
  return (
    <React.Fragment>
      {therapist &&
        auth.isAuthenticated_therapist &&
        auth.therapist._id === id && (
          <div className='therapistprofile' onSubmit={(e) => onSubmit(e)}>
            <div className='container'>
              <h2 className='headers'>Profile</h2>
              <form>
                <div className='row'>
                  <div className=' col-12 col-md-6'>
                    <h6>First Name</h6>
                    <input
                      type='text'
                      disabled={disable}
                      className='inputstyle'
                      value={fname}
                      name='fname'
                      onChange={(e) => onChange(e)}
                    ></input>

                    <h6>Email</h6>
                    <input
                      type='text'
                      className='inputstyle'
                      disabled={disable}
                      value={email}
                      name='email'
                      onChange={(e) => onChange(e)}
                    ></input>

                    <h6>Year Of Experience</h6>
                    <input
                      type='text'
                      className='inputstyle'
                      value={yearsofEeperience}
                      disabled={disable}
                      name='yearsofEeperience'
                      onChange={(e) => onChange(e)}
                    ></input>
                  </div>
                  <div className='col-12 col-md-6'>
                    <h6>Last Name</h6>
                    <input
                      type='text'
                      className='inputstyle'
                      value={lname}
                      disabled={disable}
                      name='lname'
                      onChange={(e) => onChange(e)}
                    ></input>
                    <h6>Licenece</h6>
                    <input
                      type='text'
                      className='inputstyle'
                      value={licenseNo}
                      disabled={disable}
                      name='licenseNo'
                      onChange={(e) => onChange(e)}
                    ></input>
                  </div>
                  {auth.isAuthenticated_therapist &&
                    auth.therapist._id === id &&
                    disable && (
                      <div className='col-12'>
                        <button className='mainbtn'>edit</button>
                      </div>
                    )}
                  {!disable && (
                    <div className='col-12'>
                      <button className='mainbtn'>save</button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  state: state,
  therapist: state.therapists?.oneTherapist,
  auth: state.therapistAuth,
});
export default connect(mapStateToProps, {updateTherapistForm})(
  TherapistProfile
);
