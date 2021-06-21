import React from 'react';
import ImageHero from '../../assets/images/Group therapy-bro 1 (1).png';
const HeroSectionPost = () => {
  return (
    <>
      <div className='container'>
        <div className='heroSection__post'>
          <div className='heroSection__post__text'>
            <h2>Explore Our Community</h2>
            <p>feel free to share your ideas.</p>
            <a href='#postScroll'>Explore</a>
          </div>
          <div className='heroSection__post__image'>
            <img className='heroSection__post__image__img' src={ImageHero} />
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
