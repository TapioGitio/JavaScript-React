import React from 'react'

function Carousel() {
  return (
    <section id="skip" className="info">
            <div className="container">
                <h2>How Does It Work?</h2>
                <div className="phone-container">
                    <div>
                        <img id="phone-3-1" src="images/phoneimg-3.1.svg" alt="A graph on a phone showing money transfers with buy-history"/>
                    </div>
                    <div>
                        <img src="images/phoneimg-3.svg" alt="A phone showing the latest transaction history"/>
                    </div>
                    <div>
                        <img id="phone-3-2" src="images/phoneimg-3.2.svg" alt="A phone showing a contact-list and the ability to send money to them"/>
                    </div>
                </div>
                <div className="info-text container">
                    <h3>Latest transaction history</h3>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
                </div>
            </div>
        </section>
  )
}

export default Carousel