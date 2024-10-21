import React from 'react'

function MainSection() {
  return (
    <section className="main">
        <div className="grid-container container">

            <div className="title flex">
                <h1>Manage All Your Money in One App</h1>
            </div>
            <div className="text">
                <p>We offer you a new generation of the mobile banking.
                Save, spend & manage money in your pocket.</p>
                
                <div className="login-link flex">
                    <a href="#">
                        <img className="link" src="./images/appstore.svg" alt="apple-link"/>
                    </a>

                    <a href="#">
                        <img className="link" src="./images/google.svg" alt="google-link"/>
                    </a>
                </div>
                <div className="discover flex">
                    <a href="#skip" className="btn-discover flex">
                        <i className="fa-solid fa-chevron-down"></i></a>
                    <a href="#skip"/>
                    <span>Discover more</span>
                </div>
            </div>
            <div id="phone-1">
                <img src="./images/phoneimg-1.svg" alt="Two phones, displaying transactions being made"/>
            </div>
        </div>
    </section>
  )
}

export default MainSection