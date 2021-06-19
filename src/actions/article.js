import axios from "../utils/api";

import { GET_ARTICLES, ARTICLES_ERROR } from "./types";
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
