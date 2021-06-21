import React from 'react';
import ImageSent from '../../assets/images/icons8_Sent 1.png';
import ImageUpload from '../../assets/images/icons8_Google_Images 2.png';
const PostForm = () => {
  return (
    <>
      <div className='postForm'>
        <div className='container'>
          <div className='row'>
            <input
              type='text'
              placeholder='What do you think about?'
              className='postForm__input'
            />
            <img src={ImageSent} className='postForm__imageSent' />
            <img src={ImageUpload} className='postForm__imageUpload' />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
