import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = ({isOpen, toggleSidebar}) => {

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}` }>
        
      <li onClick={toggleSidebar}><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
      <li onClick={toggleSidebar}><NavLink className="nav-link" to={'/contacts'}>Contact</NavLink></li>
      <li onClick={toggleSidebar}><a className="nav-link" href="#ft">Features</a></li>
      <li onClick={toggleSidebar}><a href="#" className="btn-primary"><i className="fa-thin fa-user"></i><span>Sign-in / up</span></a></li>  

    </div>
  )
}

export default SideBar