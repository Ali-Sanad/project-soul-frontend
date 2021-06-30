import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { paymentBookingAction } from "../actions/auth";
import { newConversation } from "../actions/chat";
const Payment = ({
  paymentBookingAction,
  price,
  appointmentId,
  therapist_id,
  user_id,
  newConversation,
}) => {
  const stripePublishKey =
    "pk_test_51J6fyHEgVD9VL0gWMOhwinBJaG1a8b4B04n3I5uBgPVdBeMozrkKXrVmiUF6aOEqwoAHzt2gUAlSZvaVleKM8Fjf00NFtiT5Ct";
  const makePayment = async (token) => {
    try {
      paymentBookingAction({ appointmentId, token, therapist_id });
      newConversation({ senderId: user_id, receiverId: therapist_id });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StripeCheckout
      name="Pay for your appointment"
      stripeKey={stripePublishKey}
      token={makePayment}
      amount={price * 100}
    >
      <button className="mainbtn block mx-auto ">Book</button>
    </StripeCheckout>
  );
};

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.user._id,
  };
};

export default connect(mapStateToProps, {
  paymentBookingAction,
  newConversation,
})(Payment);
