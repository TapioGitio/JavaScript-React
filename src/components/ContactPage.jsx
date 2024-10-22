import React from 'react'

function ContactPage() {
  return (
    <div>
        <header>
        <div className="container">

            <a id="logo" href="index.html"><img src="./images/silicon-icon.svg" alt="Silicon logo"/></a>

            <nav className="navbar">
                <a className="nav-link" href="#ft">Features</a>
                <a className="nav-link" href="contact.html">Contact</a>
                
            </nav>

            <div className="btn-toggle-switch">
                <span className="label">Dark Mode</span>
                <label for="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

            <a id="auth-signin" href="#" className="btn-primary">
                <i className="fa-thin fa-user"></i>
                <span>Sign-in / up</span>

            </a>

            <button className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>

        </div>
    </header>

    <section className="contact-page">
        <div className="container">
            <nav aria-label="Navigation breadcrumb">
                <ol className="breadcrumb mb-1">
                    <li><a href="index.html"><i className="fa-solid fa-house"></i> Home</a></li>
                    <span>" {'>'} "</span>
                    <li><a href="contact.html">Contact</a></li>
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
                        <label className="form-label" for="fullName">Full Name</label>
                        <input type="text" id="fullName" className="form-input"/>
                    </div>
                    <div className="input-group">
                        <label className="form-label" for="emailAddress">Email Address</label>
                        <input type="email" id="emailAddress" className="form-input"/>
                    </div>
                    <div className="input-group">
                        <label className="form-label" for="specialist">Specialist</label>
                        <input type="text" id="specialist" className="form-input"/>
                    </div>

                    <button className="btn-primary btn-appoint">Make an appointment</button>

                </form>
            </div>
        </div>
    </section>

    <section className="map-page">
        <div className="container">
            <div className="map-wrapper">

                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70181.20259462584!2d12.726743888557094!3d56.65426292427672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651bcc50131eda3%3A0xee6ad95d3ac91235!2sHalmstad%20City%20Airport!5e0!3m2!1ssv!2sse!4v1729166766314!5m2!1ssv!2sse" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="map-info">
                    <div className="map-1"></div>
                    <div className="map-2"></div>
                    <div className="socials"></div>
                </div>
                
            </div>
        </div>
    </section>
    
    <footer>
        <div className="container">
            <p>© 2024 Silicon. All rights reserved.</p>
            <p>Credit MadrasThemes</p>
        </div>   
    </footer>
    </div>
  )
}

export default ContactPage