import React, { useEffect, useState } from 'react'
import Darkmode from './Darkmode'
import { Link, NavLink} from 'react-router-dom'
import SideBar from './SideBar'

function Header() {

const [DarkTheme, setDarkTheme] = useState(false)
const [isOpen, setIsOpen] = useState(false)

useEffect(() => {
    
  const htmlElement= document.documentElement;

  if(DarkTheme) {
    htmlElement.classList.add('dark')
    htmlElement.style.colorScheme = 'dark'
  } else {
    htmlElement.classList.remove('dark')
    htmlElement.style.colorScheme = 'light'
  }
}, [DarkTheme])

const toggleDark = () => {
    setDarkTheme(theme => !theme)
}

const toggleSidebar = () => {
    setIsOpen(!isOpen)
}

const handleSidebarClose = () => {
    setIsOpen(false)
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

            <button onClick={toggleSidebar} className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>

            <div>
                <SideBar isOpen={isOpen} handleSidebarClose={handleSidebarClose} />
            </div>
        </div>
    </header>
  )
}

export default Header