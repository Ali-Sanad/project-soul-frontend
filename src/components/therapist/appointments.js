import React, {useState} from 'react';
//redux
import {connect} from 'react-redux';
import {deleteAppointment, loadAppointmentById} from '../../actions/therapists';
import UpdateAppointment from './updateappointment';
import {withRouter} from 'react-router-dom';
import Payment from '../Payment';
import classes from './appointments.module.css';
const Appointments = ({
  therapistAuth,
  auth,
  oneTherapist,
  deleteAppointment,
  loadAppointmentById,
  id,
  history,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const timeFormatter = (date, time) =>
    new Intl.DateTimeFormat('en', {
      timeStyle: 'short',
    }).format(new Date(`${date} ${time}`));

  return (
    <div className='addappointment'>
      <div className={classes.APP}>
        <h4 className='headers'>Appointments </h4>
        {oneTherapist && oneTherapist.appointments.length > 0 ? (
          <>
            <h5 className='headers'>
              Fees:{' '}
              {oneTherapist && oneTherapist.fees ? oneTherapist.fees : 150} USD
            </h5>
            <div className='h-full overflow-auto flex items-center justify-center'>
              <div className='container'>
                <table className='w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-auto sm:shadow-lg my-5'>
                  <thead className='text-black bg-soul-100 '>
                    {oneTherapist.appointments.map((_, idx) => (
                      <tr
                        key={idx}
                        className='bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'
                      >
                        <th className='p-3 text-left'>Date</th>
                        <th className='p-3 text-left'>From</th>
                        <th className='p-3 text-left'>To</th>
                        <th className='p-3 text-left'>Select</th>
                        {therapistAuth &&
                          therapistAuth.isAuthenticated_therapist &&
                          therapistAuth.therapist._id === id && (
                            <>
                              <th className='p-3 text-left'>Edit</th>
                              <th className='p-3 text-left'>Delete</th>
                              <th className='p-3 text-left' width='110px'>
                                Patient
                              </th>
                              <th className='p-3 text-left'>Meeting</th>
                            </>
                          )}
                      </tr>
                    ))}
                  </thead>
                  <tbody className='flex-1 sm:flex-none'>
                    {oneTherapist.appointments.map((app) => (
                      <tr
                        className='flex flex-col flex-no wrap sm:table-row mb-6   sm:mb-0'
                        key={app._id}
                      >
                        <td className='border-grey-light border hover:bg-gray-100 p-3 text-center '>
                          {new Date(app.date).toDateString()}
                        </td>
                        <td className='border-grey-light border hover:bg-gray-100 p-3  text-center'>
                          {timeFormatter(app.date, app.from)}
                        </td>
                        <td className='border-grey-light border hover:bg-gray-100 p-3  text-center'>
                          {timeFormatter(app.date, app.to)}
                        </td>
                        <td
                          className={`${
                            app?.booking.isBooked && 'bg-red-200'
                          } border-grey-light border cursor-pointer p-3  text-center`}
                        >
                          <input
                            className='cursor-pointer '
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
                              <td className='border-grey-light border hover:bg-gray-100 p-3 truncate text-center'>
                                <UpdateAppointment
                                  id={app._id}
                                  therapistId={therapistAuth.therapist._id}
                                >
                                  <i
                                    className='fas fa-edit fas fa-1x text-soul-200 text-center'
                                    onClick={() => loadAppointmentById(app._id)}
                                  ></i>
                                </UpdateAppointment>
                              </td>

                              <td className='border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-bold cursor-pointer text-center'>
                                {!app.booking.isBooked ? (
                                  <span
                                    onClick={() =>
                                      deleteAppointment(
                                        app._id,
                                        therapistAuth.therapist._id
                                      )
                                    }
                                  >
                                    Delete
                                  </span>
                                ) : (
                                  <span>Booked</span>
                                )}
                              </td>
                              <td className='border-grey-light border hover:bg-gray-100 p-3 text-center '>
                                {app.booking.isBooked && app.booking.user.name}
                              </td>
                              <td className='border-grey-light border hover:bg-gray-100 p-3 text-center '>
                                <a
                                  href={app.zoomLink}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='font-bold text-soul-300'
                                >
                                  Join
                                </a>
                              </td>
                            </>
                          )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
    </div>
  );
};

const mapStateTopProps = (state) => ({
  therapistAuth: state.therapistAuth,
  oneTherapist: state.therapists.oneTherapist,
  auth: state.auth,
});

export default connect(mapStateTopProps, {
  deleteAppointment,
  loadAppointmentById,
})(withRouter(Appointments));
