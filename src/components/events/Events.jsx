"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Events() {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section id="events" className="events section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <span className="description-title">Events & Parties</span>
          <h2>Events & Parties</h2>
          <p>
            Celebrate your special moments at Mubarak Family Restaurant,
            Marthandam. We host private parties, corporate events, and festive
            gatherings with exceptional dining.
          </p>
        </div>

        {/* Hero Event */}
        <div className="row">
          <div
            className="col-lg-8 mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="seasonal-hero">
              <span className="seasonal-badge">Book Now</span>
              <h2>Host Your Event With Us</h2>
              <p>
                From intimate celebrations to large parties, Mubarak Family
                Restaurant provides versatile spaces and a curated menu
                featuring South Indian, Chinese, and special Arabic halal
                dishes.
              </p>
              <div className="festival-dates">
                <i className="bi bi-calendar-event"></i>
                <span>Book Your Date Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay="200">
          <FeatureCard
            delay={250}
            imgSrc="assets/img/showcase-1.jpg"
            badgeIcon="bi-star-fill"
            badgeText="Banquet Hall"
            title="Elegant Banquet Spaces"
            description="Spacious and beautifully decorated halls suitable for weddings, parties, and corporate events."
            highlights={[
              "Indoor & Outdoor Options",
              "Customizable Seating Arrangements",
            ]}
            linkText="Book Your Event"
            linkHref="#book-a-table"
            animation="slide-right"
          />
          <FeatureCard
            delay={300}
            imgSrc="assets/img/showcase-2.jpg"
            badgeIcon="bi-award-fill"
            badgeText="Catering"
            title="Gourmet Catering"
            description="Enjoy a wide selection of cuisines prepared with fresh ingredients, including South Indian, Chinese, and Arabic halal specialties."
            highlights={["Multi-Cuisine Menu", "Personalized Menus"]}
            linkText="View Menu"
            linkHref="#menu"
            animation="slide-left"
          />
        </div>
      </div>
    </section>
  );
}

// FeatureCard Component
function FeatureCard({
  imgSrc,
  badgeIcon,
  badgeText,
  title,
  description,
  highlights,
  linkText,
  linkHref,
  animation,
  delay,
}) {
  return (
    <div className="col-lg-6" data-aos={animation} data-aos-delay={delay}>
      <div
        className={`feature-card ${
          animation === "slide-right" ? "primary" : "secondary"
        }`}
      >
        <div className="feature-visual">
          <img src={imgSrc} alt={title} className="img-fluid" />
          <div className="feature-badge">
            <i className={`bi ${badgeIcon}`}></i>
            <span>{badgeText}</span>
          </div>
        </div>
        <div className="feature-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="feature-highlights">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href={linkHref} className="feature-link">
            {linkText} <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
