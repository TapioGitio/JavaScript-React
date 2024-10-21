import React from 'react'

function Features() {
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
                        <div className="card">
                            <img src="./images/payment-icon.svg" alt=""/>
                            <div className="card-text">
                                <h3>Easy Payments</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/data-icon.svg" alt=""/>
                            <div className="card-text">
                                <h3>Data Security</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/cost-icon.svg" alt=""/>
                            <div className="card-text">
                                <h3>Cost Statistics</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/support-icon.svg" alt=""/>
                            <div className="card-text">
                                <h3>Support 24/7</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/cashback-icon.svg" alt=""/>
                            <div className="card-text">
                                <h3>Regular Cashback</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="./images/smiley-icon.svg" alt=""/>
                            <div className="card-text">
                                <h3>Top Standards</h3>
                                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
  )
}

export default Features