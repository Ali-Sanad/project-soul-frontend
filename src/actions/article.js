import axios from "../utils/api";

import { GET_ARTICLES, ARTICLES_ERROR, ADD_ARTICLE } from "./types";
import { setAlert } from "./alert";

//GET ALL ARTICLES
export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get("/article");
    console.log("array of articles from article action", res.data);
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ARTICLES_ERROR,
    });
  }
};

export const addArticle = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/article", body, {
      headers: {
        Authorization: localStorage.token,
      },
    });
    console.log(res.data);
    dispatch({
      type: ADD_ARTICLE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ARTICLES_ERROR,
    });
  }
};
