import axios from '../utils/api';

import {
  GET_THERAPISTS,
  THERAPISTS_ERROR,
  GET_THERAPIST,
  THERAPIST_ERROR,
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

//get therapist by id
export const getTherapist = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${id}`);
    console.log(' Therapist from therapist action', res.data.therapist);

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
