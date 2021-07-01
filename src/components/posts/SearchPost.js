import React, {useState, useEffect} from 'react';
import ImageSearch from '../../assets/images/icons8_Search_4 3.png';
import {getPosts} from '../../actions/post';
import {connect} from 'react-redux';

const SearchPost = ({
  getPosts,
  auth: {user, isAuthenticated},
  post: {posts, loading},
  setfilteredPosts,
  postList,
}) => {
  const [searchValue, setSearch] = useState('');
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);

    let searchPosts;
    if (e.target.value === '' && !loading) {
      searchPosts = postList;
    } else if (!loading) {
      searchPosts =
        !loading &&
        postList.filter((post) => {
          return post.text.toLowerCase().includes(e.target.value.toLowerCase());
        });
    }

    return setfilteredPosts(searchPosts);
  };
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
                onChange={(e) => handleInputChange(e)}
                required
              />
              <span>
                <img
                  src={ImageSearch}
                  className='postForm__imageSearch'
                  alt=''
                />
              </span>
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
