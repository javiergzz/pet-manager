import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import AppointmentList from './components/AppointmentList';

class App extends Component {
  state = {
    appointments: []
  }

  // when app loads
  componentDidMount(){
    const appointmentsLS = localStorage.getItem('appointments');
    if(appointmentsLS){
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      });
    }
  }

  // when actions add or delete a new appointment
  componentDidUpdate(){
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }

  createNewAppoinment = (appointment) => {
    // copy current state
    const appointments = [...this.state.appointments, appointment];
    // add new state
    this.setState({ appointments: appointments });
  }

  // delete appointment from state
  deleteAppointment = appointment_id => {
    // copy state
    const currentState = [...this.state.appointments];
    // then use filter to remove the element @appointment_id from appointments
    const appointments = currentState.filter(appointment => appointment.id !== appointment_id);
    // update state
    this.setState({
      appointments: appointments
    });
  }
  
  render() {
    return (
      <div className="container">
        <Header
          title='Pet Manager'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              createNewAppoinment={this.createNewAppoinment}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentList
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
