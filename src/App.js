import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import AppointmentList from './components/AppointmentList';

class App extends Component {
  state = {
    appointments: []
  }

  createNewAppoinment = (appointment) => {
    // copy current state
    const appointments = [...this.state.appointments, appointment];
    // add new state
    this.setState({ appointments: appointments });
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
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
