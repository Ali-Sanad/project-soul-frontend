import axios from 'axios';
import store from '../store';
import {LOGOUT} from '../actions/types';

const instance = axios.create({
  baseURL: 'https://project-soul-api.herokuapp.com/api',
  // baseURL: 'http://localhost:5000/api',
});

/**
 intercept any error responses from the api (axios instance) and check  
 if the token has expired or not to logout the user
**/

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  }
);

export default instance;
