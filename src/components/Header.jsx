import React from 'react'
import Darkmode from './Darkmode'
import { Link, NavLink} from 'react-router-dom'

function Header({DarkTheme, toggleDark}) {


  return (
    <header>
        <div className="container">

            <Link id="logo" to={'/'}><img src="images/silicon-icon.svg" alt="Silicon logo" /></Link>

            <nav className="navbar">
                <a className="nav-link" href="#ft">Features</a>
                <NavLink className="nav-link" to={'/contacts'}>Contact</NavLink>
                
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