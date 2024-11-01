import React, { useState } from 'react'
import { validateEmail } from './Regex'

const ContactForm = () => {

  const [contactFormData, setContactFormData] = useState({ fullName: "", email: "", specialist: ""})
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = async (e) => {

    e.preventDefault()

      const newErrors =  {}

      Object.keys(contactFormData).forEach(field => {
        if(contactFormData[field].trim() === '') {
          newErrors[field] = `Please enter your ${field}.`
        }
      })

      if(Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }
 
      if(!validateEmail.test(contactFormData.email)) {
        setErrors({})
        setErrors(prevErrors => ({...prevErrors, email: 'Please check your spelling, the format is wrong'}))
        return
      }
      
      try {
        
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contactFormData)
        })
  
        if(!res.ok) {
          throw new Error ('Failed to post the request')
        }

        setSuccess(true)
        setContactFormData({ fullName: "", email: "", specialist: ""})
        setErrors({})

      } catch (error) {
        setErrors(prevErrors => ({...prevErrors, requestError: `Something went wrong along the way: ${error.message}`}))
      }
      
  }

  const handleSuccesConfirmation = () => { 
    setSuccess(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactFormData({...contactFormData, [name]: value})

  }

  if(success) {

    return (
      <div className='form success-form'>
        <h3 className='mb-1'>Appointment sent!</h3>
        <p className='mb-1'>We'll contact you with available times</p>
        <button onClick={handleSuccesConfirmation} className='btn-primary success-btn'>Ok</button>
      </div>

    )
  }
  
  return (

    <form className="form" noValidate onSubmit={handleSubmit}>
        <h3>Get Online Consultation</h3>

        {errors.requestError && <p className='error'>{errors.requestError}</p>}

        <div className="input-group">
            <label className="form-label">Full Name</label>
            <input type="text" name='fullName' value={contactFormData.fullName} required className="form-input" placeholder=' e.g: Henrik Larsson' onChange={handleChange}/>
            <small className='error'>{errors.fullName && errors.fullName}</small>
        </div>
        <div className="input-group">
            <label className="form-label">Email Address</label>
            <input type="email" name='email' value={contactFormData.email} required className="form-input" placeholder=' e.g: Henrik@domain.com' onChange={handleChange}/>
            <small className='error'>{errors.email && errors.email}</small>
        </div>
        <div className="input-group">
            <label className="form-label">Specialist</label>
            <select name='specialist' value={contactFormData.specialist} required className="form-input" onChange={handleChange}>
            <option value=''></option>
            <option value='Software Developer'>Software Developer</option>
            <option value='Cyber Security'>Cyber Security</option>
            <option value='UX Designer'>UX Designer</option>
            <option value='Tech Support'>Tech Support</option>
            </select>
            <small className='error'>{errors.specialist && errors.specialist}</small>
        </div>

        <button className="btn-primary btn-appoint">Make an appointment</button>

    </form>
  )
}

export default ContactForm