import React from 'react'

const TestimonialsItem = ({item}) => {
  return (
    <div className="rev-container">
    <div className="quotes">
        <img src="./images/quotes-icon.svg" alt=""/>
    </div>
    <div className="img-container">
        <img src="images/star-icon.svg" alt=""/>
        <img src="images/star-icon.svg" alt=""/>
        <img src="images/star-icon.svg" alt=""/>
        <img src="images/star-icon.svg" alt=""/>
        <img src="images/greystar-icon.svg" alt=""/>
    </div>

    <div className="rev-text">
        <p>{item.comment}</p>
    </div>

    <div className="rev-fan">
        <img src={item.avatarUrl} alt=""/>
        <div className="rev-name">
            <p className="rev-1">{item.author}</p>
            <p className="rev-2">{item.jobRole}</p>
        </div>
    </div>

</div>
  )
}

export default TestimonialsItem