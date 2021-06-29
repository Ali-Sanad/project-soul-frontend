import React from "react";
import { Link } from "react-router-dom";

const TherapistConfirmUserAccount = (props) => {
  if (props.match.path === "/pending-therapist-verification") {
    console.log(props.match.path);
  }
  return (
    // <div className=" mx-auto card rounded-lg   mt-24 mb-12  w-5/6 ">
    //   <div className="mx-auto mt-6 ml-12 w-4/5">
    //     <h6 className="mt-12 mb-12 text-base ">
    //       Your account has been registered successfully! A link has been sent to
    //       to your email, Please check the inbox to verify your account.
    //     </h6>
    //   </div>
    // </div>
    <div className=" w-2/3  mt-52 mx-auto  h-screen bg-soul_bg font-Nunito">
      <div className="mx-auto mt-24 ml-12  w-4/5">
        <h6 className="my-2 text-soul-300 text-2xl">
          Your account has been registered successfully! A link has been sent to
          to your email, Please check the inbox to verify your account.
        </h6>
        <h6 className="mt-6">
          <span className="text-soul-300 font-bold ">
            <Link
              to="/registertherapist"
              className=" text-gray-600 no-underline hover:text-soul-300 text-xl"
            >
              Go back !
            </Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default TherapistConfirmUserAccount;
