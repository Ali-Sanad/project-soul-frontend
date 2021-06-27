import React from "react";
import { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../actions/post";
import { updatePost } from "../../actions/post";
const AdminShowWaitingTherapists = ({
  getPosts,
  updatePost,
  posts,
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("postsssss", posts);
  return (
    <>
      {posts &&
        posts.map((p) => (
          <div key={p._id}>
            <p>{p?.text}</p>
           
            <button
              className="btn "
              onClick={() => {
                updatePost({ isAccepted: true }, p?._id);
                getPosts();
              }}
            >
              Approve
            </button>
            <Link className="btn" to={`/post-card/${p?._id}`}>
              more Details
            </Link>
          </div>
        ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  state: state,
  //  oneTherapist: state.oneTherapist,
  posts: state.post?.posts.filter(
    (post) => post.isAccepted == false
  ),
  // therapist: state.therapistAuth,
});
export default connect(mapStateToProps, {
  getPosts,
  updatePost,
})(AdminShowWaitingTherapists);
