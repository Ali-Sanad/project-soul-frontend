// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
//import { withRouter } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { addExperience } from './../../actions/therapistProfile';

// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

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

// const AddTherapistExperience = ({ addExperience, history }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     location: '',
//     from: '',
//     to: '',
//   });

//   const { title, location, from, to } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const classes = useStyles();
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Create Your Profile
//         </Typography>
//         <form
//           className={classes.form}
//           noValidate
//           // onSubmit={(e) => onSubmit(e)}
//           onSubmit={(e) => {
//             e.preventDefault();
//             addExperience(formData, history);
//           }}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="title"
//                 name="title"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="title"
//                 label="title"
//                 value={title}
//                 onChange={(e) => onChange(e)}
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="location"
//                 label="Location"
//                 name="location"
//                 autoComplete="Location"
//                 value={location}
//                 onChange={(e) => onChange(e)}
//               />
//             </Grid>
//           </Grid>
//           <form className={classes.container} noValidate>
//             <TextField
//               id="from"
//               label="From Date"
//               type="date"
//               defaultValue="2017-05-24"
//               className={classes.textField}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </form>
//           <form className={classes.container} noValidate>
//             <TextField
//               id="to"
//               label="To"
//               type="date"
//               defaultValue="2019-05-24"
//               className={classes.textField}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </form>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Submit
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="/logintherapist" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// };

// AddTherapistExperience.propTypes = {
//   addExperience: PropTypes.func.isRequired,
// };

// export default connect(null, { addExperience })(AddTherapistExperience);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addExperience } from './../../actions/therapistProfile';
import logo from './../../assets/images/logo.png';
import userRegister from './../../assets/images/user-register.png';
import { Link } from 'react-router-dom';

const AddTherapistExperience = ({ addExperience, history, match }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    from: '',
    to: '',
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
