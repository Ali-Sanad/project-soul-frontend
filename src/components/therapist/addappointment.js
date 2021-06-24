import React, {useState} from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

import booking from '../../assets/images/booktherapist.png';
//redux
import {connect} from 'react-redux';
import {addAppointment} from '../../actions/therapistAuth';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

const AddAppointment = ({therapistAuth, addAppointment}) => {
  // const classes = useStyles();

  const [formData, setFormData] = useState({
    date: '',
    from: '',
    to: '',
    fees: 0,
  });

  const {date, from, to, fees} = formData;
  const onChange = (e) => {
    console.log(e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addAppointment(formData);
    setFormData({
      date: '',
      from: '',
      to: '',
      fees: 0,
    });
  };

  //condition only therapist can add appointment to his/her profile

  return (
    <React.Fragment>
      <div className='addappointment'>
        <div className='container'>
          <h4 className='headers'> Add Appointment </h4>
          <div className='row'>
            <div className='col-12 col-md-6 addappointment__form'>
              <form onSubmit={(e) => onSubmit(e)}>
                <h6> Date </h6>
                {/* <TextField
                  id='date'
                  type='date'
                  name='date'
                  value={date}
                  onChange={(e) => onChange(e)}
                  className='input'
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> */}
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

                <h5> Fees </h5>
                <input
                  type='number'
                  name='fees'
                  value={fees}
                  onChange={(e) => onChange(e)}
                  className='input'
                  required
                ></input>
                <input
                  type='submit'
                  value='Add Appointment'
                  className='mainbtn'
                />
              </form>
            </div>
            <div className='col-12 col-md-6 addappointment__image'>
              <img src={booking} alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateTopProps = (state) => ({
  therapistAuth: state.therapistAuth,
});

export default connect(mapStateTopProps, {addAppointment})(AddAppointment);
