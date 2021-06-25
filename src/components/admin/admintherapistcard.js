import React from 'react'

const AdminTherapistCard = () => {
  return (
    <React.Fragment>
      <div className='admintherapistcard'>
        <div className='container'>
          {/* Personal Information */}

          <h5 className='headers'>Personal Information</h5>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>
                First Name: <span>Menna</span>
              </p>
              <p>
                Email: <span>menna@gmail.com</span>
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <p>
                Last Name: <span>Omar</span>
              </p>
              <p>
                Date Of Birth: <span>15-10-1996</span>
              </p>
            </div>
          </div>
          <hr></hr>
          {/* Education */}
          <h5 className='headers'>Education</h5>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>
                Soecialist: <span>Menna</span>
              </p>
              <p>
                Prefix: <span>menna@gmail.com</span>
              </p>
              <p>
                Licenec: <span>Menna</span>
              </p>
              <p>
                Summary: <span>menna@gmail.com</span>
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <p>
                Main Focus: <span>Omar</span>
              </p>
              <p>
                Licence No.: <span>15-10-1996</span>
              </p>
            </div>
          </div>
          <hr></hr>

          {/* Social Links */}
          <h5 className='headers'>Social Links</h5>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p>
                Facebook: <span>Menna</span>
              </p>
              <p>
                Twitter: <span>menna@gmail.com</span>
              </p>
              <p>
                Instagram: <span>Menna</span>
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <p>
                Linkedin: <span>menna</span>
              </p>
              <p>
                Youtube: <span>menna</span>
              </p>
            </div>
          </div>

          <div className='admintherapistcard__btns'>
            <button className='mainbtn admintherapistcard__verifybtn'>
              Verify
            </button>
            <button className='mainbtn admintherapistcard__rejectbtn'>
              Reject
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminTherapistCard
