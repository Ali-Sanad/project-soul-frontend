import React,{useState} from 'react';
import AddReview from "../reviews/createReveiw"
import Review from "../reviews/reviews"
import { connect } from "react-redux";

const AdminDashboard = ({match,isAuth}) => {
  //const [ID, setID] = useState(null);
  let id = match.params.id.trim();
  console.log("isAuth",isAuth);
 // setID(match.params.id.trim());
 // console.log(ID)
  return (
    <div className='text-center font-bold text-soul-300  text-lg font-Nunito mt-24'>
      Admin Dashboard

{isAuth&&
       <AddReview id={id}/> }

       <Review id={id}/> 
    </div>
  );
};
const mapStateToProps=(state)=>({
  isAuth:state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(AdminDashboard);
 
