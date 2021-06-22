import axios from "../utils/api";

import { GET_THERAPISTS, THERAPISTS_ERROR } from "./types";
import { setAlert } from "./alert";

//GET ALL Therapists
export const getTherapists = () => async (dispatch) => {
  try {
    const res = await axios.get("/therapist");
    console.log(
      "array of Therapist from therapist action",
      res.data.therapists
    );
    dispatch({
      type: GET_THERAPISTS,
      payload: res.data.therapists,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: THERAPISTS_ERROR,
    });
  }
};
