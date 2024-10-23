import React, { useState } from 'react'

function NewsLetter() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        if(!email) {
            setError('Please write your email-address')
        } else {
            console.log('Email sent:', email)
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
        setError(false)
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
                        error && <small style={{ color: 'red'}}>{error}</small>
                    }
                </div>
            </div>

            <div className="container">                   
                <form className="email-form" onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={email} className="form-input" type="email" name="email" id="email"  placeholder ="Your email" />
                    <button type="submit" className="btn-sub">Subscribe</button>
                   
                </form>
            </div>

        </div>
    </section>
  )
}

export default NewsLetter