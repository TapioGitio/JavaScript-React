import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactHeader = () => {
  return (
    <section className="contact-page">
            <div className="container">
                <nav aria-label="Navigation breadcrumb">
                    <ol className="breadcrumb mb-1">
                        <li><NavLink to={'/'}><i className="fa-solid fa-house"></i> Home</NavLink></li>
                        <span></span>
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
                            <p className="mb-1">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                            <button className="btn">Send an application
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="form-side">
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
                </div>
            </div>
        </section>
  )
}

export default ContactHeader   