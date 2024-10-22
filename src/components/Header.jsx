import React from 'react'
import Darkmode from './Darkmode'

function Header({DarkTheme, toggleDark}) {


  return (
    <header>
        <div className="container">

            <a id="logo" href="index.html"><img src="images/silicon-icon.svg" alt="Silicon logo" /></a>

            <nav className="navbar">
                <a className="nav-link" href="#ft">Features</a>
                <a className="nav-link" href="contact.html">Contact</a>
                
            </nav>

            <div>
                <Darkmode DarkTheme={DarkTheme} toggleDark={toggleDark}/>
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
  )
}

export default Header