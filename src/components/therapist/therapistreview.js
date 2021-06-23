import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

import userimg from "../../assets/images/user.png";
import ReviewForm from "./createReview";
import { useEffect } from "react";
import { getReviews, deleteReview } from "../../actions/review";
//import { getTherapist } from "../../actions/therapists";

const TherapistReview = ({
  isAuth,
  id,
  getReviews,
  review,
  deleteReview,
  auth,
  therapist,
}) => {
  console.log("isAuth", isAuth);
  console.log("the", therapist);

  useEffect(() => {
    //getTherapist(id);
    getReviews(id);
  }, []);

  console.log("review", review);
  // console.log("therapist in ", therapist);

  const handleDelete = (id, reviewId) => {
    deleteReview(id, reviewId);
  };
  //   const handleUpdate = (id, reviewId) => {
  //     deleteReview(id, reviewId);
  //   }
  return (
    <React.Fragment>
      <div className="therapistreview">
        <div className="container">
          <h2 className="headers">Reviews</h2>
          {/* review form */}
          <div className="therapistreview__data">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={userimg}
                  alt=""
                  className="therapistreview__userimg"
                ></img>
                <h6>
                  {therapist.therapist.fname} {therapist.therapist.lname}
                </h6>
                <div className="therapistreview__rate">
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name="read-only"
                      value={therapist.therapist.ratingsAverage ?? 0}
                      readOnly
                    />
                  </Box>
                  <p>
                    {therapist.therapist.ratingsQunatity ?? 0} Total Reviews
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {isAuth && <ReviewForm id={id} />}
              </div>
            </div>
          </div>
          {/* all reviews */}
          {review.reviews.length > 0 && (
            <h4 className="headers">All Reviews</h4>
          )}
          {review.reviews.map((review) => (
            <div className="therapistreview__allreview" key="review._id">
              <div className="therapistreview__allreview__header">
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating name="read-only" value={review.rating} readOnly />
                </Box>
                <span>{review.createdAt}</span>
                {/* {review._id} */}
              </div>
              <div className="therapistreview__allreview__body">
                <p>{review.review}</p>
              </div>

              <h5>{review.user.name}</h5>
              {auth.isAuthenticated && auth.user._id === review.user._id && (
                <button onClick={() => handleDelete(id, review._id)}>
                  Delete
                </button>
              )}
            </div>
          ))}
          {/* <div className="therapistreview__allreview">
						<div className="therapistreview__allreview__header">
							<Box component="fieldset" mb={3} borderColor="transparent">
								<Rating name="read-only" value={3} readOnly />
							</Box>
							<p>15-10-2021</p>
						</div>
						<div className="therapistreview__allreview__body">
							<p>
								Just like any muscle, your personality requires strengthening and your heart, mind and
								soul deserve specialized care. With Shezlong, you’ll get personalized treatment from a
								prescriber trained in mental health care.
							</p>
						</div>
					</div> */}
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  review: state.review,
  auth: state.auth,
  therapist: state.therapist,
});
export default connect(mapStateToProps, {
  // getTherapist,
  getReviews,
  deleteReview,
})(TherapistReview);
