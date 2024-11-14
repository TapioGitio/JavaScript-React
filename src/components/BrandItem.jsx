import React from 'react'

const BrandItem = ({ Brand }) => {
  return (
    <div id= {Brand.id} className="brand-box">
        <img src={Brand.logo} alt={Brand.altText}/>
    </div>
  )
}

export default BrandItem