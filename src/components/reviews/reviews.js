
import { useEffect } from "react";
import { connect } from "react-redux";
import { getReviews, deleteReview } from "../../actions/review"

//article
const Review = ({
  getReviews,
  review,
  id,
  deleteReview,
  auth

}) => {
  // console.log("userId", myId);
  console.log("iddddd", id)

  useEffect(() => {

    getReviews(id);
  });

  console.log("review", review);
  const handleDelete = (id, reviewId) => {
    deleteReview(id, reviewId);
  }
  const handleUpdate = (id, reviewId) => {
    deleteReview(id, reviewId);
  }
  return (
    <>
      {
        review.reviews.map((review) =>
          <div key={review._id}>
            <h1>{review.user._id}</h1>
            {auth.isAuthenticated && (auth.user._id === review.user._id) &&
              <button onClick={() => handleDelete(id, review._id)}>Delete</button>}
          </div>

        )
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  review: state.review,
  auth: state.auth,


});

export default connect(mapStateToProps, {
  getReviews, deleteReview
})(Review);
