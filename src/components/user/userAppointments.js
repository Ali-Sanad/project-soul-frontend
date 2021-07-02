import React from 'react';
import Navbar from '../shared/navbar';
import {connect} from 'react-redux';
import Sidenavuser from '../shared/sidenavuser';
import classes from '../therapist/appointments.module.css';
import {Link} from 'react-router-dom';
import {cancelAppointment} from '../../actions/auth';

const UserAppointments = ({auth, cancelAppointment}) => {
  const timeFormatter = (date, time) =>
    new Intl.DateTimeFormat('en', {
      timeStyle: 'short',
    }).format(new Date(`${date} ${time}`));

  return (
    <>
      {auth.user && (
        <div className='userdashboard '>
          <div className={classes.APP}>
                <div className='col-12'>
                  <Navbar className='therapistdashboard__navbar'></Navbar>
                </div>
            <div className='container'>
              <div className='row'>

                <div className='col-12 col-md-3'>
                  <Sidenavuser></Sidenavuser>
                </div>
                <div className='col-12 col-md-8 userdashboard__appointments'>
                  <h4 className="headers">Appointments</h4>

                  {auth && auth.user && auth.user.appointments.length > 0 ? (
                    <div className='h-full overflow-auto flex items-center justify-center'>
                      <div className='container'>
                        <table className='w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-auto sm:shadow-lg my-5'>
                          <thead className='text-black bg-soul-100 '>
                            {auth.user.appointments.map((_, idx) => (
                              <tr
                                key={idx}
                                className='bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0'
                              >
                                <th className='p-3 text-left'>Date</th>
                                <th className='p-3 text-left'>From</th>
                                <th className='p-3 text-left'>To</th>
                                <th className='p-3 text-left'>Therapist</th>
                                <th className='p-3 text-left'>Canceling</th>
                                <th className='p-3 text-left'>Meeting</th>
                              </tr>
                            ))}
                          </thead>
                          <tbody className='flex-1 sm:flex-none'>
                            {auth.user.appointments.map((app) => (
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
                                <td className='border-grey-light border hover:bg-gray-100 p-3  text-center'>
                                  {app.therapist.fname +
                                    ' ' +
                                    app.therapist.lname}
                                  <br />
                                  <Link
                                    to={`/therapistlist/${app.therapist._id}/reviews`}
                                  >
                                    <button className='button btn'>
                                      <span className='mainbtn'>visit</span>
                                    </button>
                                  </Link>
                                </td>
                                <td className='border-grey-light border hover:bg-gray-100 p-3  text-center'>
                                  <button className='button btn'>
                                    <span
                                      className='mainbtn'
                                      onClick={() => cancelAppointment(app._id)}
                                    >
                                      Cancel
                                    </span>
                                  </button>
                                </td>
                                <td className='border-grey-light border hover:bg-gray-100 p-3  text-center'>
                                  <a
                                    href={app.zoomLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-bold text-soul-300'
                                  >
                                    Join
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <h5 className="text-center">You don't have appointments</h5>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  therapistAuth: state.therapistAuth,
  oneTherapist: state.therapists.oneTherapist,
  auth: state.auth,
  therapists: state.therapists?.therapists.filter(
    (th) => th.isAccepted === 'Accepted'
  ),
});

export default connect(mapStateToProps, {cancelAppointment})(UserAppointments);
