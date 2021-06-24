import React from 'react';

import pdfimg from '../../assets/images/iconpdf.png';
import downloadimg from '../../assets/images/icondownload.png';
import deleteimg from '../../assets/images/icondelete.png';

const TherapistFiles = () => {
  return (
    <React.Fragment>
      <div className='therapistfiles'>
        <div className='container'>
          <h2 className='headers'>Files</h2>
          {/* cv */}
          <p className='titlestyle'>CV</p>
          <p className='inputstyle'>
            <img src={pdfimg} className='therapistfiles__pdf' alt=''></img>
            <span>cv.pdf</span>
          </p>
          <div className='therapistfiles__icon'>
            <img
              src={downloadimg}
              className='therapistfiles__download'
              alt=''
            ></img>
            <img
              src={deleteimg}
              className='therapistfiles__delete'
              alt=''
            ></img>
          </div>
          {/* certified */}
          <p className='titlestyle'>Certified</p>
          <p className='inputstyle'>
            <img src={pdfimg} className='therapistfiles__pdf' alt=''></img>
            <span>c1.pdf</span>
          </p>
          <div className='therapistfiles__icon'>
            <img
              src={downloadimg}
              className='therapistfiles__download'
              alt=''
            ></img>
            <img
              src={deleteimg}
              className='therapistfiles__delete'
              alt=''
            ></img>
          </div>

          <button className='buttonadd'>+</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TherapistFiles;
