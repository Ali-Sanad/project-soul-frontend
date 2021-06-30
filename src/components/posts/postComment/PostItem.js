import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Spinner from "../Spinner";
import PostCard from "../PostList";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import { getPost } from "../../../actions/post";
import Navbar from "../../shared/navbar";
import HeroSectionPost from "../HeroSectionPost";
import Message from "../../shared/message";
import Totop from "../../shared/totop";
const PostItem = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <HeroSectionPost />
      {console.log(post)}
      <PostCard post={post} showActions={false} />

      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
      <Message />
      <Totop />
      {/* <Footer /> */}
    </Fragment>
  );
};

PostItem.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(PostItem);
