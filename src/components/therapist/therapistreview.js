import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";

import ReviewForm from "./createReview";
import { deleteReview } from "../../actions/therapists";
import Moment from "react-moment";

const TherapistReview = ({
  isAuth,
  id,
  review,
  deleteReview,
  auth,

  therapist,
}) => {
  const handleDelete = (id, reviewId) => {
    deleteReview(id, reviewId);
  };

  return (
    <React.Fragment>
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
                  {isAuth &&
                    therapist?.appointments.some(
                      (app) => app.booking?.user?._id === auth?.user?._id
                    ) && <ReviewForm id={id} />}
                </div>
              </div>
            </div>
            {/* all reviews */}
            {review && review.length > 0 && (
              <h4 className="headers">All Reviews</h4>
            )}
            {review &&
              review.map((review, i) => (
                <div className="therapistreview__allreview" key={review._id}>
                  <div className="therapistreview__allreview__header">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating
                        name="read-only"
                        value={review?.rating}
                        readOnly
                      />
                    </Box>
                    <span>
                      {" "}
                      <Moment format="YYYY/MM/DD">{review?.createdAt}</Moment>
                    </span>
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
  deleteReview,
})(TherapistReview);
