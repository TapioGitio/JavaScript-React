import React from 'react'
import BrandItem from './BrandItem'


function Brands() {


    const brandItems = [
        
        { id: 'brand-1', logo: './images/logo-icon-1.svg', altText: 'Logo ipsum logo 1'},
        { id: 'brand-2', logo: './images/logo-icon-2.svg', altText: 'Logo ipsum logo 2'},
        { id: 'brand-3', logo: './images/logo-icon-3.svg', altText: 'Logo ipsum logo 3'},
        { id: 'brand-4', logo: './images/logo-icon-4.svg', altText: 'Logo ipsum logo 4'},
        { id: 'brand-5', logo: './images/logo-icon-5.svg', altText: 'Logo ipsum logo 5'},
        { id: 'brand-6', logo: './images/logo-icon-6.svg', altText: 'Logo ipsum logo 6'},
    ]

  return (
    <section id="brands">
        <div className="container">
            {brandItems.map((brand) => (
                <BrandItem key={brand.id} item={brand} />
            ))}
        </div>
    </section>
  )
}

export default Brands