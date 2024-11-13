import React from "react";

const ContactMap = () => {
  return (
    <section className="map-page">
      <div className="container">
        <div className="map-wrapper">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70181.20259462584!2d12.726743888557094!3d56.65426292427672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651bcc50131eda3%3A0xee6ad95d3ac91235!2sHalmstad%20City%20Airport!5e0!3m2!1ssv!2sse!4v1729166766314!5m2!1ssv!2sse"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="map-info">
            <div className="map-1">
              <h2 className="mb-1">Medical Center 1</h2>
              <p className="mb-1"><i className="fa-solid fa-location-dot"></i>4517 Washington Ave. Manchester, Kentucky 39495</p>
              <p className="mb-1"><i className="fa-solid fa-phone"></i>(406) 555-0120</p>
              <p><i className="fa-solid fa-clock"></i><b>Mon – Fri</b>: 9:00 am – 22:00 am </p>
              <p className="m-l"><b> Sat – Sun</b>: 9:00 am – 20:00 am</p>
            </div>
            <div className="map-2">
            <h2 className="mb-1">Medical Center 2</h2>
            <p className="mb-1"><i className="fa-solid fa-location-dot"></i>2464 Royal Ln. Mesa,New Jersey 45463</p>
            <p className="mb-1"><i className="fa-solid fa-phone"></i>(406) 544-0123</p>
            <p><i className="fa-solid fa-clock"></i><b>Mon – Fri</b>: 9:00 am – 22:00 am </p>
            <p className="m-l"><b> Sat – Sun</b>: 9:00 am – 20:00 am</p>
            </div>
            <div className="socials">
              <div className="icon-container">
                <img src="/images/facebook.svg" alt="" />
                <img src="/images/twitter.svg" alt="" />
                <img src="/images/camera.svg" alt="" />
                <img src="/images/youtube.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
