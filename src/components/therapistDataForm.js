// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { withRouter, Redirect, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import { setAlert } from '../../actions/alert';
// import { createTherapistProfile } from '../actions/therapistProfile';

// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// // import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// //import { getCurrentTherapistProfile } from '../actions/therapistProfile';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Soul
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const TherapistDataForm = ({
//   // therapistProfile: { therapistProfile },
//   // therapistProfile,
//   createTherapistProfile,
//   // setAlert,
//   isAuthenticated_therapist,
//   match,
// }) => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     summary: '',
//     therapist_image_url: '',
//     licenseOfOrganization: '',
//     prefix: '',
//     yearsofEeperience: '',
//     licenseNo: '',
//     mainsFocus: '',
//     birthOfDate: '',
//     specialties: '',
//     uploadCv: '',
//     twitter: '',
//     facebook: '',
//     linkedin: '',
//     instagram: '',
//     youtube: '',
//   });
//   const {
//     summary,
//     therapist_image_url,
//     licenseOfOrganization,
//     prefix,
//     yearsofEeperience,
//     licenseNo,
//     mainsFocus,
//     birthOfDate,
//     specialties,
//     uploadCv,
//     twitter,
//     facebook,
//     linkedin,
//     instagram,
//     youtube,
//   } = formData;
//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const [ID, setID] = useState(null);

//   const onSubmit = async (e) => {
//     let id = match.params.id.trim();
//     console.log(id);
//     await setID(match.params.id.trim());
//     console.log(ID);
//     e.preventDefault();
//     createTherapistProfile(formData, id);
//     //<Redirect to="/controlTherapistActions" />;
//   };

//   console.log(ID);

//   if (
//     !summary ||
//     !therapist_image_url ||
//     !licenseOfOrganization ||
//     !prefix ||
//     !yearsofEeperience ||
//     !licenseNo ||
//     !mainsFocus ||
//     !birthOfDate ||
//     !specialties ||
//     !uploadCv ||
//     !twitter ||
//     !facebook ||
//     !linkedin ||
//     !instagram ||
//     !youtube
//   ) {
//     //   setAlert('all fields required', 'error');
//     // }
//   } else {
//     createTherapistProfile({
//       summary,
//       therapist_image_url,
//       licenseOfOrganization,
//       prefix,
//       yearsofEeperience,
//       licenseNo,
//       mainsFocus,
//       birthOfDate,
//       specialties,
//       uploadCv,
//       twitter,
//       facebook,
//       linkedin,
//       instagram,
//       youtube,
//     });
//     // setAlert('Account created successfully', 'success');
//   }
//   // if (isAuthenticated) {
//   //   return <h1>home</h1>;
//   // }

//   return (
//     <>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Create Your Profile
//           </Typography>
//           <form
//             className={classes.form}
//             noValidate
//             onSubmit={(e) => onSubmit(e)}
//             action="/controlTherapistActions"
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="summary"
//                   name="summary"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="summary"
//                   label="Summary"
//                   value={summary}
//                   onChange={(e) => onChange(e)}
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="licenseOfOrganization"
//                   label="License Of Organization"
//                   name="licenseOfOrganization"
//                   autoComplete="license Of Organization"
//                   value={licenseOfOrganization}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="yearsofEeperience"
//                   label="years of Experience "
//                   name="yearsofEeperience"
//                   autoComplete="yearsofEeperience"
//                   value={yearsofEeperience}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="licenseNo"
//                   label="licenseNo"
//                   type="licenseNo"
//                   id="licenseNo"
//                   autoComplete="license No"
//                   value={licenseNo}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="birthOfDate"
//                   label="Birth Of Date"
//                   type="birthOfDate"
//                   id="birthOfDate"
//                   autoComplete="Birth Of Date"
//                   value={birthOfDate}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="prefix"
//                   label="Prefix"
//                   name="prefix"
//                   autoComplete="Prefix"
//                   value={prefix}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="mainsFocus"
//                   label="Mains Focus"
//                   name="mainsFocus"
//                   autoComplete="Mains Focus"
//                   value={mainsFocus}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="specialties"
//                   label="Specialties"
//                   name="specialties"
//                   autoComplete="Specialties"
//                   value={specialties}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="twitter"
//                   label="Twitter"
//                   name="twitter"
//                   autoComplete="Twitter"
//                   value={twitter}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="facebook"
//                   label="Facebook"
//                   name="facebook"
//                   autoComplete="Facebook"
//                   value={facebook}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="linkedin"
//                   label="linkedin"
//                   name="linkedin"
//                   autoComplete="linkedin"
//                   value={linkedin}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="instagram"
//                   label="instagram"
//                   name="instagram"
//                   autoComplete="instagram"
//                   value={instagram}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="youtube"
//                   label="youtube"
//                   name="youtube"
//                   autoComplete="youtube"
//                   value={youtube}
//                   onChange={(e) => onChange(e)}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Submit
//             </Button>
//             {/* <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="/controlTherapistProfileActions?id=+ID" variant="body2">
//                 Next
//               </Link>
//             </Grid>
//           </Grid> */}
//           </form>
//         </div>
//         <Box mt={5}>
//           <Copyright />
//         </Box>
//       </Container>
//       <Link to={`/controlTherapistProfileActions?id=${ID}`} variant="body2">
//         Next
//       </Link>
//     </>
//   );
// };

// TherapistDataForm.propTypes = {
//   createTherapistProfile: PropTypes.func.isRequired,

//   isAuthenticated_therapist: PropTypes.bool,
// };
// const mapStateToProps = (state) => ({
//   therapistProfile: state.therapistProfile,
// });
// export default connect(mapStateToProps, {
//   //setAlert,
//   createTherapistProfile,
// })(withRouter(TherapistDataForm));

import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CreateTherapistProfile from './therapistProfile-form/CreateTherapistProfile';
import AddTherapistExperience from './therapistProfile-form/AddTherapistExperience';
import AddTherapistEducation from './therapistProfile-form/AddTherapistEducation';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Create Your Profile', ' Add your Education', 'Add your Experience'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CreateTherapistProfile />;
    case 1:
      return <AddTherapistEducation />;
    case 2:
      return <AddTherapistExperience />;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              {/* All steps completed - you&apos;re finished */}
              All steps completed
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
          <div className="registertherapist__content">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            </div>
            <div  className="registertherapist__btns">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  // color="primary"
                  onClick={handleSkip}
                  // className={classes.button}
                  className="registertherapist__btns__mainbtn"
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                // color="primary"
                onClick={handleNext}
                // className={classes.button}
                  className="registertherapist__btns__mainbtn"

              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* <Link to="/therapistdashboard">let’ go to your Profile</Link> */}
    </div>
  );
}
