import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { getTherapist } from '../../actions/therapists';
import { createTheraProfile } from '../../actions/therapistProfile';
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
const AdminTherapistCard = ({ therapist, getTherapist, id, children }) => {
  useEffect(() => {
    getTherapist(id);
  }, [getTherapist, id]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {children}
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <h2 id="transition-modal-title headers">More Info</h2>
            <div id="transition-modal-description">
              {/* ************************* */}

              <React.Fragment>
                {therapist && (
                  <div className="admintherapistcard">
                    <div className="container">
                      {/* Personal Information */}

                      <h5 className="headers">Personal Information</h5>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <p>
                            First Name: <span>{therapist?.fname}</span>
                          </p>
                          <p>
                            Email: <span>{therapist?.email}</span>
                          </p>
                        </div>
                        <div className="col-12 col-md-6">
                          <p>
                            Last Name: <span>{therapist?.lname}</span>
                          </p>
                        </div>
                      </div>
                      <hr />
                      {/* Education */}
                      <h5 className="headers">Education</h5>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <p>
                            Specialist:{' '}
                            <span>{therapist?.specialties}</span>
                          </p>
                          <p>
                          Years of Experience: <span>{therapist?.yearsofEeperience }</span>
                          </p>
                          <p>
                            Licenec: <span>{therapist?.licenseNo}</span>
                          </p>
                          <p>
                            Summary: <span>{therapist?.summary}</span>
                          </p>
                        </div>
                        <div className="col-12 col-md-6">
                          <p>
                            Main Focus:{' '}
                            <span>{therapist?.mainsFocus}</span>
                          </p>
                          <p>
                            Licence No.: <span>15-10-1996</span>
                          </p>
                        </div>
                      </div>
                      <hr></hr>

                      {/* Social Links */}
                      <h5 className="headers">Social Links</h5>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <p>
                            Facebook: <span>{therapist?.facebook}</span>
                          </p>
                          <p>
                            Twitter: <span>{therapist?.twitter}</span>
                          </p>
                          <p>
                            Instagram: <span>{therapist?.instagram}</span>
                          </p>
                        </div>
                        <div className="col-12 col-md-6">
                          <p>
                            Linkedin: <span>{therapist?.linkedIn}</span>
                          </p>
                          <p>
                            Youtube: <span>{therapist?.youtube}</span>
                          </p>
                        </div>
                      </div>

                      <div className="admintherapistcard__btns"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
              {/* ************************* */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default connect(null, {
  getTherapist,
  createTheraProfile,
})(AdminTherapistCard);
