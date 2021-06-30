import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import therapistAuth from "./therapistAuthReducer";
import article from "./article";
import chat from "./chat";
import therapists from "./therapistsReducer";
import post from "./post";

export default combineReducers({
  alert,
  auth,
  therapistAuth,
  article,
  chat,
  therapists,
  post,
});
