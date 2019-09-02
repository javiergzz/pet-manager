import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, deleteAppointment }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{appointment.petname}</h3>
      <p className="card-text"><span>Pet Owner: </span> {appointment.petowner}</p>
      <p className="card-text"><span>Date: </span> {appointment.date}</p>
      <p className="card-text"><span>Time: </span> {appointment.time}</p>
      <p className="card-text"><span>Synthoms: </span> {appointment.synthoms}</p>
      <button className="btn btn-danger" onClick={() => deleteAppointment(appointment.id)}>Delete</button>
    </div>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;