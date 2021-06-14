import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import therapistAuth from './therapistAuthReducer';

export default combineReducers({
  alert,
  auth,
  therapistAuth,
});
