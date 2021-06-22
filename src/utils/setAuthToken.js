import axios from './api';

//setting user token
export const setAuthToken = (token) => {
  if (token) {
    // axios.defaults.headers.common = {'Authorization': token};
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
  }
};

//setting therapist token
export const setTherapistAuthToken = (therapistToken) => {
  if (therapistToken) {
    // axios.defaults.headers.common = {'Authorization': therapistToken};
    axios.defaults.headers.common['Authorization'] = therapistToken;
    localStorage.setItem('therapistToken', therapistToken);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('therapistToken');
  }
};
