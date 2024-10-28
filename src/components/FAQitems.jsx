import React from 'react'
import FAQbutton from './FAQbutton'

const FAQitems = ({item , isOpen, onToggle}) => {


  

  return (
    <div className="acc-border">
        <div onClick={onToggle} className="accordion">
            <span>{item.title}</span>
            <FAQbutton isOpen={isOpen} />
        </div>
        <div className={`panel  ${isOpen ? 'open' : ''}`}>
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default FAQitems