import React from 'react';
import { Link } from 'react-router-dom';

// import Avatar from '@material-ui/core/Avatar';
// //import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// // import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// const queryString = require('query-string');

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

const ControlTherapistProfileActions = () => {
  // const classes = useStyles();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  console.log('jjj', id, typeof id);

  return (
    // <Container component="main" maxWidth="xs">
    //   <CssBaseline />
    //   <div className={classes.paper}>
    //     <Avatar className={classes.avatar}>
    //       <LockOutlinedIcon />
    //     </Avatar>
    //     <Typography component="h1" variant="h5">
    //       Let’s Complete Your Profile
    //     </Typography>
    //     <Grid container justify="flex-start">
    //       <Grid item>
    //         <Link href="/therapist-data-form ${id}" variant="body2">
    //           Edit Your Profile
    //         </Link>
    //       </Grid>
    //     </Grid>
    //     <Grid container justify="flex-start">
    //       <Grid item>
    //         <Link href="/addTherapistExperience" variant="body2">
    //           Add Your Experience
    //         </Link>
    //       </Grid>
    //     </Grid>
    //     <Grid container justify="flex-start">
    //       <Grid item>
    //         <Link href="/addTherapistEducation" variant="body2">
    //           Add Your Education
    //         </Link>
    //       </Grid>
    //     </Grid>
    //   </div>
    //   <Box mt={10}>
    //     <Copyright />
    //   </Box>
    // </Container>
    <>
      <Link to={`/therapist-data-form/${id}`} variant="body2">
        Edit Your Profile
      </Link>
      <Link to="/addTherapistExperience" variant="body2">
        Add Experience
      </Link>
      <Link to="/addTherapistEducation" variant="body2">
        Add Education
      </Link>
    </>
  );
};

export default ControlTherapistProfileActions;
