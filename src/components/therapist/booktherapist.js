import React from 'react'

import Navbar from '../shared/navbar'

import bookimg from '../../assets/images/booktherapist.png'

const BookTherapist = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='booktherapist'>
        <div className='container'>
          <h2 className='headers'> Book Therapist </h2>
          <div className='row'>
            <div className='col-6 booktherapist__form'>
              <form>
                <h5> Date </h5>
                <input type='text' className='input'></input>
                <div className='booktherapist__form__fromto'>
                  <div>
                    <h5> From </h5>
                    <input type='text' className='input'></input>
                  </div>
                  <div>
                    <h5> To </h5>
                    <input type='text' className='input'></input>
                  </div>
                </div>
                <h5> Diration </h5>
                <input type='text' className='input'></input>
                <h5> Fees </h5>
                <input type='text' className='input'></input>
                <button className='mainbtn'> Book Now </button>
              </form>
            </div>
            <div className='col-6 booktherapist__image'>
              <img src={bookimg} alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BookTherapist
