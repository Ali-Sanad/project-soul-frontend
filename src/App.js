import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Navbar from './components/layout/Navbar';
import LandingPage from "./components/layout/LandingPage";
import Alert from "./components/layout/Alert";

// import AllRoutes from './components/routes/AllRoutes';
import { LOGOUT } from "./actions/types";
//state redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
//components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import LoginTherapist from "./components/auth/loginTherapist";
import RegisterThreapist from "./components/auth/registerTherapist";

const App = () => {
  useEffect(() => {
    //attach the token to every axios request
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadUser());

    //logout user from all tabes if he logged out from one tabe
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Alert />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route exact path="/logintherapist" component={LoginTherapist} />

          <Route
            exact
            path="/registertherapist"
            component={RegisterThreapist}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
