import React, { useState } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import MetricsSection from './components/MetricsSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      {/* Top Navbar HUD */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content Area */}
      <main style={styles.main}>
        {activeSection === 'home' && (
          <ProfileSection setActiveSection={setActiveSection} />
        )}
        
        {activeSection === 'portfolio' && (
          <ProjectsSection />
        )}
        
        {activeSection === 'services' && (
          <MetricsSection />
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="container-width" style={styles.footerContainer}>
          <div style={styles.footerLeft}>
            <span>AARAV KHANDELWAL &copy; {new Date().getFullYear()}</span>
          </div>
          <div style={styles.footerRight}>
            <span style={styles.accentGlow}>AI-POWERED DEV FRAMEWORK</span>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    zIndex: 5,
  },
  footer: {
    width: '100%',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '24px 0',
    backgroundColor: '#070709',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: '12px',
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  footerLeft: {
    opacity: 0.8,
  },
  footerRight: {
    opacity: 0.8,
  },
  accentGlow: {
    color: 'var(--accent-color)',
    letterSpacing: '0.05em',
  },
};

export default App;
