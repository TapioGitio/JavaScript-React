import React from 'react'

const ContactMap = () => {
  return (
    <section className="map-page">
        <div className="container">
            <div className="map-wrapper">

                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70181.20259462584!2d12.726743888557094!3d56.65426292427672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651bcc50131eda3%3A0xee6ad95d3ac91235!2sHalmstad%20City%20Airport!5e0!3m2!1ssv!2sse!4v1729166766314!5m2!1ssv!2sse"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="map-info">
                    <div className="map-1"></div>
                    <div className="map-2"></div>
                    <div className="socials"></div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ContactMap