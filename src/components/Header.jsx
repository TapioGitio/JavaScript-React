import React, { useEffect, useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import Darkmode from './Darkmode'
import SideBar from './SideBar'

function Header() {
  
const [isOpen, setIsOpen] = useState(false)
const [imageSource, setImageSource] = useState('')

const [darkTheme, setDarkTheme] = useState(() => {
  
  const savedTheme = localStorage.getItem('theme')
  return savedTheme === 'dark'
})
// AI suggested this "lazy initiation" of checking whether the localstorage had darkmode set to on / less code to write.


useEffect(() => {
    
  const htmlElement= document.documentElement;

  if(darkTheme) {

    setImageSource('./images/silicon-icon-dark.svg') 
    htmlElement.classList.add('dark')
    htmlElement.style.colorScheme = 'dark'
    localStorage.setItem('theme', 'dark')
  } else {

    setImageSource('./images/silicon-icon.svg') 
    htmlElement.classList.remove('dark')
    htmlElement.style.colorScheme = 'light'
    localStorage.setItem('theme', 'light')
  }

}, [darkTheme])

const toggleDark = () => {
    setDarkTheme(darkTheme => !darkTheme)
}

const toggleSidebar = () => {
    setIsOpen(!isOpen)
}


  return (
    <header>
        <div className="container">

            <Link id="logo" to={'/'}><img src= {imageSource} alt="Silicon logo" /></Link>

            <nav className="navbar">
                <NavLink className="nav-link" to={'/contacts'}>Contact</NavLink>
                <a className="nav-link" href="#ft">Features</a>
            </nav>

            <div>
                <Darkmode darkTheme={darkTheme} toggleDark={toggleDark}/>
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