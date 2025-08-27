"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Location() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="location" className="location section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {/* Map */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.514567760466!2d77.25782087548238!3d8.292500593900032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ec0a3d019eaf%3A0x3e1b8db15f3d30b8!2sMubarak%20Hotel!5e0!3m2!1sen!2sin!4v1692945600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Info Cards */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div className="info-container">
              <div className="section-header">
                <h2>Find Us</h2>
                <p>Visit Us Today</p>
              </div>

              <InfoCard
                icon="bi-geo-alt"
                title="Our Location"
                content={
                  <p>
                    2-76-A2, Safiya Complex, Main Road, Marthandam, KK District,
                    Tamilnadu - 629165, India
                  </p>
                }
                delay={300}
              />
              <InfoCard
                icon="bi-telephone"
                title="Reservations"
                content={
                  <>
                    <p>+91 4651 270 999</p>
                    <p className="small-text">
                      We recommend making reservations at least 48 hours in
                      advance
                    </p>
                  </>
                }
                delay={400}
              />
              <InfoCard
                icon="bi-clock"
                title="Hours"
                content={
                  <div className="hours-grid">
                    <div className="day">Monday - Sunday</div>
                    <div className="time">08:00 AM - 11:00 PM</div>
                  </div>
                }
                delay={500}
              />

              {/* CTA Buttons */}
              <div
                className="cta-wrapper"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a href="#book-a-table" className="btn-book">
                  Make a Reservation
                </a>
                <a href="#contact" className="btn-contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// InfoCard Component
function InfoCard({ icon, title, content, delay }) {
  return (
    <div className="info-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="info-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="info-content">
        <h3>{title}</h3>
        {content}
      </div>
    </div>
  );
}
