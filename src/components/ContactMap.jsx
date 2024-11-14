import React from "react";

const ContactMap = () => {
  return (
    <section className="map-page">
      <div className="container">
        <div className="map-wrapper">
          <div className="map">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49609.38802450802!2d-77.18067169189456!3d39.00192687128298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cbe77baa5f41%3A0x54579d527c71c71f!2sSuburban%20Hospital!5e0!3m2!1ssv!2sse!4v1731575301880!5m2!1ssv!2sse" loading="lazy">
          </iframe>
          </div>

          <div className="map-info">
            <div className="map-1">
              <h2 className="mb-1">Medical Center 1</h2>
              <p className="mb-1"><i className="fa-solid fa-location-dot"></i>8600 Old Georgetown Rd, Bethesda</p>
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
