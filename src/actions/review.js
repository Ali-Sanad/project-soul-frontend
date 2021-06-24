import axios from "../utils/api";

import { setAlert } from "./alert";

import {
  GET_REVIEWS,
  ADD_REVIEW,
  REVIEW_ERROR,
  DELETE_REVIEW,
  UPDATE_REVIEW,
} from "./types";

//therapist/23242dd3/reviews
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
    //console.log(res.data)
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

export const getReviews = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${id}/reviews`);
    console.log("array of reviews from review action", res.data);
    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REVIEW_ERROR,
    });
  }
};

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
