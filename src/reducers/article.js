import {
  ARTICLES_ERROR,
  GET_ARTICLES,
  ADD_ARTICLE,
  GET_ARTICLE,
} from "../actions/types";

const initialState = {
  articles: [],
  article: null,
};

const article = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };

    case ADD_ARTICLE:
      return {
        ...state,
        articles: [payload, ...state.articles],
      };

    case GET_ARTICLE:
      return {
        ...state,
        article: payload,
      };

    case ARTICLES_ERROR:
      return {
        ...state,
      };

    // case "DELETE_POST":
    //   return {
    //     ...state,
    //     posts: state.posts.filter((post) => post._id !== payload),
    //   };

    default:
      return state;
  }
};

export default article;
