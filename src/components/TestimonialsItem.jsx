import React from 'react'

const TestimonialsItem = ({ testimonial }) => {


const showRating = (rating) => {

    const totalStars = 5
    let stars = []
    for(let i = 0; i < totalStars; i++) {
        if( i < rating) {
            stars.push(<img key={i} src='./images/star-icon.svg'></img>)
        } else {
            stars.push(<img key={i} src='./images/greystar-icon.svg'></img>)
        }
    }
    return stars
    // Got help from AI to write the syntax for this looping of rating
}


  return (
    <div className="rev-container">

        <div className="quotes">
            <img src="./images/quotes-icon.svg"/>
        </div>
        
        <div className="img-container">
            {showRating(testimonial.starRating)}
        </div>

        <div className="rev-text">
            <p>{testimonial.comment}</p>
        </div>

        <div className="rev-fan">
            <img src={testimonial.avatarUrl} alt={`Picture of: ${testimonial.author}`}/>
            <div className="rev-name">
                <p className="rev-1">{testimonial.author}</p>
                <p className="rev-2">{testimonial.jobRole}</p>
            </div>
        </div>

    </div>
  )
}

export default TestimonialsItem
