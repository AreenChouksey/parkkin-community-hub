
import React from 'react';
import './ParkingCommunity.css';

const Index = () => {
  return (
    <div className="parking-community">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <img 
                src="https://www.ewaysservices.com/images/eways.jpg" 
                alt="Eways Services" 
                className="company-logo"
              />
              <h1 className="brand-name">At Parkkin</h1>
            </div>
            <nav className="nav">
              <a href="#community" className="nav-link">Community</a>
              <a href="#features" className="nav-link">Features</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Smart Parking
                <span className="gradient-text"> Revolution</span>
              </h1>
              <p className="hero-description">
                Join our thriving community of users, vendors, and administrators 
                transforming urban parking through innovative technology solutions.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">Join Community</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Active Users</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1K+</span>
                  <span className="stat-label">Vendor Partners</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Cities</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="app-header">
                      <div className="app-title">Parkkin</div>
                      <div className="location-pin">📍</div>
                    </div>
                    <div className="map-area">
                      <div className="parking-spot available"></div>
                      <div className="parking-spot occupied"></div>
                      <div className="parking-spot available"></div>
                      <div className="parking-spot reserved"></div>
                    </div>
                    <div className="booking-card">
                      <div className="booking-info">
                        <span>Nearby Parking</span>
                        <span className="price">$5/hr</span>
                      </div>
                      <button className="book-btn">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Community</h2>
            <p className="section-description">
              Connecting everyone in the parking ecosystem
            </p>
          </div>

          <div className="community-grid">
            {/* Users Card */}
            <div className="community-card">
              <div className="card-header">
                <div className="icon-wrapper users-icon">
                  <span>👥</span>
                </div>
                <h3>Users</h3>
              </div>
              <div className="card-content">
                <p>
                  Drivers finding convenient, affordable parking solutions 
                  with real-time availability and seamless booking.
                </p>
                <ul className="feature-list">
                  <li>Real-time parking availability</li>
                  <li>Mobile payments & reservations</li>
                  <li>Navigation to parking spots</li>
                  <li>Community reviews & ratings</li>
                </ul>
                <button className="card-btn">Join as User</button>
              </div>
            </div>

            {/* Vendors Card */}
            <div className="community-card">
              <div className="card-header">
                <div className="icon-wrapper vendors-icon">
                  <span>🏢</span>
                </div>
                <h3>Vendors</h3>
              </div>
              <div className="card-content">
                <p>
                  Parking lot owners and operators maximizing revenue 
                  through smart management and digital solutions.
                </p>
                <ul className="feature-list">
                  <li>Revenue optimization tools</li>
                  <li>Real-time occupancy monitoring</li>
                  <li>Automated pricing strategies</li>
                  <li>Customer analytics dashboard</li>
                </ul>
                <button className="card-btn">Become Vendor</button>
              </div>
            </div>

            {/* Super Admins Card */}
            <div className="community-card">
              <div className="card-header">
                <div className="icon-wrapper admins-icon">
                  <span>⚙️</span>
                </div>
                <h3>Super Admins</h3>
              </div>
              <div className="card-content">
                <p>
                  System administrators managing the entire platform 
                  ecosystem with advanced controls and insights.
                </p>
                <ul className="feature-list">
                  <li>System-wide monitoring</li>
                  <li>User & vendor management</li>
                  <li>Advanced analytics & reporting</li>
                  <li>Platform configuration tools</li>
                </ul>
                <button className="card-btn">Admin Portal</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Parkkin?</h2>
            <p className="section-description">
              Advanced technology meets user-friendly design
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h4>Smart Detection</h4>
              <p>AI-powered sensors detect parking availability in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h4>Mobile First</h4>
              <p>Intuitive mobile app for seamless parking experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h4>Secure Payments</h4>
              <p>Multiple payment options with bank-level security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Analytics</h4>
              <p>Comprehensive insights for better decision making</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Parking?</h2>
            <p>Join thousands of satisfied users and vendors in our growing community</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Started Today</button>
              <button className="btn btn-outline">Schedule Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img 
                  src="https://www.ewaysservices.com/images/eways.jpg" 
                  alt="Eways Services" 
                  className="footer-logo-img"
                />
                <span>At Parkkin</span>
              </div>
              <p>Revolutionizing urban parking through smart technology</p>
            </div>
            <div className="footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="#users">Users</a></li>
                <li><a href="#vendors">Vendors</a></li>
                <li><a href="#admins">Super Admins</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#docs">Documentation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Eways Services Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
