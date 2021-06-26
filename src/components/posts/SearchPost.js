import React, { useState, useEffect } from 'react';
import ImageSearch from '../../assets/images/icons8_Search_4 3.png';
import { Dropdown } from 'react-bootstrap';
import { getPosts } from '../../actions/post';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import PostCard from './PostList';

const SearchPost = ({
  getPosts,
  auth: { user, isAuthenticated },
  post: { posts, loading },
}) => {
  const [searchValue, setSearch] = useState('');
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  let searchPosts = !loading ? (
    posts
      .filter((post) => {
        if (searchValue == '') {
          return post;
        } else if (
          post.text.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return post;
        }
      })
      .map((post) => {
        <PostCard key={post._id} post={post} />;
      })
  ) : (
    <Spinner />
  );
  return (
    <>
      <div className='postForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 postForm__inputs'>
              {/* <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <input
                type='text'
                placeholder='Search'
                className='postForm__inputs__search inputstyle'
                value={searchValue}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <a>
                <img src={ImageSearch} className='postForm__imageSearch' />
              </a>
              {searchPosts}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    post: state.post,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  getPosts,
})(SearchPost);
