import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = ({isOpen}) => {

   

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}` }>
        <li><a className="nav-link" href="#ft">Features</a></li>
        <li><NavLink className="nav-link" to={'/contacts'}>Contact</NavLink></li>
        <li><a href="#" className="btn-primary"><i className="fa-thin fa-user"></i><span>Sign-in / up</span></a></li>  
    </div>
  )
}

export default SideBar