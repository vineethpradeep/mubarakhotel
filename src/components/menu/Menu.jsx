"use client";

import MenuCard from "@/components/cards/MenuCard";
import RecommendationCard from "@/components/cards/RecommendationCard";

export default function Menu() {
  const menuItems = [
    {
      image: "assets/img/menu/starter-1.jpg",
      alt: "South Indian Starter",
      badges: [{ label: "V", className: "badge-vegetarian" }],
      price: "₹250",
      title: "Masala Dosa",
      description:
        "Crispy rice crepe filled with spiced potato masala, served with coconut chutney and sambar.",
      spiceLevel: 2,
      category: "filter-starters",
    },
    {
      image: "assets/img/menu/main-2.jpg",
      alt: "Chinese Main Course",
      badges: [{ label: "Chef's Choice", className: "badge-chef" }],
      price: "₹450",
      title: "Kung Pao Chicken",
      description:
        "Stir-fried chicken with peanuts, vegetables, and spicy Sichuan sauce, a perfect blend of flavors.",
      spiceLevel: 3,
      featured: true,
      category: "filter-main",
    },
    {
      image: "assets/img/menu/main-3.jpg",
      alt: "Arabic Special",
      badges: [{ label: "Halal", className: "badge-halal" }],
      price: "₹600",
      title: "Chicken Shawarma Platter",
      description:
        "Tender marinated chicken served with garlic sauce, salad, and warm pita bread.",
      spiceLevel: 2,
      category: "filter-main",
    },
  ];

  const recommendations = [
    {
      image: "assets/img/menu/main-2.jpg",
      alt: "Chef Recommendation",
      chefBadge: "Chef's Pick",
      title: "Hyderabadi Biryani",
      price: "₹500",
      description:
        "Aromatic basmati rice layered with tender meat and traditional spices, slow-cooked to perfection.",
      preparation: "40 min preparation",
      dietaryBadges: [{ label: "Halal", className: "badge-halal" }],
    },
    {
      image: "assets/img/menu/main-3.jpg",
      alt: "Chef Recommendation",
      chefBadge: "Chef's Pick",
      title: "Paneer Butter Masala",
      price: "₹350",
      description:
        "Cottage cheese cubes simmered in rich tomato-based gravy with butter and cream, a vegetarian delight.",
      preparation: "20 min preparation",
      dietaryBadges: [{ label: "V", className: "badge-vegetarian" }],
    },
  ];

  return (
    <section id="menu" className="menu section light-background">
      <div className="container section-title" data-aos="fade-up">
        <span className="description-title">Menu</span>
        <h2>Our Specialties</h2>
        <p>
          Explore the diverse flavors at Mubarak Family Restaurant – from South
          Indian classics to Chinese delights and authentic Arabic halal dishes.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div
            className="menu-filters isotope-filters mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ul>
              <li data-filter="*" className="filter-active">
                All Dishes
              </li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-main">Main Courses</li>
              <li data-filter=".filter-dessert">Desserts</li>
              <li data-filter=".filter-drinks">Beverages</li>
            </ul>
          </div>

          <div
            className="menu-grid isotope-container row gy-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {menuItems.map((item, idx) => (
              <MenuCard key={idx} {...item} />
            ))}
          </div>

          <div className="menu-actions" data-aos="fade-up" data-aos-delay="400">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="seasonal-notice">
                  <i className="bi bi-info-circle"></i>
                  <span>
                    Our menu features seasonal specialties and fresh
                    ingredients, ensuring an authentic and flavorful experience.
                  </span>
                </div>
              </div>
              <div className="col-md-4 text-md-end">
                <a href="#" className="menu-download-btn">
                  <i className="bi bi-download"></i>
                  <span>Download Full Menu PDF</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="chef-recommendations"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="section-header">
              <h3>
                <i className="bi bi-star-fill"></i> Chef's Recommendations
              </h3>
              <p>
                Handpicked specialties showcasing the finest flavors from South
                India, China, and Arabia.
              </p>
            </div>
            <div className="row g-4">
              {recommendations.map((rec, idx) => (
                <RecommendationCard key={idx} {...rec} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
