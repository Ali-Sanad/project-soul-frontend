// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { withRouter, Redirect, Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import { setAlert } from '../../actions/alert';
// import { createTherapistProfile } from '../../actions/therapistProfile';

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

// const CreateTherapistProfile = ({
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
//       {/* <Link to={`/controlTherapistProfileActions?id=${ID}`} variant="body2">
//         Next
//       </Link> */}
//     </>
//   );
// };

// CreateTherapistProfile.propTypes = {
//   createTherapistProfile: PropTypes.func.isRequired,

//   isAuthenticated_therapist: PropTypes.bool,
// };
// const mapStateToProps = (state) => ({
//   therapistProfile: state.therapistProfile,
// });
// export default connect(mapStateToProps, {
//   //setAlert,
//   createTherapistProfile,
// })(withRouter(CreateTherapistProfile));

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createTherapistProfile } from '../../actions/therapistProfile';

import logo from './../../assets/images/logo.png';
import userRegister from './../../assets/images/user-register.png';

const CreateTherapistProfile = ({
  // therapistProfile: { therapistProfile },
  // therapistProfile,
  createTherapistProfile,
  // setAlert,
  isAuthenticated_therapist,
  match,
}) => {
  // const classes = useStyles();
  const [formData, setFormData] = useState({
    summary: '',
    therapist_image_url: '',
    licenseOfOrganization: '',
    prefix: '',
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
    prefix,
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
    let id = match.params.id.trim();
    console.log(id);
    await setID(match.params.id.trim());
    console.log(ID);
    e.preventDefault();
    createTherapistProfile(formData, id);
    //<Redirect to="/controlTherapistActions" />;
  };

  console.log(ID);
  // const [fileInputState, setFileInputState] = useState('');
  // const [previewSource, setPreviewSource] = useState('');
  // const [selectedFile, setSelectedFile] = useState('');
  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   previewFile(file);
  // };
  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result);
  //   };
  // };
  // const [fileInputState, setFileInputState] = useState('');
  // const [previewSource, setPreviewSource] = useState('');
  // const [selectedFile, setSelectedFile] = useState('');
  // // const [successMsg, setSuccessMsg] = useState('');
  // // const [errMsg, setErrMsg] = useState('');
  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   previewFile(file);
  //   setSelectedFile(file);
  //   setFileInputState(e.target.value);
  // };

  // const previewFile = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource(reader.result);
  //   };
  // };

  // const handleSubmitFile = (e) => {
  //   e.preventDefault();
  //   if (!selectedFile) return;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(selectedFile);
  //   reader.onloadend = () => {
  //     uploadImage(reader.result);
  //   };
  //   reader.onerror = () => {
  //     console.error('AHHHHHHHH!!');
  //   };
  // };

  // const uploadImage = async (base64EncodedImage) => {
  //   try {
  //     await fetch('/api/upload', {
  //       method: 'POST',
  //       body: JSON.stringify({ data: base64EncodedImage }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     setFileInputState('');
  //     setPreviewSource('');
  //   } catch (err) {
  //     console.error(err);
  //     //   setErrMsg('Something went wrong!');
  //   }
  // };
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState('');
  const uploadTherapistImage = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      CreateTherapistProfile({ data: reader.result });
      console.log({ data: reader.result });
    };
    reader.onerror = () => {
      console.error('Article failed');
    };
  };

  if (
    !summary ||
    !therapist_image_url ||
    !licenseOfOrganization ||
    !prefix ||
    !yearsofEeperience ||
    !licenseNo ||
    !mainsFocus ||
    !birthOfDate ||
    !specialties ||
    !uploadCv ||
    !uploadimg ||
    !twitter ||
    !facebook ||
    !linkedin ||
    !instagram ||
    !youtube
  ) {
    //   setAlert('all fields required', 'error');
    // }
  } else {
    createTherapistProfile({
      summary,
      therapist_image_url,
      licenseOfOrganization,
      prefix,
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
      <div className="grid sm:grid-cols-2 grid-cols-1 h-screen bg-soul_bg font-Nunito">
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
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
          border focus:outline-none
          focus:ring-1 focus:to-soul focus:border-transparent 
          "
                type="text"
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
                placeholder="Prefix "
                name="prefix"
                value={prefix}
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
                placeholder="Facebook "
                name="facebook"
                value={facebook}
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
                placeholder="Linkedin "
                name="linkedin"
                value={linkedin}
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
                placeholder="Instagram "
                name="instagram"
                value={instagram}
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
                placeholder="Youtube"
                name="youtube"
                value={youtube}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className=" mt-6 ">
              <h6 className="block mx-auto mt-2  w-4/5 p-2 rounded-full">
                Upload your photo
              </h6>

              {/* <input
                id="fileInput"
                type="file"
                name="uploadCv"
                onChange={uploadTherapistImage}
                value={uploadCv}
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
                    border focus:outline-none
                    focus:ring-1 focus:to-soul focus:border-transparent 
                    "
              /> */}

              <input
                type="file"
                id="files"
                name="uploadCv"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }}
                // style={{ visibility: "hidden" }}
              />
              {/* <input
                id="file-input"
                type="file"
                name="uploadCv"
                onChange={(e) => {
                  uploadTherapistImage(e);
                  setImage(e.target.files[0]);
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }}
              /> */}

              {previewImage && (
                <img
                  src={previewImage}
                  alt="chosen"
                  style={{
                    height: '80px',
                    paddingLeft: '3rem',
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
  createTherapistProfile: PropTypes.func.isRequired,

  isAuthenticated_therapist: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  therapistProfile: state.therapistProfile,
});
export default connect(mapStateToProps, {
  //setAlert,
  createTherapistProfile,
})(withRouter(CreateTherapistProfile));
