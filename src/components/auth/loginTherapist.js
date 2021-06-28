import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { therapist_logout } from "../../actions/therapistAuth";

import { login } from "../../actions/therapistAuth";
import propTypes from "prop-types";
import loginImage from "./../../assets/images/login.png";
import logo from "./../../assets/images/logo.png";
import "../../index.css"; //tailwind import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { autofill } from "redux-form";
const useStyles = makeStyles({
  root: {
    margin: "auto",
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const LoginTherapist = ({
  login,
  isAuthenticated_therapist,
  therapist,
  therapist_logout,
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const { email, password } = formData;
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(formData);
    }
  };
  if (
    isAuthenticated_therapist &&
    therapist &&
    therapist?.isAccepted == "Pending"
  ) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => therapist_logout()}>
            Log Out
          </Button>
        </CardActions>
      </Card>
    );
  } else if (
    isAuthenticated_therapist &&
    therapist &&
    therapist?.isAccepted == "Rejected"
  ) {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => therapist_logout()}>
            Log Out
          </Button>
        </CardActions>
      </Card>
    );
  } else if (
    isAuthenticated_therapist &&
    therapist &&
    therapist?.isAccepted == "Accepted"
  ) {
    return <Redirect to={`/therapistlist/${therapist._id}`} />;
  }
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1  h-screen bg-soul_bg font-Nunito">
        <div className="">
          <div className="w-44 h-24 mx-auto">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <h4 className="text-4xl   text-center">Login</h4>
          <div className="flex justify-center mt-12 mb-12">
            <h2 className="text-2xl   inline-block mx-3 cursor-pointer ">
              {" "}
              <Link
                to="/login"
                className="text-black no-underline hover:text-soul-300  hover:underline"
              >
                User
              </Link>
            </h2>
            <h2 className="text-2xl inline-block mx-3 cursor-pointer ">
              <Link
                to="/logintherapist"
                className="text-black no-underline hover:text-soul-300
               hover:underline"
              >
                Therapist
              </Link>
            </h2>
          </div>
          <form className="mt-2" onSubmit={(e) => onSubmit(e)}>
            <div className=" mt-6 ">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none
                focus:ring-1 focus:to-soul focus:border-transparent 
            "
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="relative mx-auto  mt-6">
              <input
                className="block mx-auto mt-2  w-4/5 p-3 rounded-full
                border focus:outline-none 
                focus:ring-1 focus:to-soul focus:border-transparent 
             "
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={(e) => onChange(e)}
                required
              />
              <span
                className=" absolute text-md text-soul-300  cursor-pointer
                md:top-4 sm:right-16 md:right-14 lg:right-20   top-4   right-20"
                aria-hidden="true"
                onClick={() => togglePasswordVisiblity()}
              >
                {passwordShown ? "hide" : "show"}
              </span>
              <div className="grid grid-cols-2 lg:ml-20 md:ml-16 sm:ml-10 ml-16 ">
                <p className=" inline-block mt-6    cursor-pointer">
                  <Link
                    to="/therapist-forgot-password"
                    className=" text-black no-underline hover:text-soul-300"
                  >
                    Forgot password ?
                  </Link>
                </p>
                <p className=" inline-block mt-6   cursor-pointer">
                  <Link
                    to="/registertherapist"
                    className=" text-black no-underline hover:text-soul-300"
                  >
                    Don't have an account ?
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-8 sm:ml-2">
              <input
                type="submit"
                className=" block  bg-soul-100 hover:bg-soul-300  sm:ml-10 md:ml-16 ml-16  py-2 px-4 rounded-full
                outline-none
                shadow-sm cursor-pointer"
                value="Sign in"
              />
            </div>
          </form>
        </div>
        <div className=" h-screen sm:block hidden">
          <img src={loginImage} alt="" className="h-screen object-cover" />
        </div>
      </div>
    </>
  );
};
LoginTherapist.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated_therapist: propTypes.bool,
  therapist: propTypes.object,
};
const mapStateToProps = (state) => ({
  isAuthenticated_therapist: state.therapistAuth.isAuthenticated_therapist,
  therapist: state.therapistAuth.therapist,
});
export default connect(mapStateToProps, { login, therapist_logout })(
  LoginTherapist
);
