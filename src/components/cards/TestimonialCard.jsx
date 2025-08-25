"use client";

export default function TestimonialCard({
  stars = 5,
  text,
  image,
  name,
  handle,
}) {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <div className="stars">
          {[...Array(stars)].map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </div>
        <p>{text}</p>
        <div className="profile">
          <img
            src={image}
            className="testimonial-img"
            alt={name}
            loading="lazy"
          />
          <div className="info">
            <h4>
              {name} <i className="bi bi-patch-check-fill"></i>
            </h4>
            <span>@{handle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
