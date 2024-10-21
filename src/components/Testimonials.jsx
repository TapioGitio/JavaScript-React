import React from 'react'

function Testimonials() {
  return (
    <section className="review">
        <div className="container">

            <div className="rev-title">
                <h2>Clients are <br/> Loving Our App</h2>
            </div>

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
                    <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                </div>

                <div className="rev-fan">
                    <img src="./images/girl-icon.svg" alt=""/>
                    <div className="rev-name">
                        <p className="rev-1">Fannie Summers</p>
                        <p className="rev-2">Designer</p>
                    </div>
                </div>

            </div>
            <div className="rev-container">
                <div className="quotes">
                    <img src="./images/quotes-icon.svg" alt=""/>
                </div>
                <div className="img-container">
                    <img src="images/star-icon.svg" alt=""/>
                    <img src="images/star-icon.svg" alt=""/>
                    <img src="images/star-icon.svg" alt=""/>
                    <img src="images/star-icon.svg" alt=""/>
                    <img src="images/star-icon.svg" alt=""/>
                </div>

                <div className="rev-text">
                    <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                </div>

                <div className="rev-fan">
                    <img src="./images/boy-icon.svg" alt=""/>
                    <div className="rev-name">
                        <p className="rev-1">Albert Flores</p>
                        <p className="rev-2">Developer</p>
                    </div>
                </div>

            </div>


        </div>
    </section>
  )
}

export default Testimonials