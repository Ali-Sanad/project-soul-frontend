import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Footer from '../shared/footer';
import Navbar from '../shared/navbar';
import HeroSectionPost from './HeroSectionPost';
import PostForm from './PostForm';
import ToTop from '../shared/totop';
import Message from '../shared/message';
import PostCard from './PostList';
import SearchPost from './SearchPost';
import {getPosts} from '../../actions/post';
import Spinner from './Spinner';

//posts
const Post = ({getPosts, auth: {user, isAuthenticated}, posts}) => {
  const [filteredPosts, setfilteredPosts] = useState(posts);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    setfilteredPosts(posts);
  }, [posts]);
  return (
    <>
      <Navbar />
      <HeroSectionPost />
      <PostForm />
      <SearchPost setfilteredPosts={setfilteredPosts} postList={posts} />
      {user && posts && isAuthenticated ? (
        filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <Spinner />
      )}

      <Message />
      <ToTop></ToTop>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.post?.posts.filter((post) => post.isAccepted === 'Accepted'),
    // state.post,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  getPosts,
})(Post);
