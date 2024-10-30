import React from 'react'

function Darkmode({DarkTheme, toggleDark}) {


  return (
    <div className="btn-toggle-switch">
        <span className="label">Dark Mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" checked={DarkTheme} onChange={toggleDark} />
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default Darkmode