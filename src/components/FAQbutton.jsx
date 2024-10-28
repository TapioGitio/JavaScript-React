import React, { useState } from 'react'

const FAQbutton = ({isOpen}) => {




  return (
    <button className={`btn-drop-up ${isOpen ? 'active' : ''}`}>
        <i className="fa-solid fa-chevron-up"></i>
    </button>
  )
}

export default FAQbutton