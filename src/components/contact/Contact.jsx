"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="contact" className="contact section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Contact</span>
        <h2>Contact</h2>
        <p>
          Reach out to Mubarak Family Restaurant in Marthandam for reservations,
          events, or general inquiries. Our team is ready to assist you.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Contact Info Boxes */}
        <div className="row gy-4 mb-5">
          <ContactInfoBox
            delay={100}
            icon="bi-geo-alt"
            title="Our Address"
            lines={[
              "2-76-A2, Safiya Complex, Main Road, Marthandam, KK District, Tamilnadu - 629165, India",
            ]}
          />
          <ContactInfoBox
            delay={200}
            icon="bi-envelope"
            title="Email Address"
            lines={["mubarakhotels@yahoo.co.in"]}
          />
          <ContactInfoBox
            delay={300}
            icon="bi-headset"
            title="Hours of Operation"
            lines={["Monday - Sunday: 08:00 AM - 11:00 PM"]}
          />
        </div>
      </div>

      {/* Google Maps */}
      <div className="map-section" data-aos="fade-up" data-aos-delay="200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.514567760466!2d77.25782087548238!3d8.292500593900032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ec0a3d019eaf%3A0x3e1b8db15f3d30b8!2sMubarak%20Hotel!5e0!3m2!1sen!2sin!4v1692945600000!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="container form-container-overlap">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-lg-10">
            <div className="contact-form-wrapper">
              <h2 className="text-center mb-4">Get in Touch</h2>

              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row g-3">
                  <FormInput
                    name="name"
                    type="text"
                    icon="bi-person"
                    placeholder="Full Name"
                  />
                  <FormInput
                    name="email"
                    type="email"
                    icon="bi-envelope"
                    placeholder="Email Address"
                  />
                  <FormInput
                    name="subject"
                    type="text"
                    icon="bi-text-left"
                    placeholder="Subject"
                  />
                  <FormTextarea
                    name="message"
                    icon="bi-chat-dots message-icon"
                    placeholder="Write Message..."
                    rows={6}
                  />

                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Info Box
function ContactInfoBox({ delay, icon, title, lines }) {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="contact-info-box">
        <div className="icon-box">
          <i className={`bi ${icon}`}></i>
        </div>
        <div className="info-content">
          <h4>{title}</h4>
          {lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Form Input Component
function FormInput({ name, type, icon, placeholder }) {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <div className="input-with-icon">
          <i className={`bi ${icon}`}></i>
          <input
            type={type}
            className="form-control"
            name={name}
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </div>
  );
}

// Form Textarea Component
function FormTextarea({ name, icon, placeholder, rows }) {
  return (
    <div className="col-12">
      <div className="form-group">
        <div className="input-with-icon">
          <i className={`bi ${icon}`}></i>
          <textarea
            className="form-control"
            name={name}
            placeholder={placeholder}
            rows={rows}
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
