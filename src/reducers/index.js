import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import therapistAuth from "./therapistAuthReducer";
import article from "./article";
import therapists from "./therapistsReducer";
import review from "./review";

export default combineReducers({
  alert,
  auth,
  therapistAuth,
  article,
  review,
  therapists,
});
