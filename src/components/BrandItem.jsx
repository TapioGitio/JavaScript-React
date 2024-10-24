import React from 'react'

const BrandItem = ({item}) => {
  return (
    <div id= {item.id} className="brand-box">
        <img src={item.logo} alt={item.altText}/>
    </div>
  )
}

export default BrandItem