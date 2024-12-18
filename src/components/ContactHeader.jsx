import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactForm from './ContactForm'

const ContactHeader = () => {
  return (
    <section className="contact-page">
        <div className="container">
            <nav aria-label="Navigation breadcrumb">
                <ol className="breadcrumb mb-1">
                    <li><NavLink to={'/'}><i className="fa-solid fa-house"></i> Home</NavLink></li>
                    <li><NavLink to={'/contacts'}>Contact</NavLink></li>
                </ol>
            </nav>
            <div className="contact-side">
                <h2>Contact Us</h2>

                <div className="contact-card">
                    <div className="icon-container">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div>
                        <h3 className="mb-1">Email us</h3>
                        <p className="mb-1">Please feel free to drop us a line. We will respond as soon as possible.</p>
                        <button className="btn">Leave a message
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="icon-container">
                        <i className="fa-light fa-users"></i>
                    </div>
                    <div>
                        <h3 className="mb-1">Careers</h3>
                        <p className="mb-1">At Silicon, we believe that our people are our greatest asset. We’re on a mission to revolutionize the market.</p>
                        <button className="btn">Send an application
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="form-side">
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactHeader   