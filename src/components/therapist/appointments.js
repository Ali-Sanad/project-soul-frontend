import React, {useState} from 'react';
//redux
import {connect} from 'react-redux';
import {deleteAppointment} from '../../actions/therapists';
import UpdateAppointment from './updateappointment';
import {withRouter} from 'react-router-dom';
import Payment from '../Payment';
const Appointments = ({
  therapistAuth,
  auth,
  oneTherapist,
  deleteAppointment,
  id,
  history,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div className='addappointment'>
        <h4 className='headers'>Appointments </h4>
        {oneTherapist && oneTherapist.appointments.length > 0 ? (
          <>
            <h5 className='headers'>
              Fees:{' '}
              {oneTherapist && oneTherapist.fees ? oneTherapist.fees : 150} USD
            </h5>
            <div className='rounded-t-xl overflow-auto bg-gradient-to-r  to-teal-100 p-10'>
              <table className='table-auto mx-auto'>
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
                          <th className='px-4 py-2 text-soul-300'>Patient</th>
                        </>
                      )}
                  </tr>
                </thead>
                <tbody>
                  {oneTherapist.appointments.map((app) => (
                    <tr
                      key={app._id}
                      className={
                        app.booking.isBooked ? 'bg-red-200' : 'bg-gray-100'
                      }
                    >
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
                            <td className='borde border-4 px-4 py-2  text-center'>
                              {!app.booking.isBooked && (
                                <i
                                  className='fas fa-trash-alt fas fa-1x text-red-900'
                                  onClick={() =>
                                    deleteAppointment(
                                      app._id,
                                      therapistAuth.therapist._id
                                    )
                                  }
                                ></i>
                              )}
                            </td>
                            <td className='borde border-4 px-4 py-2  text-center'>
                              {app.booking.isBooked && app.booking.user.name}
                            </td>
                          </>
                        )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {auth && auth.isAuthenticated ? (
              <Payment
                appointmentId={inputValue}
                price={oneTherapist.fees}
                therapist_id={oneTherapist._id}
              />
            ) : (
              <input
                type='button'
                value='Book'
                className='mainbtn block mx-auto '
                onClick={() => history.push('/login')}
              />
            )}
          </>
        ) : (
          <p className='text-soul-300'>
            No appointments yet for this therapist
          </p>
        )}
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
})(withRouter(Appointments));
