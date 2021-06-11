import axios from './api';

const setAuthToken = (token) => {
  if (token) {
    // axios.defaults.headers.common = {'Authorization': token};
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
