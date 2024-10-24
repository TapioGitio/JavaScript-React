import React from 'react'

const TestimonialsItem = ({item}) => {


const showRating = (rating) => {

    const totalStars = 5;
    let stars = []
    for(let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<img key={i} src='images/star-icon.svg' alt='' />)
        } else {
            stars.push(<img key={i} src='images/greystar-icon.svg' alt='' />)
        }
    }
    return stars
}


  return (
    <div className="rev-container">
        <div className="quotes">
            <img src="./images/quotes-icon.svg" alt=""/>
        </div>
        <div className="img-container">
            {showRating(item.starRating)}
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

