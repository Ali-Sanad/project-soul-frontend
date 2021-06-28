import React, {useState} from 'react';

import booking from '../../assets/images/booktherapist.png';
//redux
import {connect} from 'react-redux';
import {addAppointment} from '../../actions/therapists';

const AddAppointment = ({therapistAuth, addAppointment, oneTherapist}) => {
  const [formData, setFormData] = useState({
    date: '',
    from: '',
    to: '',
    fees: therapistAuth.therapist !== null ? therapistAuth.therapist.fees : 150,
  });

  const {date, from, to} = formData;
  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addAppointment(formData, therapistAuth.therapist._id);

    setFormData({
      date: '',
      from: '',
      to: '',
    });
  };

  //condition only therapist can add appointment to his/her profile

  return (
    <React.Fragment>
      {therapistAuth &&
        oneTherapist &&
        therapistAuth.isAuthenticated_therapist &&
        therapistAuth.therapist._id === oneTherapist._id && (
          <div className='addappointment'>
            <div className='container'>
              <h4 className='headers'> Add Appointment </h4>
              <div className='row'>
                <div className='col-12 col-md-6 addappointment__form'>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <h6> Date </h6>
                    <input
                      type='date'
                      name='date'
                      value={date}
                      onChange={(e) => onChange(e)}
                      className='input'
                      required
                    ></input>
                    <div className='addappointment__form__fromto'>
                      <div>
                        <h6> From </h6>
                        <input
                          type='time'
                          name='from'
                          value={from}
                          onChange={(e) => onChange(e)}
                          className='input'
                          required
                        ></input>
                      </div>
                      <div>
                        <h6> To </h6>
                        <input
                          type='time'
                          name='to'
                          value={to}
                          onChange={(e) => onChange(e)}
                          className='input'
                          required
                        ></input>
                      </div>
                    </div>

                    <input
                      type='submit'
                      value='Add Appointment'
                      className='mainbtn mt-5'
                    />
                  </form>
                </div>
                <div className='col-12  col-md-6 addappointment__image'>
                  <img src={booking} alt=''></img>
                </div>
              </div>
            </div>
          </div>
        )}
    </React.Fragment>
  );
};

const mapStateTopProps = (state) => ({
  therapistAuth: state.therapistAuth,
  oneTherapist: state.therapists.oneTherapist,
});

export default connect(mapStateTopProps, {addAppointment})(AddAppointment);
