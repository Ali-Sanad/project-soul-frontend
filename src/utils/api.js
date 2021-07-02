import axios from 'axios';
// import store from '../store';
// import {LOGOUT} from '../actions/types';
// import {THERAPIST_LOGOUT} from '../actions/types';
//https://project-soul-api.herokuapp.com/api
const apiConnectionString = 'https://project-soul-api.herokuapp.com/api';
 //'http://localhost:5000/api';

const instance = axios.create({
  baseURL: apiConnectionString,
});

/**
 intercept any error responses from the api (axios instance) and check  
 if the token has expired or not to logout the user
**/

// instance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     // if (err.response.status === 401) {
//     // if therapist we will get 401 auth error of user which will log out both user & therapist
//     // store.dispatch({type: LOGOUT});
//     // store.dispatch({type: THERAPIST_LOGOUT});
//     // console.log('Reasponse Interceptor catches some errors');
//     // }
//     return Promise.reject(err);
//   }
// );

export default instance;
