import React, { useState } from 'react'

const ContactForm = () => {

  const [contactFormData, setContactFormData] = useState({ fullName: "", email: "", specialist: ""})
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = async (e) => {

    e.preventDefault()

 
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactFormData)
      })

      if(res.ok) {
        setSuccess(true)
        setContactFormData({ fullName: "", email: "", specialist: ""})
      } 
      


    
  }

  const handleOkButton = () => {
    setSuccess(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactFormData({...contactFormData, [name]: value})
  }

  if(success) {

    return (
      <div className='form success-form'>
        <h2 className='mb-1'>Appointment sent!</h2>
        <p className='mb-1'>We'll contact you if the time is available</p>
        <button onClick={handleOkButton} className='btn-primary success-btn'>Ok</button>
      </div>

    )
  }
    
  return (

    <form className="form" noValidate onSubmit={handleSubmit}>
        <h3>Get Online Consultation</h3>

        <div className="input-group">
            <label className="form-label">Full Name</label>
            <input type="text" name='fullName' value={contactFormData.fullName} required className="form-input" placeholder=' e.g: Henrik Svensson' onChange={handleChange}/>
            <small></small>
        </div>
        <div className="input-group">
            <label className="form-label">Email Address</label>
            <input type="email" name='email' value={contactFormData.email} required className="form-input" placeholder=' e.g: henrik@domain.com' onChange={handleChange}/>
            <small></small>
        </div>
        <div className="input-group">
            <label className="form-label">Specialist</label>
            <input type="text" name='specialist' value={contactFormData.specialist} required className="form-input" placeholder=' e.g: Therapist, Doctor, etc' onChange={handleChange}/>
            <small></small>
        </div>

        <button className="btn-primary btn-appoint">Make an appointment</button>

    </form>
  )
}

export default ContactForm