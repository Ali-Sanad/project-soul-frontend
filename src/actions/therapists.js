import axios from '../utils/api';

import {
  GET_THERAPISTS,
  THERAPISTS_ERROR,
  GET_THERAPIST,
  THERAPIST_ERROR,
  ADD_THERAPIST_APPOINTMENT,
  UPDATE_THERAPIST_APPOINTMENT,
  DELETE_THERAPIST_APPOINTMENT,
} from './types';
import {setAlert} from './alert';

//GET ALL Therapists
export const getTherapists = () => async (dispatch) => {
  try {
    const res = await axios.get('/therapist');
    console.log(
      'array of Therapist from therapist action',
      res.data.therapists
    );
    const acceptedTherapist = res.data.therapists.filter(
      (th) => th.isAccepted == true
    );
    console.log('accepted', acceptedTherapist);
    dispatch({
      type: GET_THERAPISTS,
      payload: acceptedTherapist,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: THERAPISTS_ERROR,
    });
  }
};

export const getTherapist = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${id}`);
    // console.log(' Therapist from therapist action', res.data.therapist);

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

//therapist appointments######ACTIONS######

//add appointment
export const addAppointment = (formData, therapist_id) => async (dispatch) => {
  try {
    const res = await axios.post('/appointments', formData);
    console.log(res.data);
    dispatch({
      type: ADD_THERAPIST_APPOINTMENT,
      payload: res.data,
    });
    console.log(therapist_id);
    //optimistic update
    dispatch(getTherapist(therapist_id));

    dispatch(setAlert('Appointment added successfully ', 'success'));
  } catch (err) {
    const error = err.response.data.errors.err;
    console.log(error);
    dispatch(setAlert(error, 'error'));
  }
};

//update appointment
export const updateAppointment =
  (formData, id, therapist_id) => async (dispatch) => {
    try {
      const res = await axios.put(`/appointments/${id}`, formData);
      console.log(res.data);
      dispatch({
        type: UPDATE_THERAPIST_APPOINTMENT,
        payload: res.data,
      });
      dispatch(getTherapist(therapist_id));
      dispatch(setAlert('Appointment updated successfully ', 'success'));
    } catch (err) {
      const error = err.response.data.errors.err;
      console.log(error);
      dispatch(setAlert(error, 'error'));
    }
  };

//delete appointment
export const deleteAppointment = (id, therapist_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/appointments/${id}`);
    console.log(res.data);
    dispatch({
      type: DELETE_THERAPIST_APPOINTMENT,
      payload: id,
    });
    dispatch(getTherapist(therapist_id));
    dispatch(setAlert('Appointment deleted successfully ', 'success'));
  } catch (err) {
    const error = err.response.data.errors.err;
    console.log(error);
    dispatch(setAlert(error, 'error'));
  }
};
