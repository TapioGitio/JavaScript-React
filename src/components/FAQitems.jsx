import React, { useState } from 'react'
import FAQbutton from './FAQbutton'

const FAQitems = ({item}) => {

  const [isOpen, setIsOpen] = useState(false)

  const togglePanel = () => {
    setIsOpen(expanded => !expanded)
  }

  return (
    <div className="acc-border">
        <div onClick={togglePanel} className="accordion">
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