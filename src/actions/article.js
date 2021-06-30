import axios from "../utils/api";

import {
  GET_ARTICLES,
  ARTICLES_ERROR,
  ADD_ARTICLE,
  GET_ARTICLE,
  DELETE_ARTICLE,
} from "./types";

//GET ALL ARTICLES
export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get("/article");
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLES_ERROR,
    });
  }
};

export const addArticle = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/article", body);
    dispatch({
      type: ADD_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLES_ERROR,
    });
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/article/${id}`);
    dispatch({
      type: GET_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ARTICLES_ERROR,
    });
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await axios.delete("/article/" + id);
    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ARTICLES_ERROR,
    });
  }
};
