import React from 'react'
import FAQbutton from './FAQbutton'

const FAQitems = ({item}) => {




  return (
    <div className="acc-border">
        <div className="accordion">
            <span>{item.title}</span>
            <FAQbutton />
        </div>
        <div className="panel">
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default FAQitems