import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {setAuthToken, setTherapistAuthToken} from './utils/setAuthToken';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();

  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
  if (
    previousState.therapistAuth.therapistToken !==
    currentState.therapistAuth.therapistToken
  ) {
    const therapistToken = currentState.therapistAuth.therapistToken;
    setTherapistAuthToken(therapistToken);
  }
});

export default store;
