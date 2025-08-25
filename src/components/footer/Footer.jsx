"use client";

export default function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <div className="row gy-5">
          {/* Footer Brand & Description */}
          <div className="col-lg-4">
            <div className="footer-content">
              <a href="index.html" className="logo d-flex align-items-center">
                <img
                  src="assets/img/mubarak_logo.png"
                  alt="Mubarak Hotel Logo"
                />
              </a>
              <a href="/" className="logo d-flex align-items-center mb-4 mt-3">
                <span className="sitename">Mubarak Family Restaurant</span>
              </a>
              <p className="mb-4">
                Welcome to Mubarak Family Restaurant in Marthandam, Kanyakumari.
                Enjoy our multi-cuisine restaurant, halal dishes, and book rooms
                or events with ease.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={[
              { label: "Home", href: "/" },
              { label: "Restaurant Menu", href: "#menu" },
              { label: "Book a Table", href: "#book-a-table" },
              { label: "Event Booking", href: "#events" },
              { label: "Contact Us", href: "#contact" },
            ]}
          />

          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="footer-contact">
              <h4>Get in Touch</h4>

              <ContactItem
                icon="bi-geo-alt"
                content={
                  <>
                    Mubarak Hotel, SH 90, Marthandam
                    <br />
                    Tamil Nadu 629165, India
                  </>
                }
              />

              <ContactItem icon="bi-telephone" content="+91 4651 270 999" />
              <ContactItem icon="bi-envelope" content="info@hotelmubarak.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  © <span>{new Date().getFullYear()} Copyright</span>{" "}
                  <strong className="px-1 sitename">
                    Mubarak Family Restaurant
                  </strong>{" "}
                  <span>All Rights Reserved</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
              <div className="credits">
                Designed by{" "}
                <a href="https://dotseek.co.uk/" target="_blank">
                  DotSeek
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Footer Links Component
function FooterLinks({ title, links }) {
  return (
    <div className="col-lg-2 col-6">
      <div className="footer-links">
        <h4>{title}</h4>
        <ul>
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href}>
                <i className="bi bi-chevron-right"></i> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Contact Item Component
function ContactItem({ icon, content }) {
  return (
    <div className="contact-item">
      <div className="contact-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="contact-info">{content}</div>
    </div>
  );
}
