import Moment from 'react-moment';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTherapists} from '../../actions/therapists';
import {Link} from 'react-router-dom';

import Footer from '../shared/footer';
import NavBar from '../shared/navbar';
import Message from '../shared/message';
import ToTop from '../shared/totop';
import '../../index.css'; //tailwind

//article
const TherapistsList = ({getTherapists, therapists, state}) => {
  useEffect(() => {
    getTherapists();
  }, [getTherapists]);
  console.log('state', state);
  console.log('therapistsssssss', therapists);
  return (
    <>
      <NavBar />

      <div className='mt-8 grid 2xl:grid-cols-4 mx-30 my-20 gap-20 lg:grid-cols-3 mx-20 my-10  gap-10 md:grid-cols-2 gap-8 mx-10  '>
        {therapists &&
          therapists.map((therapist) => (
            <div key={therapist._id}>
              <div className='rounded overflow-hidden shadow-2xl relative'>
                <img
                  className='w-full h-32 sm:h-48 object-cover'
                  src='https://www.verywellhealth.com/thmb/UIDXsF5GFy3YYh71-Gg5tjyA_cA=/260x156/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1257279549-4d1b32dcfffa43b0a28754a663d7bab1.jpg'
                  alt={therapist.fname + therapist.lname}
                />
                <h3 className='text-center'>
                  {therapist.fname + therapist.lname}
                </h3>

                <p className='text-center leading-relaxed'>
                  In a thread on Reddit which has garnered nearly 10,000
                  replies, people who go to the gym every day (or practice some
                  kind of other daily skill) have been sharing the things that
                  help them stay motivated and proactive in keeping up with
                  their good habits.
                </p>
                <span className='text-center'>By Matt Fraser</span>

                <div className='grid grid-cols-2 gap-0'>
                  <div>
                    {/* <a className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider">
                    BOOK
                  </a> */}
                    <Link className='btn '>BOOK</Link>
                  </div>

                  <div>
                    {/* <a className="rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider">
                    Profile
                  </a> */}
                    <Link
                      className='btn'
                      to={`/admin-dashboard/${therapist._id}`}
                    >
                      PROFILE
                    </Link>
                  </div>
                </div>

                {/* <button className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">
                Read article
              </button> */}
              </div>
            </div>
          ))}
      </div>
      <Footer />
      <Message />
      <ToTop />
    </>
  );
};

const mapStateToProps = (state) => ({
  state: state,
  //  oneTherapist: state.oneTherapist,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted == "Accepted"
  ),
  // therapist: state.therapistAuth,
});

export default connect(mapStateToProps, {
  getTherapists,
})(TherapistsList);
