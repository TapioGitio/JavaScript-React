import React from 'react'

const ContactForm = () => {

    
  return (

    <form className="form">
        <h3>Get Online Consultation</h3>

        <div className="input-group">
            <label className="form-label" htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" className="form-input"/>
        </div>
        <div className="input-group">
            <label className="form-label" htmlFor="emailAddress">Email Address</label>
            <input type="email" id="emailAddress" className="form-input"/>
        </div>
        <div className="input-group">
            <label className="form-label" htmlFor="specialist">Specialist</label>
            <input type="text" id="specialist" className="form-input"/>
        </div>

        <button className="btn-primary btn-appoint">Make an appointment</button>

    </form>
  )
}

export default ContactForm