import axios from '../utils/api';

import {
  GET_THERAPISTS,
  THERAPISTS_ERROR,
  GET_THERAPIST,
  THERAPIST_ERROR,
  ADD_THERAPIST_APPOINTMENT,
  UPDATE_THERAPIST_APPOINTMENT,
  DELETE_THERAPIST_APPOINTMENT,
  THERAPIST_APPOINTMENT_ACTION_FAILED,
  LOAD_THERAPIST_APPOINTMENT_BY_ID,
  UPDATE_REVIEW,
  REVIEW_ERROR,
  DELETE_REVIEW,
  ADD_REVIEW,
  ADD_THERAPIST_IMAGE,
} from './types';
import {setAlert} from './alert';
import {loadTherapist} from './therapistAuth';

//GET ALL Therapists
export const getTherapists = () => async (dispatch) => {
  try {
    const res = await axios.get('/therapist');

    dispatch({
      type: GET_THERAPISTS,
      payload: res.data.therapists,
    });
  } catch (error) {
    dispatch({
      type: THERAPISTS_ERROR,
    });
  }
};

export const getTherapist = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${id}`);

    dispatch({
      type: GET_THERAPIST,
      payload: res.data.therapist,
    });
  } catch (error) {
    dispatch({
      type: THERAPIST_ERROR,
    });
  }
};

//therapist appointments######ACTIONS######

//load appointment by ID
export const loadAppointmentById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_THERAPIST_APPOINTMENT_BY_ID,
      payload: id,
    });
  } catch (err) {
    dispatch(setAlert('Loading appointment by id failed ', 'error'));
    dispatch({
      type: THERAPIST_APPOINTMENT_ACTION_FAILED,
    });
  }
};
//add appointment
export const addAppointment = (formData, therapist_id) => async (dispatch) => {
  try {
    const res = await axios.post('/appointments', formData);
    dispatch({
      type: ADD_THERAPIST_APPOINTMENT,
      payload: res.data,
    });
    //optimistic update
    dispatch(getTherapist(therapist_id));

    dispatch(setAlert('Appointment added successfully ', 'success'));
  } catch (err) {
    dispatch(setAlert('Appointment add failed ', 'error'));
    dispatch({
      type: THERAPIST_APPOINTMENT_ACTION_FAILED,
    });
    dispatch(getTherapist(therapist_id));
  }
};

//update appointment
export const updateAppointment =
  (formData, id, therapist_id) => async (dispatch) => {
    try {
      const res = await axios.put(`/appointments/${id}`, formData);
      dispatch({
        type: UPDATE_THERAPIST_APPOINTMENT,
        payload: res.data,
      });
      dispatch(getTherapist(therapist_id));
      dispatch(setAlert('Appointment updated successfully ', 'success'));
    } catch (err) {
      dispatch(setAlert('Appointment update failed ', 'error'));
      dispatch({
        type: THERAPIST_APPOINTMENT_ACTION_FAILED,
      });
      dispatch(getTherapist(therapist_id));
    }
  };

//delete appointment
export const deleteAppointment = (id, therapist_id) => async (dispatch) => {
  try {
    await axios.delete(`/appointments/${id}`);
    dispatch({
      type: DELETE_THERAPIST_APPOINTMENT,
      payload: id,
    });
    dispatch(getTherapist(therapist_id));
    dispatch(setAlert('Appointment deleted successfully ', 'success'));
  } catch (err) {
    dispatch(setAlert('Appointment delete failed ', 'error'));
    dispatch({
      type: THERAPIST_APPOINTMENT_ACTION_FAILED,
    });
    dispatch(getTherapist(therapist_id));
  }
};

export const addReview = (body, therapistId) => async (dispatch) => {
  let {rating, review} = body;

  rating = Number(rating);
  const bodyTosent = {rating, review};
  try {
    const res = await axios.post(
      `/therapist/${therapistId}/reviews`,
      bodyTosent,
      {
        headers: {
          Authorization: localStorage.token,
        },
      }
    );
    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });
    //dispatch()
    dispatch(getTherapist(therapistId));
    dispatch(setAlert('Review created successfully ', 'success'));
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};

export const updateReview =
  (therapistId, reviewId, body) => async (dispatch) => {
    try {
      await axios.patch(`/therapist/${therapistId}/reviews/${reviewId}`, body, {
        headers: {
          Authorization: localStorage.token,
        },
      });
      dispatch({
        type: UPDATE_REVIEW,
      });
    } catch (error) {
      dispatch({
        type: REVIEW_ERROR,
      });
    }
  };

export const deleteReview = (therapistId, reviewId) => async (dispatch) => {
  try {
    await axios.delete(`/therapist/${therapistId}/reviews/${reviewId}`, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    dispatch({
      type: DELETE_REVIEW,
      payload: reviewId,
    });
    dispatch(getTherapist(therapistId));
    dispatch(setAlert('review deleted successfully ', 'success'));
  } catch (error) {
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};

export const addTherapistProfileImage = (body, id) => async (dispatch) => {
  try {
    await axios.patch('/therapist/uploadTherapistImage', body);
    dispatch({
      type: ADD_THERAPIST_IMAGE,
    });
    dispatch(getTherapist(id));
    dispatch(loadTherapist());
  } catch (error) {
    dispatch({
      type: THERAPISTS_ERROR,
    });
    dispatch(getTherapist(id));
    dispatch(loadTherapist());
  }
};
