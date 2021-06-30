import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import booking from '../../assets/images/booktherapist.png';

//redux
import {connect} from 'react-redux';
import {updateAppointment} from '../../actions/therapists';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UpdateAppointment = ({
  children,
  id,
  therapistId,
  oneTherapist,
  updateAppointment,
  oneAppointment,
}) => {
  useEffect(() => {
    setFormData({
      date: oneAppointment && oneAppointment.date,
      from: oneAppointment && oneAppointment.from,
      to: oneAppointment && oneAppointment.to,
      fees: oneTherapist && (oneTherapist.fees ? oneTherapist.fees : 150),
    });
  }, [oneAppointment, oneTherapist]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  ////////////////////////////////////////
  const [formData, setFormData] = useState({
    date: '',
    from: '',
    to: '',
    fees: 150,
  });

  const {date, from, to, fees} = formData;
  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateAppointment(formData, id, therapistId);
    handleClose();
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title headers'>Edit Appointment</h2>
            <div id='transition-modal-description'>
              {/* ************************* */}

              <React.Fragment>
                <div className='addappointment'>
                  <div className='container'>
                    <h5 className='headers'>Fees:{fees} EGP</h5>
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
                            value='Edit Appointment'
                            className='mainbtn mt-5'
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

              {/* ************************* */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapStateTopProps = (state) => ({
  oneAppointment: state.therapists.oneAppointment,
  oneTherapist: state.therapists.oneTherapist,
});
export default connect(mapStateTopProps, {
  updateAppointment,
})(UpdateAppointment);
