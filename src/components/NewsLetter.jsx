import React from 'react'

function NewsLetter() {
  return (
    <section className="newsletter container">
        <div className="news-container">
            <div className="container">
                <div>
                    <img className="bell" src="./images/notification-icon.svg" alt="Bell icon"/>
                </div>
                <div className="news-title">
                    <h2>Subscribe to our
                    newsletter </h2>
                </div>
            </div>

            <div className="container">                   
                <form className="email-form">
                    <input className="form-input" type="email" name="email" id="email" required placeholder ="Your email" />
                    <button type="submit" className="btn-sub">Subscribe</button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default NewsLetter