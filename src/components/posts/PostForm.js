import React from 'react';
import ImageSent from '../../assets/images/icons8_Sent 1.png';
import ImageUpload from '../../assets/images/surface1.png';
import ImageSearch from '../../assets/images/icons8_Search_4 3.png';

const PostForm = () => {
  const myFunction = (e) => {
    document.querySelector('myDropdown').classList.toggle('show');
  };

  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
  return (
    <>
      <div className='postForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 postForm__form'>
              <input
                type='text'
                placeholder='What do you think about?'
                className='postForm__input'
              />
              <a>
                <img src={ImageUpload} className='postForm__imageUpload' />
              </a>
              <a>
                <img src={ImageSent} className='postForm__imageSent' />
              </a>
            </div>
            <div className='col-lg-12 postForm__inputs'>
              <div className='dropdown'>
                <button onclick={(e) => myFunction(e)} className='dropbtn'>
                  Dropdown
                </button>
                <div className='myDropdown dropdown-content'>
                  <a href='#'>Link 1</a>
                  <a href='#'>Link 2</a>
                  <a href='#'>Link 3</a>
                </div>
              </div>
              <input
                type='text'
                placeholder='Search'
                className='postForm__inputs__search'
              />
              <a>
                <img src={ImageSearch} className='postForm__imageSearch' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
