import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

import userimg from "../../assets/images/user.png";
import ReviewForm from "./createReview";
import { useEffect } from "react";
import { getReviews, deleteReview } from "../../actions/therapists";

// import { getTherapist } from '../../actions/therapist'

const TherapistReview = ({
  isAuth,
  id,
  //getReviews,
  review,
  deleteReview,
  auth,

  therapist,
}) => {
  console.log("isAuth", isAuth);
  console.log("the", therapist);

  // useEffect(() => {
  //   // getTherapist(id)
  //   // getReviews(id);
  // }, [review]);

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
      {console.log(therapist)}
      {therapist && (
        <div className="therapistreview">
          <div className="container">
            <h2 className="headers">Reviews</h2>
            {/* review form */}
            <div className="therapistreview__data">
              <div className="row">
                <div className="col-12 col-md-6">
                  <img
                    src={therapist?.therapistImg}
                    alt=""
                    className="therapistreview__userimg"
                  ></img>

                  <h6>
                    {therapist?.fname} {therapist?.lname}
                  </h6>
                  <div className="therapistreview__rate">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        name="read-only"
                        value={therapist?.ratingsAverage ?? 0}
                        readOnly
                      />
                    </Box>
                    <p>{therapist?.ratingsQunatity ?? 0} Total Reviews</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {isAuth && <ReviewForm id={id} />}
                </div>
              </div>
            </div>
            {/* all reviews */}
            {review && review.length > 0 && (
              <h4 className="headers">All Reviews</h4>
            )}
            {review &&
              review.map((review) => (
                <div className="therapistreview__allreview" key="review._id">
                  <div className="therapistreview__allreview__header">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        name="read-only"
                        value={review?.rating}
                        readOnly
                      />
                    </Box>
                    <span>{review?.createdAt}</span>
                    {/* {review._id} */}
                  </div>
                  <div className="therapistreview__allreview__body">
                    <p>{review?.review}</p>
                  </div>

                  {/* <h5>{review.user.name}</h5> */}
                  {auth.isAuthenticated &&
                    auth.user._id === review.user._id && (
                      <button onClick={() => handleDelete(id, review._id)}>
                        Delete
                      </button>
                    )}
                </div>
              ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  review: state.therapists?.oneTherapist?.reviews,
  auth: state.auth,
  therapist: state.therapists?.oneTherapist,
});

export default connect(mapStateToProps, {
  // getTherapist,
  //getReviews,
  deleteReview,
})(TherapistReview);
