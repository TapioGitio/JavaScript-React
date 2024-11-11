import React, { useState } from 'react'
import { validateEmail } from './Regex'

function NewsLetter() {

    const [email, setEmail] = useState({ email: '' })
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const handleSubmit = async (e) => {

        e.preventDefault()

        setSuccess(null)


        if(email.email.trim() === '') {
            setError('Please write your email-address')
            return
        } 
        if(!validateEmail.test(email.email)){
            setError('Please check your spelling, incorrect format')
            return
        }

        try{

            const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            })
    
            if(res.ok) {
                console.log('Email sent:', email.email)
                setSuccess('Thank you for subscribing!')
                setError(null)
                setEmail({ email: '' })

            } else if(res.status === 404){
                setError(`Encountered an error posting the email: Check the URL`)
            } else if(res.status >= 500) {
                setError(`Encountered an error posting the email: Server-side, try again later`)
            } else {
                setError('Encountered an unexpected error: try again later')
            }

        } catch {
            setError(`Could not send your email, try again later!`)
        }

    }

    const handleChange = (e) => {
        
        const { name, value } = e.target
        setEmail({...email, [name]: value})
        setError(null)
    }   

  return (
    <section className="newsletter container">
        <div className="news-container">
            <div className="container">
                <div>
                    <img className="bell" src="./images/notification-icon.svg" alt="Bell icon"/>
                </div>
                <div className="news-title">
                    <h2>Subscribe to our newsletter </h2>
                    
                    {error ? (<small className='error'>{error}</small>) : success ? (<small className='success'>{success}</small>) :null}
                </div>
            </div>

            <div className="container">                   
                <form className="email-form" onSubmit={handleSubmit} noValidate>
                    <input onChange={handleChange} value={email.email} className="form-input" type="email" name="email" id="email" required placeholder ="Your email" />
                    <button type="submit" className="btn-sub">Subscribe</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default NewsLetter