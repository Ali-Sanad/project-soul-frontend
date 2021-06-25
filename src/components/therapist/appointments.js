import React, {useState} from 'react';
//redux
import {connect} from 'react-redux';
import {deleteAppointment} from '../../actions/therapists';
import UpdateAppointment from './updateappointment';

import {bookAppointment} from '../../actions/auth'; //user is booking an appointment @TODO
import {withRouter} from 'react-router-dom';

const Appointments = ({
  therapistAuth,
  auth,
  oneTherapist,
  deleteAppointment,
  bookAppointment,
  id,
  history,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <React.Fragment>
      <div className='addappointment'>
        <h4 className='headers'>Appointments </h4>
        <h5 className='headers'>
          Fees: {oneTherapist && oneTherapist.fees ? oneTherapist.fees : 150}{' '}
          EGP
        </h5>
        {oneTherapist && oneTherapist.appointments.length > 0 ? (
          <div className='rounded-t-xl overflow-hidden bg-gradient-to-r  to-teal-100 p-10'>
            <table className='table-auto '>
              <thead>
                <tr>
                  <th className='px-4 py-2 text-soul-300'>Date</th>
                  <th className='px-4 py-2 text-soul-300'>From</th>
                  <th className='px-4 py-2 text-soul-300'>To</th>
                  <th className='px-4 py-2 text-soul-300'>Select</th>

                  {therapistAuth &&
                    therapistAuth.isAuthenticated_therapist &&
                    therapistAuth.therapist._id === id && (
                      <>
                        <th className='px-4 py-2 text-soul-300'>Edit</th>
                        <th className='px-4 py-2 text-soul-300'>Delete</th>
                      </>
                    )}
                </tr>
              </thead>
              <tbody>
                {oneTherapist.appointments.map((app) => (
                  <tr key={app._id} className=' cursor-pointer'>
                    <td className='borde border-4 px-4 py-2 text-center text-soul-200 font-medium'>
                      {new Date(app.date).toDateString()}
                    </td>
                    <td className='borde border-4 px-4 py-2 text-center text-soul-200 font-medium'>
                      {app.from}
                    </td>
                    <td className='borde border-4 px-4 py-2 text-center text-soul-200 font-medium'>
                      {app.to}
                    </td>

                    <td className='borde border-4 px-4 py-2 text-soul-200 font-medium'>
                      <input
                        className='cursor-pointer block mx-auto '
                        type='radio'
                        name='book'
                        value={app._id}
                        onChange={(e) => onChange(e)}
                        disabled={app.booking.isBooked ? true : false}
                      />
                    </td>
                    {therapistAuth &&
                      therapistAuth.isAuthenticated_therapist &&
                      therapistAuth.therapist._id === id && (
                        <>
                          <td className='borde border-4 px-4 py-2 text-soul-200 font-medium'>
                            <UpdateAppointment
                              id={app._id}
                              therapistId={therapistAuth.therapist._id}
                            >
                              <i className='fas fa-edit fas fa-1x text-soul-200'></i>
                            </UpdateAppointment>
                          </td>
                          <td
                            className='borde border-4 px-4 py-2  text-center'
                            onClick={() =>
                              deleteAppointment(
                                app._id,
                                therapistAuth.therapist._id
                              )
                            }
                          >
                            <i className='fas fa-trash-alt fas fa-1x text-red-900'></i>
                          </td>
                        </>
                      )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className='text-soul-300'>
            No appointments yet for this therapist
          </p>
        )}
        <input
          type='button'
          value='Book An Appointment'
          className='mainbtn block mx-auto '
          onClick={() => {
            if (auth && auth.isAuthenticated) {
              bookAppointment(inputValue, id);
            } else {
              history.push('/login');
            }
          }}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateTopProps = (state) => ({
  therapistAuth: state.therapistAuth,
  oneTherapist: state.therapists.oneTherapist,
  auth: state.auth,
});

export default connect(mapStateTopProps, {
  deleteAppointment,
  bookAppointment,
})(withRouter(Appointments));
