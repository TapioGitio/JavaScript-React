import React, { useEffect, useState } from 'react'
import Darkmode from './Darkmode'
import { Link, NavLink} from 'react-router-dom'
import SideBar from './SideBar'

function Header() {
  
const [isOpen, setIsOpen] = useState(false)

const [DarkTheme, setDarkTheme] = useState(() => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme === 'dark'
})
// AI suggested this "lazy initiation" of checking whether the localstorage had darkmode set to on / less code to write.


useEffect(() => {
    
  const htmlElement= document.documentElement;

  if(DarkTheme) {
    htmlElement.classList.add('dark')
    htmlElement.style.colorScheme = 'dark'
    localStorage.setItem('theme', 'dark')

  } else {
    htmlElement.classList.remove('dark')
    htmlElement.style.colorScheme = 'light'
    localStorage.setItem('theme', 'light')
  }
}, [DarkTheme])

const toggleDark = () => {
    setDarkTheme(DarkTheme => !DarkTheme)
}

const toggleSidebar = () => {
    setIsOpen(!isOpen)
}

  return (
    <header>
        <div className="container">

            <Link id="logo" to={'/'}><img src="images/silicon-icon.svg" alt="Silicon logo" /></Link>

            <nav className="navbar">
                <NavLink className="nav-link" to={'/contacts'}>Contact</NavLink>
                <a className="nav-link" href="#ft">Features</a>
                
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
                <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            </div>
        </div>
    </header>
  )
}

export default Header