import { useEffect } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

//import sass
import './sass/main.scss';

import Alert from './components/layout/Alert';
import Article from './components/layout/articles/article';

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
import MessengerUser from './components/layout/chatUser/messenger';
import MessengerTherapist from './components/layout/chatTherapist/messenger';
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

import Home from './components/landingpage/home';
import About from './components/landingpage/about';
import UserProfile from './components/user/UserProfile';
import UserAppointments from './components/user/userAppointments';

import Post from './components/posts/Post';
import PostItem from './components/posts/postComment/PostItem';
import Error from './components/shared/error';
import TherapistDashboard from './components/therapist/therapistdashboard';
// import Post from "./components/posts/Post";
import RegisterOptions from './components/auth/registeroptions';
import Works from './components/landingpage/works';
import Contact from './components/landingpage/contact';

import TherapistList from './components/therapist/therapistlist';
import SingleArticle from './components/layout/articles/singleArticle';

//admin
// import AdminSideNav from "./components/admin/adminsidenav";
import AdminDashboard from './components/admin/admindashboard';
import AdminTherapistCard from './components/admin/admintherapistcard';
import AdminPostCard from './components/admin/adminpostcard';
import TherapistPending from './components/auth/therapist-pending';
import TherapistRejected from './components/auth/therapist-rejected';

// import NavBar from "./components/shared/navbar";

const App = () => {
  useEffect(() => {
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
        {/* <HashRouter> */}
        {/* <NavBar></NavBar> */}
        <Alert />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/about" exact component={HeroSection} /> */}
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
          <Route path="/posts/:id" exact component={PostItem} />
          <Route exact path="/post-card" component={AdminPostCard} />

          <Route path="/admindashboard" exact component={AdminDashboard} />

          <Route
            path="/therapistlist/:id/:content"
            exact
            component={TherapistDashboard}
          />

          {/* <Route
            path='/therapistdashboard'
            exact
            component={TherapistDashboard}
          />
          <Route
            path='/therapistdashboard/:id'
            exact
            component={TherapistDashboard}
          /> */}
          <Route
            path="/pending-verification"
            exact
            component={ConfirmUserAccount}
          />
          <Route path="/user-email-confirmed" component={AccountConfirmed} />
          <Route path="/admin-dashboard" exact component={AdminDashboard} />
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
          <Route exact path="/userAppointments" component={UserAppointments} />

          <Route path="/messenger-user" component={MessengerUser} />
          {/* <MessengerUser /> */}
          {/* </Route> */}
          <Route path="/messenger-therapist" component={MessengerTherapist} />
          {/* <MessengerTherapist /> */}
          {/* {!user ? <Redirect to="/" /> : <Messenger />} */}
          {/* </Route> */}
          <Route path="/articles" component={Article} />
          {/* <Article />
          </Route> */}
          <Route path="/article/:id" component={SingleArticle} />
          {/* <SingleArticle />
          </Route> */}
          <Route exact path="/therapist-card" component={AdminTherapistCard} />
          <Route exact path="/therapistpending" component={TherapistPending} />
          <Route
            exact
            path="/therapistrejected"
            component={TherapistRejected}
          />

          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
      {/* </HashRouter> */}
    </Provider>
  );
};

export default App;
