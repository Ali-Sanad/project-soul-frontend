import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import therapistAuthReducer from "./therapistAuthReducer";

export default combineReducers({
  alert,
  auth,
  therapistAuthReducer,
});
