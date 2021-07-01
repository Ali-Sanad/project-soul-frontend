import React, {Fragment} from 'react';
// import ImageHero from '../../assets/images/Group therapy-bro 1.png'
import {connect} from 'react-redux';
import {addLike, removeLike, deletePost} from '../../actions/post';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const PostCard = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {_id, text, user, name, postImage, likes, comments, date},
  showActions,
}) => {
  return (
    <>
      <div className='postCard'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 postCard__main'>
              <div className='card postCard__card'>
                <img
                  src={postImage}
                  className='card-img-top postCard__image'
                  alt=''
                />
                <div className='card-body'>
                  {/* <h5 className='card-title'>{post.category}</h5> */}
                  <p className='card-text'>{text}</p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      <Moment format='YYYY/MM/DD'>{date}</Moment>
                    </small>
                  </p>
                </div>
                {showActions && (
                  <Fragment>
                    <div className='postCard__actions'>
                      <div>
                        <button
                          onClick={() =>
                            auth.user &&
                            auth.isAuthenticated &&
                            (likes.filter((like) => like.user === auth.user._id)
                              .length > 0
                              ? removeLike(_id)
                              : addLike(_id))
                          }
                          type='button'
                          className='btn'
                        >
                          <i className='fas fa-thumbs-up' />{' '}
                          <span>
                            {likes.length > 0 && <span>{likes.length}</span>}
                          </span>
                        </button>
                      </div>

                      <div>
                        <Link to={`/posts/${_id}`} className='btn'>
                          <i className='fas fa-comment' />
                          {comments.length > 0 && (
                            <span className='comment-count'>
                              {comments.length}
                            </span>
                          )}
                        </Link>
                      </div>
                      <div>
                        {user === auth.user._id && (
                          <button
                            onClick={() => deletePost(_id)}
                            type='button'
                            className='btn'
                          >
                            <i className='fas fa-times' />
                          </button>
                        )}
                      </div>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PostCard.defaultProps = {
  showActions: true,
};
PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  // showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
})(PostCard);
