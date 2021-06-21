import { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//import sass
import "./sass/main.scss";

// import Navbar from './components/layout/Navbar';
import Alert from "./components/layout/Alert";
import Article from "./components/layout/articles/article";

import AdminDashboard from "./components/adminDashboard/AdminDashboard";

// import AllRoutes from './components/routes/AllRoutes';
import { LOGOUT, THERAPIST_LOGOUT } from "./actions/types";
//state redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { loadTherapist } from "./actions/therapistAuth";
//components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ConfirmUserAccount from "./components/auth/ConfirmUserAccount/ConfirmUserAccount";
import AccountConfirmed from "./components/auth/ConfirmUserAccount/AccountConfirmed";
import LoginTherapist from "./components/auth/loginTherapist";
import RegisterThreapist from "./components/auth/registerTherapist";
import Messenger from "../src/components/layout/messenger/messenger";
// import Video from "./components/video/video";
import ForgotPassword from "./components/auth/ConfirmUserAccount/ForgotPassword";
import ResetPassword from "./components/auth/ConfirmUserAccount/ResetPassword";
import TherapistConfirmUserAccount from "./components/auth/ConfirmTherapistAccount/ConfirmTherapistAccount";
import TherapistAccountConfirmed from "./components/auth/ConfirmTherapistAccount/TherapistAccountConfirmed";
import TherapistForgotPassword from "./components/auth/ConfirmTherapistAccount/TherapistForgotPassword";
import TherapistResetPassword from "./components/auth/ConfirmTherapistAccount/TherapistResetPassword";
import TherapistDataForm from "./components/therapistDataForm";
import Home from "./components/landingpage/home";
import UserProfile from "./components/user/UserProfile";
import Error from "./components/shared/error";

const App = () => {
  useEffect(() => {
    //attach the token to every axios request
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadTherapist());
    store.dispatch(loadUser());

    //logout user from all tabes if he logged out from one tabe
    window.addEventListener("storage", () => {
      if (!localStorage.token) {
        store.dispatch({ type: THERAPIST_LOGOUT });
        store.dispatch({ type: LOGOUT });
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
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/user-profile" exact component={UserProfile} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/reset-password/:id" exact component={ResetPassword} />

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

          <Route path="/messenger">
            <Messenger />
            {/* {!user ? <Redirect to="/" /> : <Messenger />} */}
          </Route>
          <Route path="/articles">
            <Article />
          </Route>
          <Route path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
