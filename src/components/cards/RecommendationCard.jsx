"use client";

export default function RecommendationCard({
  image,
  alt,
  chefBadge,
  title,
  price,
  description,
  preparation,
  dietaryBadges = [],
}) {
  return (
    <div className="col-lg-6">
      <div className="recommendation-card">
        <div className="recommendation-image">
          <img src={image} alt={alt} className="img-fluid" />
          {chefBadge && (
            <div className="chef-badge">
              <i className="bi bi-award"></i>
              <span>{chefBadge}</span>
            </div>
          )}
        </div>
        <div className="recommendation-content">
          <div className="recommendation-header">
            <h4>{title}</h4>
            <div className="recommendation-price">{price}</div>
          </div>
          <p>{description}</p>
          <div className="recommendation-details">
            {preparation && (
              <div className="serving-info">
                <i className="bi bi-clock"></i>
                <span>{preparation}</span>
              </div>
            )}
            <div className="dietary-info">
              {dietaryBadges.map((badge, idx) => (
                <span key={idx} className={`mini-badge ${badge.className}`}>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
