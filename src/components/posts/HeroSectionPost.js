import React from 'react';
import ImageHero from '../../assets/images/Group therapy-bro 1.png';
const HeroSectionPost = () => {
  return (
    <>
      <div className='heroSection__post'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 heroSection__post__text'>
              <h2>Explore Our Community</h2>
              <p>feel free to share your ideas.</p>
              <a href='#postScroll' className='mainbtn linkstyle'>
                Explore
              </a>
            </div>
            <div className='col-12 col-md-6 heroSection__post__image'>
              <img
                className='heroSection__postimage__img'
                src={ImageHero}
                alt=''
              />
            </div>
            <div className='col-12 heroSection__post__blogs'>
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionPost;
