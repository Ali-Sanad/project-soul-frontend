import React, { useState } from 'react'

const Totop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      duration: 500,
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <React.Fragment>
      <div
        className='totop'
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      >
        <div className='totop__arrow'>
          <i className='fas fa-chevron-up'></i>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Totop
