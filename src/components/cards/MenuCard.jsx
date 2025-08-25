"use client";

export default function MenuCard({
  image,
  alt,
  badges = [],
  price,
  title,
  description,
  spiceLevel = 0,
  featured = false,
  category,
}) {
  return (
    <div className={`col-xl-4 col-lg-6 isotope-item ${category}`}>
      <div className={`menu-card ${featured ? "featured" : ""}`}>
        <div className="menu-card-image">
          <img src={image} alt={alt} className="img-fluid" />
          <div className="dietary-badges">
            {badges.map((badge, idx) => (
              <span key={idx} className={badge.className}>
                {badge.label}
              </span>
            ))}
          </div>
          <div className="price-overlay">{price}</div>
        </div>
        <div className="menu-card-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="spice-level">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`spice-dot ${i < spiceLevel ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
