import React, { useState } from "react";
import { connect } from "react-redux";

import { addReview } from "../../actions/therapists";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
const ReviewForm = ({ addReview, id }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: "",
  });

  const { rating, review } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    addReview(formData, id);
    setFormData({ rating: 0, review: "" });
  };

  return (
    <>
      <h5>Add Your Review</h5>
      <form onSubmit={(e) => onSubmit(e)}>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="rating" value={rating} onChange={(e) => onChange(e)} />
        </Box>
        <textarea
          rows="3"
          className="input"
          name="review"
          value={review}
          onChange={(e) => onChange(e)}
          placeholder="Add your review here..."
        ></textarea>
        <button className="mainbtn">Add Review</button>
      </form>
    </>
  );
};

export default connect(null, {
  addReview,
})(ReviewForm);
