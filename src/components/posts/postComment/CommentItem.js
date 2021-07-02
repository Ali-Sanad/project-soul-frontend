import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment,
}) => (
  <div className="post">
    {!auth.loading && user === auth.user._id && (
      <button
        onClick={() => deleteComment(postId, _id)}
        type="button"
        className="post__delete"
      >
        <i className="fas fa-times" />
      </button>
    )}
    <div>
      {/* <Link to={`/profile/${user}`}> */}
      <Link to="" className="post__link">
        <h5 className="post__name">{name}</h5>
      </Link>
    </div>
    <div>
      <p className="post__date">
        {" "}
        <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
      <p className="post__text">{text}</p>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
