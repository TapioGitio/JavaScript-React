import React from 'react'

function ShowCase() {
  return (
        <section className="show">
            <div className="container">
                <div className="show-1">
                
                        
                    <h2>Make your money transfer simple and clear</h2>
                    

                <div className="s1-content">
                    <img src="images/circlecheck-icon.svg" alt=""/>
                    <p>Banking transactions are free for you</p>
                </div>

                <div className="s1-content" >
                    <img src="images/circlecheck-icon.svg" alt=""/>
                    <p>No monthly cash commission</p>
                </div>

                <div className="s1-content" >
                    <img src="images/circlecheck-icon.svg" alt=""/>
                    <p>Manage payments and transactions online</p>
                </div>

                <div className="btn">
                    <button className="btn-learn">
                        <span>Learn more</span>
                        <img src="./images/whitearrow.svg" alt="Learn more about how easy it is to transfer money"/>
                        </button>
                </div>
                </div>

                <div className="show-2">

                    <div className="img-container">
                        <img className="img-back" src="./images/phoneimg-4.svg" alt="showing a graph with a money transfer on a phone screen"/>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="show-3">
                    <img src="./images/phoneimg-5.svg" alt="A contact-list on a phone with a visa card infront"/>
                </div>

                <div className="show-4">

                    <h2>Receive payment from international bank details</h2>

                    <div className="bank">
                        <div className="bank-1">
                            <img src="./images/payment-icon.svg" alt=""/>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>

                        <div className="bank-1">
                            <img src="./images/cashback-icon.svg" alt=""/>
                            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>

                    <div className="btn">
                        <button className="btn-learn">
                        <span>Learn more</span>
                        <img src="./images/whitearrow.svg" alt="Learn more about managing payments online"/>
                        </button>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default ShowCase