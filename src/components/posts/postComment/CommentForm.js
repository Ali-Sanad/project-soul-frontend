import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../../actions/post';
const CommentForm = ({ addComment, postId, auth: { isAuthenticated } }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };
  return (
    isAuthenticated && (
      <div className='post-form'>
      
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <input
          type="text"
            name='text'
            cols='30'
            rows='5'
            placeholder={`write your comment...`}
            value={text}
            onChange={(e) => onChange(e)}
            required
            className="inputstyle"
          />
          <input type='submit' className='mainbtn' value='comment' />
        </form>
      </div>
    )
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addComment })(CommentForm);
