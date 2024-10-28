import React, { useState } from 'react'
import Darkmode from './Darkmode'
import { Link, NavLink} from 'react-router-dom'

function Header({DarkTheme, toggleDark}) {


const [isOpen, setIsOpen] = useState(false)

const toggleNavbar = () => {
    setIsOpen(!isOpen)
}


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

            <button onClick={toggleNavbar} className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}` }>
                <li><a className="nav-link" href="#ft">Features</a></li>
                <li><NavLink className="nav-link" to={'/contacts'}>Contact</NavLink></li>
                <li><a href="#" className="btn-primary"><i className="fa-thin fa-user"></i><span>Sign-in / up</span></a></li>  
            </div>
        </div>
    </header>
  )
}

export default Header