import axios from '../utils/api';
import { setAlert } from './alert';

import {
  THERAPIST_GET_PROFILE,
  THERAPIST_PROFILE_ERROR,
  THERAPIST_UPDATE_PROFILE,
  UPDATE_THERAPIST_FORM,
} from './types';

//Get current therapist profile

export const getCurrentTherapistProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/therapistProfile/getmyprofile');
    dispatch({
      type: THERAPIST_GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createTheraProfile = (formData, id) => async (dispatch) => {
  try {
    console.log(formData, id);
    const res = await axios.patch(`/therapist/updatatherapist/${id}`, formData);
    dispatch({
      type: THERAPIST_UPDATE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateTherapistForm = (formData, id) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `/therapistProfile/updatatherapist/${id}`,
      formData
    );
    dispatch({
      type: UPDATE_THERAPIST_FORM,
      payload: res.data,
    });
  } catch (err) {
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

    dispatch(setAlert('Experience Added', 'success'));
  } catch (err) {
    const errors = err.response?.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

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

    dispatch(setAlert('Education Added', 'success'));
  } catch (err) {
    dispatch({
      type: THERAPIST_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
