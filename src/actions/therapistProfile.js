import axios from "../utils/api";
import { setAlert } from "./alert";

import {
  THERAPIST_GET_PROFILE,
  THERAPIST_PROFILE_ERROR,
  THERAPIST_UPDATE_PROFILE,
  UPDATE_THERAPIST_FORM,
} from "./types";

//Get current therapist profile

export const getCurrentTherapistProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/therapistProfile/getmyprofile");
    console.log("hhh", res);
    dispatch({
      type: THERAPIST_GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log("error", err);
    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createTherapistProfile = (formData, id) => async (dispatch) => {
  console.log(id, formData);
  try {
    const res = await axios.patch(`/therapist/updatatherapist/${id}`, formData);
    console.log(res.data, "gg");
    dispatch({
      type: THERAPIST_UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err, "hh");
    //  const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, error)));
    // }

    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateTherapistForm = (formData, id) => async (dispatch) => {
  console.log(id, formData);
  try {
    const res = await axios.patch(
      `/therapistProfile/updatatherapist/${id}`,
      formData
    );
    console.log(res.data, "gg");
    dispatch({
      type: UPDATE_THERAPIST_FORM,
      payload: res.data,
    });
  } catch (err) {
    console.log(err, "hh");

    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Experience
export const addExperience = (formData, id, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/therapistProfile/updateExperience/${id}`,
      formData
    );

    dispatch({
      type: THERAPIST_UPDATE_PROFILE,

      payload: res.data,
    });

    dispatch(setAlert("Experience Added", "success"));

    //   history.push('/');
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err, "hh");
    const errors = err.response?.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Education
// export const addEducation = (formData, id) => async (dispatch) => {
//   try {
//     console.log(formData, id);
//     const res = await axios.put(
//       `/therapistProfile/updateEducation/${id}`,
//       formData
//     );
//     if (res) {
//       console.log(res.data);

//       dispatch({
//         type: THERAPIST_UPDATE_PROFILE,
//         payload: res.data,
//       });

//       dispatch(setAlert('Education Added', 'success'));
//     }

//   } catch (err) {
//     console.log(err, 'hh');
//     const errors = err.response?.data.errors;

//     dispatch({
//       type: THERAPIST_PROFILE_ERROR,
//       payload: { msg: err.response?.statusText, status: err.response?.status },
//     });
//   }
// };

export const addEducation = (formData, id, history) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/therapistProfile/updateEducation/${id}`,
      formData
    );

    dispatch({
      type: THERAPIST_UPDATE_PROFILE,

      payload: res.data,
    });

    dispatch(setAlert("Education Added", "success"));

    //   history.push('/');
  } catch (err) {
    const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
