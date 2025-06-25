
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
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon">🚀</span>
                <span>Leading Parking Innovation</span>
              </div>
              <h1 className="hero-title">
                Smart Parking
                <span className="gradient-text"> Revolution</span>
              </h1>
              <p className="hero-description">
                Join our thriving community of users, vendors, and administrators 
                transforming urban parking through innovative technology solutions.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  <span>Join Community</span>
                  <span className="btn-icon">→</span>
                </button>
                <button className="btn btn-secondary">
                  <span className="play-icon">▶</span>
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Active Users</span>
                  <div className="stat-growth">+25%</div>
                </div>
                <div className="stat">
                  <span className="stat-number">1K+</span>
                  <span className="stat-label">Vendor Partners</span>
                  <div className="stat-growth">+40%</div>
                </div>
                <div className="stat">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Cities</span>
                  <div className="stat-growth">+60%</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="phone-mockup">
                <div className="phone-glow"></div>
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="app-header">
                      <div className="app-title">Parkkin</div>
                      <div className="app-status">
                        <span className="status-dot"></span>
                        <span>Live</span>
                      </div>
                    </div>
                    <div className="map-area">
                      <div className="parking-spot available">
                        <span className="spot-number">A1</span>
                      </div>
                      <div className="parking-spot occupied">
                        <span className="spot-number">A2</span>
                      </div>
                      <div className="parking-spot available">
                        <span className="spot-number">A3</span>
                      </div>
                      <div className="parking-spot reserved">
                        <span className="spot-number">A4</span>
                      </div>
                    </div>
                    <div className="booking-card">
                      <div className="booking-header">
                        <span>Premium Spot Available</span>
                        <span className="distance">50m away</span>
                      </div>
                      <div className="booking-info">
                        <div className="price-section">
                          <span className="price">$5</span>
                          <span className="price-unit">/hr</span>
                        </div>
                        <div className="rating">
                          <span>⭐</span>
                          <span>4.8</span>
                        </div>
                      </div>
                      <button className="book-btn">
                        <span>Book Now</span>
                        <span className="booking-arrow">→</span>
                      </button>
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
            <div className="section-badge">
              <span>Our Community</span>
            </div>
            <h2 className="section-title">Connecting Everyone in the Parking Ecosystem</h2>
            <p className="section-description">
              Three distinct user groups working together to revolutionize urban parking
            </p>
          </div>

          <div className="community-grid">
            {/* Users Card */}
            <div className="community-card users-card">
              <div className="card-glow"></div>
              <div className="card-header">
                <div className="icon-wrapper users-icon">
                  <span>👥</span>
                </div>
                <div className="card-title-section">
                  <h3>Users</h3>
                  <span className="user-count">50K+ Active</span>
                </div>
              </div>
              <div className="card-content">
                <p>
                  Drivers finding convenient, affordable parking solutions 
                  with real-time availability and seamless booking.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="feature-icon">📍</span>
                    Real-time parking availability
                  </li>
                  <li>
                    <span className="feature-icon">💳</span>
                    Mobile payments & reservations
                  </li>
                  <li>
                    <span className="feature-icon">🗺️</span>
                    Navigation to parking spots
                  </li>
                  <li>
                    <span className="feature-icon">⭐</span>
                    Community reviews & ratings
                  </li>
                </ul>
                <button className="card-btn">
                  <span>Join as User</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>

            {/* Vendors Card */}
            <div className="community-card vendors-card">
              <div className="card-glow"></div>
              <div className="card-header">
                <div className="icon-wrapper vendors-icon">
                  <span>🏢</span>
                </div>
                <div className="card-title-section">
                  <h3>Vendors</h3>
                  <span className="user-count">1K+ Partners</span>
                </div>
              </div>
              <div className="card-content">
                <p>
                  Parking lot owners and operators maximizing revenue 
                  through smart management and digital solutions.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="feature-icon">📈</span>
                    Revenue optimization tools
                  </li>
                  <li>
                    <span className="feature-icon">📊</span>
                    Real-time occupancy monitoring
                  </li>
                  <li>
                    <span className="feature-icon">🤖</span>
                    Automated pricing strategies
                  </li>
                  <li>
                    <span className="feature-icon">📋</span>
                    Customer analytics dashboard
                  </li>
                </ul>
                <button className="card-btn">
                  <span>Become Vendor</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>

            {/* Super Admins Card */}
            <div className="community-card admins-card">
              <div className="card-glow"></div>
              <div className="card-header">
                <div className="icon-wrapper admins-icon">
                  <span>⚙️</span>
                </div>
                <div className="card-title-section">
                  <h3>Super Admins</h3>
                  <span className="user-count">Elite Access</span>
                </div>
              </div>
              <div className="card-content">
                <p>
                  System administrators managing the entire platform 
                  ecosystem with advanced controls and insights.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="feature-icon">🔍</span>
                    System-wide monitoring
                  </li>
                  <li>
                    <span className="feature-icon">👥</span>
                    User & vendor management
                  </li>
                  <li>
                    <span className="feature-icon">📈</span>
                    Advanced analytics & reporting
                  </li>
                  <li>
                    <span className="feature-icon">⚙️</span>
                    Platform configuration tools
                  </li>
                </ul>
                <button className="card-btn">
                  <span>Admin Portal</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Advanced Features</span>
            </div>
            <h2 className="section-title">Why Choose Parkkin?</h2>
            <p className="section-description">
              Cutting-edge technology meets intuitive design for the perfect parking experience
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🚗</div>
              </div>
              <h4>Smart Detection</h4>
              <p>AI-powered sensors detect parking availability in real-time with 99.9% accuracy</p>
              <div className="feature-badge">AI Powered</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📱</div>
              </div>
              <h4>Mobile First</h4>
              <p>Intuitive mobile app designed for seamless parking experience on any device</p>
              <div className="feature-badge">Cross Platform</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">💳</div>
              </div>
              <h4>Secure Payments</h4>
              <p>Multiple payment options with bank-level encryption and instant processing</p>
              <div className="feature-badge">Bank Grade</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📊</div>
              </div>
              <h4>Analytics</h4>
              <p>Comprehensive insights and predictive analytics for smarter parking decisions</p>
              <div className="feature-badge">Predictive</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-background">
          <div className="cta-particles"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span>🎯</span>
              <span>Ready to Get Started?</span>
            </div>
            <h2>Transform Your Parking Experience Today</h2>
            <p>Join thousands of satisfied users and vendors in our growing community</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <span>Get Started Free</span>
                <span className="btn-icon">🚀</span>
              </button>
              <button className="btn btn-outline">
                <span className="calendar-icon">📅</span>
                <span>Schedule Demo</span>
              </button>
            </div>
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">🔒</span>
                <span>Enterprise Security</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <span>99.9% Uptime</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">🏆</span>
                <span>Award Winning</span>
              </div>
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
              <p>Revolutionizing urban parking through smart technology and innovative solutions.</p>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Facebook</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="#users">Users</a></li>
                <li><a href="#vendors">Vendors</a></li>
                <li><a href="#admins">Super Admins</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><a href="#mobile">Mobile App</a></li>
                <li><a href="#web">Web Platform</a></li>
                <li><a href="#api">Developer API</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Eways Services Private Limited. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
