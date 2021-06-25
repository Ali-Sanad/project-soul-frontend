import axios from "../utils/api";

import {
  GET_CONVERSATIONS,
  CONVERSATIONS_ERROR,
  NEW_CONVERSATION,
  GET_THERAPIST_CONVERSATION,
  SET_CURRENT_CHAT,
  CURRENT_CHAT_ERROR,
  NEW_MESSAGE,
  NEW_MESSAGE_ERROR,
} from "./types";
import { setAlert } from "./alert";

export const getConversations = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/conversations/${id}`);
    console.log(res.data);
    dispatch({
      type: GET_CONVERSATIONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CONVERSATIONS_ERROR,
    });
  }
};

export const newConversation = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/conversations", body);
    console.log(res.data);
    dispatch({
      type: NEW_CONVERSATION,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CONVERSATIONS_ERROR,
    });
  }
};

export const addMessage = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/messages", body);
    console.log(res.data);
    dispatch({
      type: NEW_MESSAGE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: NEW_MESSAGE_ERROR,
    });
  }
};

export const getTherapistConversation = (therapistId) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${therapistId}`);
    console.log(res.data);
    dispatch({
      type: GET_THERAPIST_CONVERSATION,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CONVERSATIONS_ERROR,
    });
  }
};

// setCurrentChatAction;

export const setCurrentChatAction = (ConversationId) => async (dispatch) => {
  try {
    const res = await axios.get(`/messages/${ConversationId}`);
    console.log(res.data);
    dispatch({
      type: SET_CURRENT_CHAT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CURRENT_CHAT_ERROR,
    });
  }
};

// //GET ALL ARTICLES
// export const getArticles = () => async (dispatch) => {
//   try {
//     const res = await axios.get("/article");
//     console.log("array of articles from article action", res.data);
//     dispatch({
//       type: GET_ARTICLES,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: ARTICLES_ERROR,
//     });
//   }
// };

// export const addArticle = (body) => async (dispatch) => {
//   try {
//     const res = await axios.post("/article", body);
//     console.log(res.data);
//     dispatch({
//       type: ADD_ARTICLE,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: ARTICLES_ERROR,
//     });
//   }
// };

// export const deleteArticle = (id) => async (dispatch) => {
//   try {
//     await axios.delete("/article/" + id);
//     // console.log(res.data);
//     dispatch({
//       type: DELETE_ARTICLE,
//       payload: id,
//     });
//     // toast.warn("post deleted");
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: ARTICLES_ERROR,
//     });
//   }
// };
