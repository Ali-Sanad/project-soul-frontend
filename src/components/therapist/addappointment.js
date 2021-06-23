import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import bookimg from '../../assets/images/booktherapist.png'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

const AddAppointment = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className='addappointment'>
        <div className='container'>
          <h4 className='headers'> Add Appointment </h4>
          <div className='row'>
            <div className='col-12 col-md-6 addappointment__form'>
              <form>
                <h6> Date </h6>
                {/* <input type='text' className='input'></input> */}
                <TextField
                  id='date'
                  type='date'
                  defaultValue='2021-10-16'
                  className='input'
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <div className='addappointment__form__fromto'>
                  <div>
                    <h6> From </h6>
                    <input type='text' className='input'></input>
                  </div>
                  <div>
                    <h6> To </h6>
                    <input type='text' className='input'></input>
                  </div>
                </div>
                <h6> Duration </h6>
                <input type='text' className='input'></input>
                <h5> Fees </h5>
                <input type='text' className='input'></input>
                <button className='mainbtn'> Add Appointment </button>
              </form>
            </div>
            <div className='col-12 col-md-6 addappointment__image'>
              <img src={bookimg} alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddAppointment
