import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

function AlertUI(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = ({alerts}) => {
  const classes = useStyles();

  return (
    <>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div className={classes.root} key={alert.id}>
            <Snackbar
              open={true}
              autoHideDuration={alert.timeout}
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            >
              <AlertUI key={alert.id} severity={alert.alertType}>
                {alert.msg}
              </AlertUI>
            </Snackbar>
          </div>
        ))}
    </>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alert,
  };
};

export default connect(mapStateToProps)(Alert);
