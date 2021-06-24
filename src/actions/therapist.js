import {
  GET_THERAPIST,
  THERAPIST_ERROR,
  UPATE_THERAPIST_DATA,
  UPATE_THERAPIST_ERROR,
} from "./types";
import axios from "../utils/api";

export const getTherapist = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${id}`);
    console.log(" Therapist from therapist action", res.data.therapist);

    dispatch({
      type: GET_THERAPIST,
      payload: res.data.therapist,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: THERAPIST_ERROR,
    });
  }
};
// export const updateTherapistProfile = (formData, id) => async (dispatch) => {
//   console.log(id, formData);
//   try {
//     const res = await axios.patch(`/therapist/updatatherapist/${id}`, formData);
//     console.log(res.data, "gg");
//     dispatch({
//       type: UPATE_THERAPIST_DATA,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err, "hh");
//     const errors = err.response.data.errors;

//     // if (errors) {
//     //   errors.forEach((error) => dispatch(setAlert(error.msg, error)));
//     // }

//     dispatch({
//       type: UPATE_THERAPIST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
//};
