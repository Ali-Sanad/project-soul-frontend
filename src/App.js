import { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//import sass
import './sass/main.scss';

// import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Article from './components/layout/articles/article';

import AdminDashboard from './components/adminDashboard/AdminDashboard';

// import AllRoutes from './components/routes/AllRoutes';

//state redux
import { Provider } from 'react-redux';
import store from './store';

import { setAuthToken, setTherapistAuthToken } from './utils/setAuthToken';
import { loadAdmin, loadUser } from './actions/auth';
import { LOGOUT, THERAPIST_LOGOUT } from './actions/types';
//state redux

import { loadTherapist } from './actions/therapistAuth';

//components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ConfirmUserAccount from './components/auth/ConfirmUserAccount/ConfirmUserAccount';
import AccountConfirmed from './components/auth/ConfirmUserAccount/AccountConfirmed';
import LoginTherapist from './components/auth/loginTherapist';
import RegisterThreapist from './components/auth/registerTherapist';
import Messenger from '../src/components/layout/messenger/messenger';
// import Video from "./components/video/video";

import ControlTherapistProfile from './components/controlTherpistProfile/ControlTherapistProfile';
//import CreateTherapistProfile from './components/therapistProfile-form/CreateTherapistProfile';
import ControlTherapistProfileActions from './components/controlTherpistProfile/ControlTherapistProfileActions';
import AddTherapistExperience from './components/therapistProfile-form/AddTherapistExperience';
import AddTherapistEducation from './components/therapistProfile-form/AddTherapistEducation';

import ForgotPassword from './components/auth/ConfirmUserAccount/ForgotPassword';
import ResetPassword from './components/auth/ConfirmUserAccount/ResetPassword';
import TherapistConfirmUserAccount from './components/auth/ConfirmTherapistAccount/ConfirmTherapistAccount';
import TherapistAccountConfirmed from './components/auth/ConfirmTherapistAccount/TherapistAccountConfirmed';
import TherapistForgotPassword from './components/auth/ConfirmTherapistAccount/TherapistForgotPassword';
import TherapistResetPassword from './components/auth/ConfirmTherapistAccount/TherapistResetPassword';
import TherapistDataForm from './components/therapistDataForm';

// import TherapistsList from './components/therapistsList/therapistList';
import Home from './components/landingpage/home';
import UserProfile from './components/user/UserProfile';
import Post from './components/posts/Post';

import Error from './components/shared/error';
import TherapistDashboard from './components/therapist/therapistdashboard';
// import Post from "./components/posts/Post";
import RegisterOptions from './components/auth/registeroptions';
import HeroSection from './components/landingpage/herosection';
import Works from './components/landingpage/works';
import Contact from './components/landingpage/contact';
<<<<<<< HEAD
import ReviewForm from "./components/reviews/createReveiw"
import Review from "./components/reviews/reviews"
=======
import TherapistList from './components/therapist/therapistlist';
>>>>>>> 020e023cb85503961dc81715c60e91bb77212233

const App = () => {
  useEffect(() => {
    console.log(store.getState().auth.isAdmin);
    //attach the token to every axios request ##USER
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    //attach the token to every axios request ##Therapist
    if (localStorage.therapistToken) {
      setTherapistAuthToken(localStorage.therapistToken);
    }

    //if user or admin logged in load his/her data
    if (store.getState().auth.token) {
      if (store.getState().auth.isAdmin) {
        store.dispatch(loadAdmin());
      } else {
        store.dispatch(loadUser());
      }
    }

    //if therapist logged in load his/her data
    if (store.getState().therapistAuth.therapistToken) {
      store.dispatch(loadTherapist());
    }

    //logout user or therapist from all tabes if he/she logged out from one tabe
    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        store.dispatch({ type: THERAPIST_LOGOUT });
        store.dispatch({ type: LOGOUT });
        store.dispatch({ type: LOGOUT });
      }
      if (!localStorage.therapistToken) {
        store.dispatch({ type: THERAPIST_LOGOUT });
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={HeroSection} />
          <Route path="/works" exact component={Works} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/registeroptions" exact component={RegisterOptions} />
          <Route path="/register" exact component={Register} />
          <Route path="/user-profile" exact component={UserProfile} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/posts" exact component={Post} />
          <Route path="/therapistlist" exact component={TherapistList} />

          <Route
            path="/therapistdashboard"
            exact
            component={TherapistDashboard}
          />

          <Route
            path="/pending-verification"
            exact
            component={ConfirmUserAccount}
          />
          <Route path="/user-email-confirmed" component={AccountConfirmed} />

          <Route path="/admin-dashboard/:id" exact component={AdminDashboard} />
          {/* <Route exact path="/video" component={Video} /> */}
          <Route
            exact
            path="/registertherapist"
            component={RegisterThreapist}
          />
          <Route exact path="/logintherapist" component={LoginTherapist} />
          <Route
            path="/therapist-forgot-password"
            exact
            component={TherapistForgotPassword}
          />
          <Route
            path="/therapist-reset-password/:id"
            exact
            component={TherapistResetPassword}
          />

          <Route
            path="/therapist-pending-verification"
            exact
            component={TherapistConfirmUserAccount}
          />
          <Route
            path="/therapist-email-confirmed"
            component={TherapistAccountConfirmed}
          />
          <Route
            path="/therapist-data-form/:id"
            component={TherapistDataForm}
          />
          {/* <Route
            path="/addreview"
            exact
            component={ReviewForm}
          />
            <Route
            path="/reviews"
            exact
            component={Review}
          /> */}

          <Route
            exact
            path="/controlTherapistProfile"
            component={ControlTherapistProfile}
          />
          {/* <Route
            exact
            path="/createTherapistProfile"
            component={CreateTherapistProfile}
          /> */}
          <Route
            exact
            path="/controlTherapistProfileActions"
            component={ControlTherapistProfileActions}
          />

          <Route
            exact
            path="/addTherapistExperience/:id"
            component={AddTherapistExperience}
          />

          <Route
            exact
            path="/addTherapistEducation/:id"
            component={AddTherapistEducation}
          />

          <Route exact path="/posts">
            <Post />
          </Route>
          <Route path="/messenger">
            <Messenger />
            {/* {!user ? <Redirect to="/" /> : <Messenger />} */}
          </Route>
          <Route path="/articles">
            <Article />
          </Route>
          {/* <Route path="/therapistslist">
            <TherapistsList />
          </Route> */}
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
