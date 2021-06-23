import React, { useEffect, Fragment } from 'react';
import ImageHero from '../../assets/images/Group therapy-bro 1.png';
import { connect } from 'react-redux';
import { getPosts, addLike, removeLike, deletePost } from '../../actions/post';
import Spinner from './Spinner';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PostCard = ({
  getPosts,
  addLike,
  removeLike,
  deletePost,
  auth,
  auth: { user, isAuthenticated },
  post: { posts, loading },
  showActions,
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className='postCard'>
        <div className='container'>
          <div className='row'>
            {console.log(posts)}
            {user &&
              isAuthenticated &&
              posts.map((post) => (
                <div className='col-lg-12'>
                  <div className='card mb-3 postCard__card' key={post.id}>
                    <img
                      src=''
                      className='card-img-top postCard__image'
                      alt=''
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{post.category}</h5>
                      <p className='card-text'>{post.text}</p>
                      <p className='card-text'>
                        <small className='text-muted'>
                          <Moment format='YYYY/MM/DD'>{post.date}</Moment>
                        </small>
                      </p>
                    </div>
                    {showActions && (
                      <Fragment>
                        <button
                          onClick={() =>
                            user &&
                            isAuthenticated &&
                            (post.likes.filter((like) => like.user === user._id)
                              .length > 0
                              ? removeLike(post._id)
                              : addLike(post._id))
                          }
                          type='button'
                          className='btn btn-light'
                        >
                          <i className='fas fa-thumbs-up' />{' '}
                          <span>
                            {post.likes.length > 0 && (
                              <span>{post.likes.length}</span>
                            )}
                          </span>
                        </button>

                        <Link
                          to={`/posts/${post._id}`}
                          className='btn btn-primary'
                        >
                          Discussion{' '}
                          {post.comments.length > 0 && (
                            <span className='comment-count'>
                              {post.comments.length}
                            </span>
                          )}
                        </Link>
                        {!auth.loading && user === auth.user._id && (
                          <button
                            onClick={() => deletePost(post._id)}
                            type='button'
                            className='btn btn-danger'
                          >
                            <i className='fas fa-times' />
                          </button>
                        )}
                      </Fragment>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

PostCard.defaultProps = {
  showActions: true,
};
const mapStateToProps = (state) => {
  return {
    post: state.post,
    auth: state.auth,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
  };
};
export default connect(mapStateToProps, {
  getPosts,
  addLike,
  removeLike,
  deletePost,
})(PostCard);
