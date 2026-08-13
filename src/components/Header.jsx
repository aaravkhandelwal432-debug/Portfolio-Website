import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const handleContactClick = () => {
    window.open('https://www.linkedin.com/in/aarav-khandelwal-8a7506278/', '_blank');
  };

  return (
    <header style={styles.header}>
      <div className="container-width" style={styles.headerContainer}>
        {/* LOGO */}
        <div style={styles.logo} onClick={() => setActiveSection('home')}>
          <span style={styles.logoText}>AARAV</span>
        </div>

        {/* Navigation Middle Links */}
        <nav style={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              style={styles.navButton}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleContactClick}
            className="nav-btn"
            style={styles.navButton}
          >
            Contact me
          </button>
        </nav>

        {/* Right CTA Button */}
        <div>
          <button 
            className="btn-primary" 
            style={styles.hireBtn}
            onClick={handleContactClick}
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    cursor: 'pointer',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '800',
    letterSpacing: '0.05em',
    color: 'var(--accent-color)', // Red/Orange from reference image
  },
  nav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  navButton: {
    background: 'none',
    border: 'none',
    outline: 'none',
  },
  hireBtn: {
    padding: '10px 22px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
  },
};

export default Header;
