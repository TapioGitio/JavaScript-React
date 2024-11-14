import React from 'react'
import FAQbutton from './FAQbutton'

const FAQitems = ({ FAQ , isOpen, onToggle}) => {


  return (
    <div className="acc-border">
        <div onClick={onToggle} className="accordion">
            <span>{FAQ.title}</span>
            <FAQbutton isOpen={isOpen} />
        </div>
        <div className={`panel  ${isOpen ? 'open' : ''}`}>
            <p>{FAQ.content}</p>
        </div>
    </div>
  )
}

export default FAQitems