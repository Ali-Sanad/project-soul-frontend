import {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import Navbar from './components/layout/Navbar';
import LandingPage from './components/layout/LandingPage';
import Alert from './components/layout/Alert';
import AdminDashboard from './components/adminDashboard/AdminDashboard';

// import AllRoutes from './components/routes/AllRoutes';
import {LOGOUT, THERAPIST_LOGOUT} from './actions/types';
//state redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth';
import {loadTherapist} from './actions/therapistAuth';
//components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ConfirmUserAccount from './components/auth/ConfirmUserAccount/ConfirmUserAccount';
import AccountConfirmed from './components/auth/ConfirmUserAccount/AccountConfirmed';
import LoginTherapist from './components/auth/loginTherapist';
import RegisterThreapist from './components/auth/registerTherapist';
import Messenger from '../src/components/layout/messenger/messenger';
import Video from './components/video/video';
import ForgotPassword from './components/auth/ConfirmUserAccount/ForgotPassword';
import ResetPassword from './components/auth/ConfirmUserAccount/ResetPassword';

const App = () => {
  useEffect(() => {
    //attach the token to every axios request
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadTherapist());
    store.dispatch(loadUser());

    //logout user from all tabes if he logged out from one tabe
    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        store.dispatch({type: THERAPIST_LOGOUT});
        store.dispatch({type: LOGOUT});
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Alert />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/forgot-password' exact component={ForgotPassword} />
          <Route path='/reset-password/:id' exact component={ResetPassword} />

          <Route
            path='/pending-verification'
            exact
            component={ConfirmUserAccount}
          />
          <Route path='/user-email-confirmed' component={AccountConfirmed} />

          <Route path='/admin-dashboard' exact component={AdminDashboard} />
          <Route exact path='/logintherapist' component={LoginTherapist} />
          <Route exact path='/video' component={Video} />
          <Route
            exact
            path='/registertherapist'
            component={RegisterThreapist}
          />
          <Route path='/messenger'>
            <Messenger />
            {/* {!user ? <Redirect to="/" /> : <Messenger />} */}
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
