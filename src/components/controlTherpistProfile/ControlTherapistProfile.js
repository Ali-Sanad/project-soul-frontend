// import React, { Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Spinner from './../layout/Spinner';
// import { getCurrentTherapistProfile } from './../../actions/therapistProfile';
// import ControlTherapistProfileActions from './ControlTherapistProfileActions';

// import { Link } from 'react-router-dom';

// const ControlTherapistProfile = ({
//   getCurrentTherapistProfile,
//   therapistAuth,
//   therapistProfile: { therapistProfile, loading },
// }) => {
//   useEffect(() => {
//     getCurrentTherapistProfile();
//   }, []);

//   return loading && therapistProfile === null ? (
//     <Spinner />
//   ) : (
//     <Fragment>
//       <h1 className="text-gray-700 font-bold text-xl">Control your Profile</h1>
//       <p className="text-gray-600 font-medium text-lg"> Welcome</p>
//       {therapistProfile !== null ? (
//         <Fragment>
//           <ControlTherapistProfileActions />
//         </Fragment>
//       ) : (
//         <Fragment>
//           <p>You havenot setup a profile yet ,Please Add some information</p>
//           <Link
//             to="/create-therapist-profile"
//             className="block mx-auto mt-12 mb-12  bg-blue-500 hover:bg-blue-800 w-4/5 p-4 rounded-full text-white
//             outline-none
//             shadow-sm cursor-pointer"
//           >
//             Create Therapist Profile
//           </Link>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// ControlTherapistProfile.propTypes = {
//   getCurrentTherapistProfile: PropTypes.func.isRequired,
//   therapistAuth: PropTypes.object.isRequired,
//   therapistProfile: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   therapistAuth: state.therapistAuth,
//   therapistProfile: state.therapistProfile,
// });

// export default connect(mapStateToProps, { getCurrentTherapistProfile })(
//   ControlTherapistProfile
// );
