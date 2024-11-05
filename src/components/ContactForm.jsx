import React, { useState } from 'react'
import { validateBlankSpace, validateEmail, validateFullName } from './Regex'

const ContactForm = () => {

  const [contactFormData, setContactFormData] = useState({ fullName: "", email: "", specialist: ""})
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)


  const validateInputs = () => {

    const inputErrors = {}

    if(!validateBlankSpace.test(contactFormData.specialist)) {

      inputErrors.specialist = 'Requirements: Choose a specialist'
    } 

    if(!validateFullName.test(contactFormData.fullName)) {

      inputErrors.fullName = 'Requirements: Atleast two letters and no numbers'
    }

    if(!validateEmail.test(contactFormData.email)) {

      inputErrors.email = 'Requirements: something@example.com'
    }

    setErrors(inputErrors)
    return Object.keys(inputErrors).length === 0;
  }

  const validateInputFields = (name, value) => {

    let error = ''

    if(name === 'fullName' && !validateFullName.test(value)) {

      error = 'Requirements: Atleast two letters and no numbers'
    }

    if(name === 'email' && !validateEmail.test(value)) {

      error = 'Requirements: something@example.com'
    }

    setErrors(prevErrors => ({...prevErrors, [name]: error}))
  }

  const handleSuccesConfirmation = () => { 
    setSuccess(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactFormData({...contactFormData, [name]: value})

    validateInputFields(name, value)
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()


      if(!validateInputs()) return
      
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