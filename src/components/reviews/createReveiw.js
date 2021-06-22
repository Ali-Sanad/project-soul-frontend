import { useState } from "react";
import { connect } from "react-redux";

import { addReview } from "../../actions/review"

const ReviewForm = ({ addReview ,id}) => {

    const [formData, setFormData] = useState({
        rate: 0,
        review: "",
      });
    

  console.log(formData);
const {rate,review}=formData;
const onChange = (e) =>
setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async(e) => {
      
      e.preventDefault();

addReview(formData,id);
setFormData({rate:0,review:""})
  };

  return (
    <>
      <form  onSubmit={(e) => onSubmit(e)}>
      <input
          type="number"
          name="rate"
          placeholder='rate'

          value={rate}
          onChange={(e) => onChange(e)}
          required
          
        />
        <input
          type="text"
          name="review"
          placeholder='review'

          value={review}
          onChange={(e) => onChange(e)}
          required
        />
       

        <button type="submit">
          Submit
        </button>
        <input type="reset" value="Reset" />
      </form>
    </>
  );
};

export default connect(null, {
  addReview,
})(ReviewForm);
 