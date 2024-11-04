import React, { useState } from 'react'
import FeaturesItem from './FeaturesItem'

function Features() {

    const contentText = "Id mollis consectetur congue egestas egestas suspendisse blandit justo"

    const [featureCard, setFeatureCard] = useState([
        {id: "card-1", image: './images/payment-icon.svg', title: 'Easy payments', content: contentText},
        {id: "card-2", image: './images/data-icon.svg', title: 'Data Security', content: contentText},
        {id: "card-3", image: './images/cost-icon.svg', title: 'Cost Statistics', content: contentText},
        {id: "card-4", image: './images/support-icon.svg', title: 'Support 24/7', content: contentText},
        {id: "card-5", image: './images/cashback-icon.svg', title: 'Regular Cashback', content: contentText},
        {id: "card-6", image: './images/smiley-icon.svg', title: 'Top Standards', content: contentText},
    ])

  return (

    <article id="ft">
        <div className="container">
            <div id="phone-2" className="img-container">
                <img src="./images/phoneimg-2.svg" alt="Phone displaying transactions with a visa card infront"/>
            </div>
    
            <div className="card-container">
                <div className="app-title">
                    <h2>App Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Proin volutpat mollis egestas.
                        Nam luctus facilisis ultrices. Pellentesque
                        volutpat ligula est. Mattis fermentum, at nec
                        lacus.
                    </p>
                </div>
    
                <div className="cards">

                    {featureCard.map((item) => (
                        <FeaturesItem key={item.id} item={item} />
                    ))}
                    
                </div>
            </div>
        </div>
    </article>
  )
}

export default Features