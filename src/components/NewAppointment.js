import React, { Component } from 'react'

export default class NewAppointment extends Component {
  state = {

  }
  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Create a new appointment
          </h2>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
              <div className="col-sm-8 col-lg-10">
                <input 
                type="text"
                className="form-control"
                placeholder="pet name"
                name="petname"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Pet Owner</label>
              <div className="col-sm-8 col-lg-10">
                <input 
                type="text"
                className="form-control"
                placeholder="pet owner"
                name="petowner"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="date"
                className="form-control"
                name="date"
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="time"
                className="form-control"
                name="time"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Synthoms</label>
              <div className="col-sm-8 col-lg-10">
              <textarea 
                  className="form-control"
                  placeholder="Describe the synthoms"
                  name="synthoms"
                ></textarea>
              </div>
            </div>
            <div className="form-group row">
              <input type="submit" className="col-lg-3 offset-lg-9 py-3 mt-2 btn btn-success btn-block" value="Add new appointment"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
