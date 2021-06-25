import React from 'react'

import postImage from './../../assets/images/article.png'

const AdminPostCard = () => {
  return (
    <React.Fragment>
      <div className='adminpostcard'>
        <div className='postCard'>
          <div className='card mb-3 postCard__card'>
            <img
              src={postImage}
              className='card-img-top postCard__image'
              alt=''
            />
            <div className='card-body'>
              <p className='card-text'>menaaaaaaaaaa</p>
              <p className='card-text'>
                <small className='text-muted'>15-10-2021</small>
              </p>
            </div>
            <hr></hr>
          <div className='adminpostcard__btns'>
            <button className='mainbtn adminpostcard__verifybtn'>
              Accept
            </button>
            <button className='mainbtn adminpostcard__rejectbtn'>
              Reject
            </button>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminPostCard
