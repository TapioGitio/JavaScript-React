import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = ({isOpen, handleSidebarClose}) => {

 
   

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}` }>
        <li onClick={handleSidebarClose}><a className="nav-link" href="#ft">Features</a></li>
        <li onClick={handleSidebarClose}><NavLink className="nav-link" to={'/contacts'}>Contact</NavLink></li>
        <li onClick={handleSidebarClose}><a href="#" className="btn-primary"><i className="fa-thin fa-user"></i><span>Sign-in / up</span></a></li>  
    </div>
  )
}

export default SideBar