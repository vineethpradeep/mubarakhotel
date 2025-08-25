"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BookATable() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="book-a-table"
      className="book-a-table section light-background"
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <div className="reservation-container">
              <div className="row g-0">
                {/* Reservation Form */}
                <div
                  className="col-lg-5"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="reservation-form-section">
                    <div className="form-header text-center">
                      <h3>Book Your Table</h3>
                      <p>
                        Enjoy a memorable dining experience at Hotel Mubarak.
                        Choose your date and time to savor South Indian,
                        Chinese, or Arabic halal specialties.
                      </p>
                    </div>

                    <form className="php-email-form" role="form">
                      <div className="row gy-3">
                        <div className="col-12">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="date"
                            name="date"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <input
                            type="time"
                            name="time"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <select
                            name="people"
                            className="form-select"
                            required
                          >
                            <option value="">Guests</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6+ Guests</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <select name="occasion" className="form-select">
                            <option value="">Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="party">Party/Event</option>
                            <option value="business">Business Dinner</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="3"
                            placeholder="Special requests or dietary requirements"
                          ></textarea>
                        </div>
                      </div>

                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your reservation request has been submitted
                          successfully. We'll confirm your booking shortly.
                        </div>
                      </div>

                      <button type="submit" className="btn-reserve w-100">
                        <i className="bi bi-calendar-check me-2"></i>
                        Reserve Table
                      </button>
                    </form>
                  </div>
                </div>

                {/* Reservation Info / Image */}
                <div
                  className="col-lg-7"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="reservation-info-section">
                    <div className="hero-image">
                      <img
                        src="assets/img/showcase-5.jpg"
                        alt="Hotel Mubarak dining area"
                        className="img-fluid"
                      />
                      <div className="overlay-content">
                        <h4>Fine Dining & Events</h4>
                        <p>
                          Delight in a wide variety of cuisines, enjoy outdoor
                          seating, and host parties or events in our comfortable
                          spaces.
                        </p>
                      </div>
                    </div>

                    <div className="info-cards">
                      <div className="row g-3">
                        <InfoCard
                          icon="bi-clock"
                          title="Business Hours"
                          content={<>Monday - Sunday: 08:00 AM - 11:00 PM</>}
                          delay={400}
                        />
                        <InfoCard
                          icon="bi-geo-alt-fill"
                          title="Location"
                          content={
                            <>
                              Hotel Mubarak
                              <br />
                              Marthandam, Kanyakumari
                            </>
                          }
                          delay={450}
                        />
                        <InfoCard
                          icon="bi-telephone-fill"
                          title="Reservations"
                          content={
                            <>
                              +91 4651 270 999
                              <br />
                              <small>
                                Book in advance for parties & weekends
                              </small>
                            </>
                          }
                          delay={500}
                        />
                        <InfoCard
                          icon="bi-envelope-fill"
                          title="Email Us"
                          content={
                            <>
                              reservations@hotelmubarak.com
                              <br />
                              <small>We respond within 24 hours</small>
                            </>
                          }
                          delay={550}
                        />
                      </div>
                    </div>

                    <div
                      className="additional-info"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="info-highlight">
                        <i className="bi bi-star-fill"></i>
                        <span>
                          Recommended to book 2-3 days in advance, especially
                          for weekend dining and events.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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
    <div className="col-md-6" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="info-card">
        <div className="card-icon">
          <i className={`bi ${icon}`}></i>
        </div>
        <div className="card-content">
          <h5>{title}</h5>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
