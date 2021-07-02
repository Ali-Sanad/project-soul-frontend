import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {updateTherapistForm} from '../../actions/therapistProfile';

const TherapistSummary = ({therapist, id, updateTherapistForm, auth}) => {
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    summary: '',
    // prefix: '',
    mainsFocus: '',

    specialties: '',
    fees: '',
    birthOfDate: '',
    yearsofEeperience: '',
  });
  useEffect(() => {
    setFormData({
      summary: therapist?.summary,
      // prefix: therapist?.prefix,
      mainsFocus: therapist?.mainsFocus,

      specialties: therapist?.specialties,
      fees: therapist?.fees,
      birthOfDate: therapist?.birthOfDate,
      yearsofEeperience: therapist?.yearsofEeperience,
    });
  }, [therapist]);
  const {
    summary,
    // prefix,
    mainsFocus,
    specialties,
    yearsofEeperience,
    fees,
    birthOfDate,
  } = formData;

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
      {therapist && (
        <div className='therapistsummary'>
          <div className='container'>
            <h2 className='headers'>Summary</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <h6>Summary</h6>
              <textarea
                rows='4'
                disabled={disable}
                className='inputstyle'
                value={summary}
                name='summary'
                onChange={(e) => onChange(e)}
              ></textarea>
              <h6>Main Focus</h6>
              <textarea
                rows='2'
                disabled={disable}
                className='inputstyle'
                value={mainsFocus}
                name='mainsFocus'
                onChange={(e) => onChange(e)}
              ></textarea>
              <h6>Specialist</h6>
              <input
                type="text"
                disabled={disable}
                className="inputstyle"
                value={specialties}
                name="specialties"
                onChange={(e) => onChange(e)}
              ></input>
              {/* <select
                value={specialties}
                className='inputstyle'
                name='specialties'
                onChange={(e) => onChange(e)}
                disabled={disable}
              >
                <option value='Anxiety disorders'>Anxiety disorders</option>
                <option value='Mood disorders'>Mood disorders</option>
                <option value='Psychotic disorders'>Psychotic disorders</option>
                <option value='Obsessive-compulsive disorder'>
                  Obsessive-compulsive disorder
                </option>
                <option value='Post-traumatic stress disorder'>
                  Post-traumatic stress disorder
                </option>
                <option value='Stress response syndromes'>
                  Stress response syndromes
                </option>

                <option value='Dissociative disorders'>
                  Dissociative disorders
                </option>
                <option value='Factitious disorders'>
                  Factitious disorders
                </option>
                <option value='Somatic symptom disorders'>
                  Somatic symptom disorders
                </option>
              </select> */}
              {/* <h6>Prefix</h6>
              <input
                type='text'
                disabled={disable}
                className='inputstyle'
                value={prefix}
                name='prefix'
                onChange={(e) => onChange(e)}
              ></input> */}
              <h6>Years of Experience</h6>
              <input
                type='number'
                disabled={disable}
                className='inputstyle'
                value={yearsofEeperience}
                name='yearsofEeperience'
                onChange={(e) => onChange(e)}
              ></input>
              <h6>Date of Birth</h6>

              <input
                type='date'
                disabled={disable}
                className='inputstyle'
                value={birthOfDate}
                name='birthOfDate'
                onChange={(e) => onChange(e)}
              ></input>
              <h6>Fees</h6>

              <input
                type='number'
                min='1'
                disabled={disable}
                className='inputstyle'
                value={fees}
                name='fees'
                onChange={(e) => onChange(e)}
              ></input>
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
  TherapistSummary
);
