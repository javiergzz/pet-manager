import React from 'react';
import Appointment from './Appointment';

const AppointmentList = ({appointments, deleteAppointment}) => (
  <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center">
        Manage your appointments
      </h2>
      <div className="appointment-list">
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
          />
        ))}
      </div>
    </div>
  </div>
);

export default AppointmentList;