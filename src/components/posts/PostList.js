import React from 'react';
import ImageHero from '../../assets/images/Group therapy-bro 1.png';

const PostCard = () => {
  return (
    <>
      <div className='postCard'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='card mb-3 postCard__card'>
                <img
                  src={ImageHero}
                  className='card-img-top postCard__image'
                  alt=''
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;