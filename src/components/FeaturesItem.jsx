import React from 'react'

const FeaturesItem = ({item}) => {



  return (
    <div className="card">
        <img src={item.image} alt=""/>
        <div className="card-text">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    </div>
  )
}

export default FeaturesItem