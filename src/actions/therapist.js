import { GET_THERAPIST, THERAPIST_ERROR } from "./types";
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
