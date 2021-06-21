import React from 'react';
import Footer from '../shared/footer';
import Navbar from '../shared/navbar';
import HeroSectionPost from './HeroSectionPost';
import PostForm from './PostForm';
const Post = () => {
  return (
    <>
      <Navbar />
      <HeroSectionPost />
      <PostForm />
      <Footer />
    </>
  );
};

export default Post;
