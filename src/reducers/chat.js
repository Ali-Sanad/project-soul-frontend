import {
  GET_CONVERSATIONS,
  NEW_CONVERSATION,
  SET_CURRENT_CHAT,
  NEW_MESSAGE,
} from "../actions/types";

const initialState = {
  conversations: [],

  currentChat: [],
};

const chat = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: payload,
      };

    case NEW_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, payload],
      };
    case NEW_MESSAGE: {
      return {
        ...state,
        currentChat: [...state.currentChat, payload],
      };
    }

    // case GET_THERAPIST_CONVERSATION:
    //   return {
    //     ...state,
    //     therapist: payload.therapist,
    //   };

    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: payload,
      };

    // case GET_ARTICLE:
    //   return {
    //     ...state,
    //     article: payload,
    //   };

    // case ARTICLES_ERROR:
    //   return {
    //     ...state,
    //   };

    // case DELETE_ARTICLE:
    //   return {
    //     ...state,
    //     articles: state.articles.filter((article) => article._id !== payload),
    //   };

    default:
      return state;
  }
};

export default chat;
