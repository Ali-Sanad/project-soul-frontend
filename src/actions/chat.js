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

export const getConversations = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/conversations/${id}`);
    dispatch({
      type: GET_CONVERSATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONVERSATIONS_ERROR,
    });
  }
};

export const newConversation = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/conversations", body);
    dispatch({
      type: NEW_CONVERSATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONVERSATIONS_ERROR,
    });
  }
};

export const addMessage = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/messages", body);
    dispatch({
      type: NEW_MESSAGE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: NEW_MESSAGE_ERROR,
    });
  }
};

export const getTherapistConversation = (therapistId) => async (dispatch) => {
  try {
    const res = await axios.get(`/therapist/${therapistId}`);
    dispatch({
      type: GET_THERAPIST_CONVERSATION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONVERSATIONS_ERROR,
    });
  }
};

// setCurrentChatAction;

export const setCurrentChatAction = (ConversationId) => async (dispatch) => {
  try {
    const res = await axios.get(`/messages/${ConversationId}`);
    dispatch({
      type: SET_CURRENT_CHAT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CURRENT_CHAT_ERROR,
    });
  }
};
