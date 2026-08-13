import React from 'react';
import Background3D from './Background3D';

const ProfileSection = ({ setActiveSection }) => {
  const handleContactClick = () => {
    window.open('https://www.linkedin.com/in/aarav-khandelwal-8a7506278/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/aaravkhandelwal432-debug', '_blank');
  };

  return (
    <section style={styles.section}>
      <div className="container-width" style={styles.content}>
        
        {/* Left Side: Bio & Details */}
        <div style={styles.leftCol}>
          <span style={styles.greeting}>Hi I am</span>
          <h2 style={styles.name}>Aarav Khandelwal</h2>
          <h1 style={styles.role}>AI & Web Developer</h1>
          
          {/* Social Icons (Circular outlines) */}
          <div style={styles.socialRow}>
            {/* GitHub */}
            <a 
              href="https://github.com/aaravkhandelwal432-debug" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="GitHub"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/aarav-khandelwal-8a7506278/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="LinkedIn"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.367 0 14.734zM4.943 12.248V6.169H2.542v6.08zM3.743 5.176c.82 0 1.322-.544 1.322-1.227c-.015-.697-.502-1.227-1.307-1.227c-.8 0-1.319.53-1.319 1.227c0 .683.503 1.227 1.304 1.227zm10.74 7.072v-3.487c0-1.868-.997-2.737-2.327-2.737c-1.074 0-1.547.59-1.815 1.006h-.016v-.868H7.942c.032.68 0 6.08 0 6.08h2.402V8.046c0-.225.016-.45.083-.612c.18-.45.59-.916 1.284-.916c.907 0 1.27.692 1.27 1.706v4.024z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/918209909098" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn"
              title="WhatsApp"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.907h.004c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.645M7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.69-4.98c-.202-.1-1.195-.59-1.381-.66-.18-.07-.312-.1-.442.1-.13.2-.5.63-.616.76-.11.14-.23.15-.43.05-.2-.1-.84-.31-1.597-.99-.59-.53-.98-1.18-1.096-1.38-.11-.2-.01-.3.08-.4.09-.09.2-.2.3-.3.1-.1.14-.17.2-.3.06-.14.03-.26-.01-.36-.04-.1-.44-1.05-.6-1.45-.16-.39-.32-.33-.44-.33-.11 0-.24-.01-.37-.01-.13 0-.34.05-.52.23-.18.19-.69.67-.69 1.63s.7 1.89.8 2.03c.1.14 1.38 2.11 3.35 2.96.47.2 1.01.22 1.4.19.43-.06 1.19-.49 1.36-1.06.17-.57.17-1.06.12-1.16-.05-.1-.18-.15-.39-.25"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:aaravkhandelwal432@gmail.com" 
              className="social-icon-btn"
              title="Email"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </a>
          </div>

          {/* Hire Me & Download Buttons */}
          <div style={styles.btnRow}>
            <button className="btn-primary" onClick={handleContactClick}>
              Hire Me
            </button>
            <button className="btn-secondary" onClick={handleGitHubClick}>
              Download CV
            </button>
          </div>

          {/* Stats Bar Component */}
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-num">1+</span>
              <span className="stat-desc">Years<br />Experiences</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-desc">Projects<br />Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-desc">Decrypted<br />Certifications</span>
            </div>
          </div>
        </div>

        {/* Right Side: Circular 3D WebGL Canvas Portrait */}
        <div style={styles.rightCol}>
          <div className="circle-avatar-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={`${import.meta.env.BASE_URL}photo.png`} 
              alt="Aarav Khandelwal" 
              style={{
                width: '520px',
                height: '560px',
                objectFit: 'contain',
                zIndex: 3,
                position: 'absolute',
                bottom: '40px',
                filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.85)) drop-shadow(0 0 15px rgba(242, 106, 27, 0.45))',
              }} 
            />
            <Background3D />
          </div>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '100px', // spacing below absolute navbar
    position: 'relative',
    zIndex: 10,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap-reverse', // wraps on mobile to stack
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1.1',
    minWidth: '320px',
  },
  greeting: {
    fontSize: '20px',
    fontWeight: '500',
    color: 'var(--text-main)',
    marginBottom: '8px',
  },
  name: {
    fontSize: '38px',
    fontWeight: '700',
    color: 'var(--text-main)',
    marginBottom: '16px',
    letterSpacing: '-0.02em',
  },
  role: {
    fontSize: '68px',
    fontWeight: '900',
    color: 'var(--accent-color)', // Bright orange
    lineHeight: '1.05',
    marginBottom: '32px',
    letterSpacing: '-0.03em',
  },
  socialRow: {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
  },
  btnRow: {
    display: 'flex',
    gap: '20px',
  },
  rightCol: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '400px',
    '@media (max-width: 500px)': {
      minWidth: '100%',
    },
  },
};

export default ProfileSection;
