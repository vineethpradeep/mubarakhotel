"use client";

export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      {/* Hero Background Video */}
      <div className="hero-background">
        <video autoPlay muted loop playsInline>
          <source src="assets/img/video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-text" data-aos="fade-up" data-aos-delay="100">
              <span className="tagline">
                Welcome to Mubarak Family Restaurant
              </span>
              <h1 className="hero-title">
                Experience Comfort & Culinary Delight
              </h1>
              <p className="hero-description">
                Located in Marthandam, Kanyakumari, Mubarak Family Restaurant is
                renowned for its multi-cuisine restaurant, halal specialties,
                and luxurious room bookings. Enjoy South Indian, Chinese, and
                Arabic dishes crafted with passion. Perfect for parties, events,
                and unforgettable dining experiences.
              </p>

              <div
                className="hero-actions"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#book-a-table" className="btn btn-primary">
                  Book a Table
                </a>
                <a href="#menu" className="btn btn-outline">
                  View Menu
                </a>
              </div>

              <div
                className="hero-features"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="feature-item">
                  <i className="bi bi-clock"></i>
                  <div className="feature-text">
                    <span className="label">Open Daily</span>
                    <span className="value">8:00 AM - 11:00 PM</span>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="bi bi-geo-alt"></i>
                  <div className="feature-text">
                    <span className="label">Location</span>
                    <span className="value">Marthandam, Kanyakumari, TN</span>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="bi bi-telephone"></i>
                  <div className="feature-text">
                    <span className="label">Reservations</span>
                    <span className="value">+91 4651 270 999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="booking-card"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3>Make a Reservation</h3>
              <form
                action="forms/book-a-table.php"
                method="post"
                className="php-email-form"
              >
                <div className="row gy-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <select name="people" className="form-control" required>
                      <option value="">Guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Special requests or dietary restrictions"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your reservation request has been sent. We'll contact you
                      shortly!
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="400">
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}
