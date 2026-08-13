import React from 'react';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      name: 'ProcureIQ',
      desc: 'AI-powered procurement intelligence engine with built-in document loaders, data structures, and automated bidding algorithms.',
      langs: ['Python', 'Flask', 'AI Core', 'SQL'],
      git: 'https://github.com/aaravkhandelwal432-debug',
      color: '#f26a1b',
    },
    {
      name: 'Canvas School Web App',
      desc: 'Modern responsive web portal for Canvas International School, including admissions pipelines, school branch maps, and automated WhatsApp inquiry routing.',
      langs: ['TypeScript', 'CSS', 'JavaScript', 'HTML5'],
      git: 'https://github.com/aaravkhandelwal432-debug/CANVAS-INTERNATIONAL-SCHOOL',
      color: '#f26a1b',
    },
    {
      name: 'Aadhar Identity GUI Portal',
      desc: 'High-fidelity recreation of the UIDAI services gateway including captcha generation, administrative dashboard, and user authentication panels.',
      langs: ['React.js', 'Vite', 'Canvas API', 'CSS3'],
      git: 'https://github.com/aaravkhandelwal432-debug',
      color: '#f26a1b',
    },
    {
      name: 'Weather Telemetry Portal',
      desc: 'Real-time weather query application with interactive weather telemetry dashboard and location search.',
      langs: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
      git: 'https://github.com/aaravkhandelwal432-debug/Weather',
      color: '#f26a1b',
    },
    {
      name: 'The-Gully-Footwear',
      desc: 'Responsive web layout and front-end interface built for a footwear retail concept.',
      langs: ['HTML5', 'CSS3'],
      git: 'https://github.com/aaravkhandelwal432-debug/The-Gully-Footwear',
      color: '#ffffff',
    },
    {
      name: 'Web-Piano',
      desc: 'Interactive virtual piano supporting keyboard mapping, audio synthesize engines, and note record triggers.',
      langs: ['JavaScript', 'Web Audio API', 'CSS3'],
      git: 'https://github.com/aaravkhandelwal432-debug/Web-Piano',
      color: '#ffffff',
    },
    {
      name: 'Ask-Her-Out',
      desc: 'A lighthearted, interactive micro-app built with funny animations and dynamic coordinate button avoidance logic.',
      langs: ['HTML5', 'CSS3', 'JavaScript'],
      git: 'https://github.com/aaravkhandelwal432-debug/Ask-Her-Out',
      color: '#ffffff',
    },
    {
      name: 'Blog-page',
      desc: 'Clean and readable typography-focused blog template with post filtering cards.',
      langs: ['HTML5', 'CSS3'],
      git: 'https://github.com/aaravkhandelwal432-debug/Blog-page',
      color: '#ffffff',
    },
  ];

  return (
    <div style={styles.section}>
      <div className="container-width">
        <div style={styles.sectionHeader}>
          <span style={styles.metaTitle}>// ARCHITECTURE REGISTER</span>
          <h2 style={styles.sectionTitle}>My Portfolio</h2>
        </div>

        {/* Repos Grid */}
        <div className="projects-grid">
          {featuredProjects.map((proj, idx) => (
            <div key={idx} className="project-card" style={styles.card}>
              <div style={styles.cardTop}>
                <h4 style={{ ...styles.projName, color: proj.color === '#f26a1b' ? 'var(--accent-color)' : '#ffffff' }}>
                  {proj.name}
                </h4>
                <p style={styles.projDesc}>{proj.desc}</p>
              </div>

              <div style={styles.cardBottom}>
                <div style={styles.langList}>
                  {proj.langs.map((l, lIdx) => (
                    <span key={lIdx} style={styles.langTag}>{l}</span>
                  ))}
                </div>
                <a 
                  href={proj.git} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                  style={styles.openBtn}
                >
                  Code &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    padding: '120px 0 60px 0',
    position: 'relative',
    zIndex: 10,
  },
  sectionHeader: {
    marginBottom: '40px',
  },
  metaTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    color: 'var(--accent-color)',
    letterSpacing: '0.15em',
    display: 'block',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  card: {
    justifyContent: 'space-between',
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  projName: {
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '-0.01em',
  },
  projDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  langList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  langTag: {
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    background: 'rgba(255, 255, 255, 0.04)',
    padding: '3px 8px',
    borderRadius: '4px',
  },
  openBtn: {
    padding: '8px 16px',
    fontSize: '12px',
    borderRadius: '6px',
  },
};

export default ProjectsSection;
