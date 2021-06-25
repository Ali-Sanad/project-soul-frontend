import axios from "../utils/api";

import {
  GET_THERAPISTS,
  THERAPISTS_ERROR,
  GET_THERAPIST,
  THERAPIST_ERROR,
  UPDATE_REVIEW,
  REVIEW_ERROR,
  DELETE_REVIEW,
  ADD_REVIEW,
} from "./types";
import { setAlert } from "./alert";

//GET ALL Therapists
export const getTherapists = () => async (dispatch) => {
  try {
    const res = await axios.get("/therapist");
    console.log(
      "array of Therapist from therapist action",
      res.data.therapists
    );
    const acceptedTherapist = res.data.therapists.filter(
      (th) => th.isAccepted == true
    );
    console.log("accepted", acceptedTherapist);
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

export const addReview = (body, therapistId) => async (dispatch) => {
  let { rating, review } = body;

  rating = Number(rating);
  const bodyTosent = { rating, review };
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
    console.log("add review action", res.data);
    console.log("review res,data", res.data);
    dispatch({
      type: ADD_REVIEW,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};

// export const getReviews = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`/therapist/${id}/reviews`);
//     console.log("array of reviews from review action", res.data);
//     dispatch({
//       type: GET_REVIEWS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: REVIEW_ERROR,
//     });
//   }
// };

export const updateReview =
  (therapistId, reviewId, body) => async (dispatch) => {
    try {
      const res = await axios.patch(
        `/therapist/${therapistId}/reviews/${reviewId}`,
        body,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      );
      //console.log(res.data)
      console.log("review res,data", res.data);
      dispatch({
        type: UPDATE_REVIEW,
        //  payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REVIEW_ERROR,
      });
    }
  };

export const deleteReview = (therapistId, reviewId) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `/therapist/${therapistId}/reviews/${reviewId}`,
      {
        headers: {
          Authorization: localStorage.token,
        },
      }
    );
    //console.log(res.data)
    console.log("review res,data", res.data);
    dispatch({
      type: DELETE_REVIEW,
      //  payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};
