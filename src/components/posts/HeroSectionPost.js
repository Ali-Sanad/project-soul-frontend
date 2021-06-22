import React from 'react';
import ImageHero from '../../assets/images/Group therapy-bro 1.png';
const HeroSectionPost = () => {
  return (
    <>
      <div className='container'>
        <div className='heroSection__post'>
          <div className='heroSection_post_text'>
            <h2>Explore Our Community</h2>
            <p>feel free to share your ideas.</p>
            <a href='#postScroll'>Explore</a>
          </div>
          <div className='heroSection_post_image'>
            <img className='heroSection_postimage_img' src={ImageHero} />
          </div>
        </div>
        <div className='Posts__header'>
          <span id='postScroll'>Blogs</span>
        </div>
      </div>
    </>
  );
};

export default HeroSectionPost;
