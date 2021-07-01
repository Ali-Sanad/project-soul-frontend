import React, { useEffect } from 'react'
import WOW from 'wowjs'

const HeroSection = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init()
  })

  return (
    <>
      <div className='herosection'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 herosection__data'>
              <h4 className='wow fadeInDown'>
                Talk to your therapist online privately anytime anywhere !
              </h4>
              <button className='mainbtn'>Get Started</button>
            </div>
            <div className='col-12 col-md-6 herosection__image wow fadeInRight' data-wow-duration="1s"  data-wow-delay="1s">
              <img src='./images/herosection.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
