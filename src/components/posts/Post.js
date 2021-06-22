import React from 'react';

import Footer from '../shared/footer';
import Navbar from '../shared/navbar';
import HeroSectionPost from './HeroSectionPost';
import PostForm from './PostForm';
import ToTop from '../shared/totop';
import Message from '../shared/message';
import PostCard from './PostList';
//posts
const Post = () => {
  return (
    <>
      <Navbar />
      <HeroSectionPost />
      <PostForm />
      <PostCard />
      <Message />
      <ToTop></ToTop>
      <Footer />
    </>
  );
};

export default Post;