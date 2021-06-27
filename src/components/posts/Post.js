import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import HeroSectionPost from "./HeroSectionPost";
import PostForm from "./PostForm";
import ToTop from "../shared/totop";
import Message from "../shared/message";
import PostCard from "./PostList";
import SearchPost from "./SearchPost";
import { getPosts } from "../../actions/post";

//posts
const Post = ({ getPosts, auth: { user, isAuthenticated }, posts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <>
      <Navbar />
      <HeroSectionPost />
      <PostForm />
      <SearchPost />
      {user &&
        posts &&
        isAuthenticated &&
        posts.map((post) => <PostCard key={post._id} post={post} />)}
      <Message />
      <ToTop></ToTop>
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.post?.posts.filter((post) => post.isAccepted == "Accepted"),
    // state.post,
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {
  getPosts,
})(Post);
