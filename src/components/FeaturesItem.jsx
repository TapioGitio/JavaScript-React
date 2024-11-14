import React from 'react'

const FeaturesItem = ({ Feature }) => {



  return (
    <div className="card">
        <img src={Feature.image} alt={Feature.title + "-icon"}/>
        <div className="card-text">
            <h3>{Feature.title}</h3>
            <p>{Feature.content}</p>
        </div>
    </div>
  )
}

export default FeaturesItem