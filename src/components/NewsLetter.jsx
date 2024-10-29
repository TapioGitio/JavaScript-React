import React, { useState } from 'react'
import { validateEmail } from './Regex'

function NewsLetter() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()


        if(!email) {
            setError('Please write your email-address')
            return
        } 
        if(!validateEmail.test(email)){
            setError('Please check your spelling, incorrect format')
            return
        }


        console.log('Email sent:', email)
        setEmail('')
        setError('')
        setSuccess('Thank you for subscribing!')

    }

    const handleChange = (e) => {
        
        setEmail(e.target.value)
        setError('')
    }   

  return (
    <section className="newsletter container">
        <div className="news-container">
            <div className="container">
                <div>
                    <img className="bell" src="./images/notification-icon.svg" alt="Bell icon"/>
                </div>
                <div className="news-title">
                    <h2>Subscribe to our
                    newsletter </h2>
                    {
                        error && <small className='error'>{error}</small>
                    }
                    {
                        success && <small className='success'>{success}</small>
                    }
                </div>
            </div>

            <div className="container">                   
                <form className="email-form" onSubmit={handleSubmit} noValidate>
                    <input onChange={handleChange} value={email} className="form-input" type="email" name="email" id="email" required placeholder ="Your email" />
                    <button type="submit" className="btn-sub">Subscribe</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default NewsLetter