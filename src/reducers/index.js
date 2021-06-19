import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import therapistAuth from "./therapistAuthReducer";
import article from "./article";

export default combineReducers({
  alert,
  auth,
  therapistAuth,
  article,
});
