import React,{useEffect} from 'react'
import WOW from 'wowjs'

const Contact = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init()
  })

  return (
    <>
      <div className='contact' id='contact'>
        <div className='container'>
          <div className='contact__header'>
            <h2 className='headers'>Contact Us</h2>
          </div>
          <div className='row'>
            <div
              className='col-6 contact__form wow fadeInLeft'
              data-wow-duration='1s'
              data-wow-delay='.1s'
            >
              <form>
                <input
                  type='text'
                  className='input'
                  placeholder='Subject'
                ></input>
                <textarea
                  rows='7'
                  className='input'
                  placeholder='Leave your message here...'
                ></textarea>
                <button className='mainbtn'>Contact Us</button>
              </form>
            </div>
            <div
              className='col-6 contact__image wow fadeInRight'
              data-wow-duration='1s'
              data-wow-delay='.5s'
            >
              <img src='./images/contact.png' alt=''></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
