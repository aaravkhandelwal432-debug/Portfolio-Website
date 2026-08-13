import React, { useState, useEffect, useRef } from 'react';

const MetricsSection = () => {
  const [inputVal, setInputVal] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'Biometric interface deck online.',
    'System parameters: OPTIMAL.',
    'Type "help" to display terminal utility paths.',
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  const services = [
    {
      title: 'UI/UX & Frontend Design',
      desc: 'Building responsive, premium, interactive web applications using React.js, Vite, and Three.js for 3D graphic systems.',
      icon: '🧬',
    },
    {
      title: 'Backend & Data Orchestration',
      desc: 'Developing fast, production-ready REST APIs, server logic, and structured database managers using Python, Flask, and Node.js.',
      icon: '⚙️',
    },
    {
      title: 'AI Engineering & Tools',
      desc: 'Integrating Large Language Models, prompt routing engines, and automated AI data handlers (such as ProcureIQ) into client portals.',
      icon: '🧠',
    },
  ];

  const certifications = [
    { 
      title: 'Red Hat System Administration I (RH124) - Ver. 10', 
      issuer: 'Red Hat', 
      date: 'July 06, 2026', 
      link: 'https://www.credly.com/badges/72d147c3-6e6d-44d3-bf00-e7fa152f6e7f' 
    },
    { 
      title: 'Python Skill Assessment (Score: 96.86%)', 
      issuer: 'Scaler Topics', 
      date: 'July 02, 2026', 
      link: 'https://moonshot.scaler.com/s/sl/5-xjmraMT7' 
    },
    { 
      title: 'IT Specialist - HTML and CSS', 
      issuer: 'Pearson', 
      date: '2025' 
    },
    { 
      title: 'AWS - Solutions Architecture Job Simulation', 
      issuer: 'Amazon Web Services (AWS)', 
      date: '2025' 
    },
    { 
      title: 'Introduction to Prompt Engineering with Github Copilot', 
      issuer: 'Microsoft', 
      date: '2025' 
    },
    { 
      title: 'Campus Ambassador Internship (IIT Delhi - Rendezvous)', 
      issuer: 'IIT Delhi / Internshala', 
      date: 'Sept 08, 2025', 
      desc: 'Certificate ID: anq7m8je1q7',
      link: 'https://internshala.com/verify_certificate' 
    },
  ];

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response = [];
    switch (cmd) {
      case 'help':
        response = [
          `> ${inputVal}`,
          'Available commands:',
          '  help      - List terminal utility paths',
          '  clear     - Wipe out cognitive log history',
          '  skills    - Decrypt skill modules',
          '  whoami    - Reveal profile identity header',
        ];
        break;
      case 'clear':
        setTerminalLogs([]);
        setInputVal('');
        return;
      case 'whoami':
        response = [
          `> ${inputVal}`,
          'IDENTITY DECKS ACTIVE:',
          '  NAME : Aarav Khandelwal',
          '  ROLE : AI & Web Developer',
          '  STUDY: B.Tech in CSE (AI & ML) - Parul University',
          '  GPA  : 7.40 / 10.0',
        ];
        break;
      case 'skills':
        response = [
          `> ${inputVal}`,
          'DECRYPTED COGNITIVE DECK:',
          '  LANGS: Python, SQL, C++, HTML5, CSS3, JavaScript, TypeScript',
          '  ML/AI: TensorFlow, PyTorch, OpenCV, NumPy, Deep Learning',
          '  TOOLS: Git, VS Code, Canva, Photoshop',
        ];
        break;
      default:
        response = [
          `> ${inputVal}`,
          `sysErr: Command "${cmd}" not recognized.`,
        ];
    }

    setTerminalLogs((prev) => [...prev, ...response]);
    setInputVal('');
  };

  return (
    <div style={styles.section}>
      <div className="container-width">
        <div style={styles.sectionHeader}>
          <span style={styles.metaTitle}>// SERVICES & CAPABILITIES</span>
          <h2 style={styles.sectionTitle}>What I Offer</h2>
        </div>

        {/* Services / Core Skills */}
        <div style={styles.servicesGrid}>
          {services.map((s, idx) => (
            <div key={idx} style={styles.serviceCard}>
              <span style={styles.serviceIcon}>{s.icon}</span>
              <h3 style={styles.serviceTitle}>{s.title}</h3>
              <p style={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Double Column: Certs & Terminal */}
        <div style={styles.columns}>
          {/* Certifications Card Panel */}
          <div style={styles.certsCol}>
            <h3 style={styles.subHeading}>&gt; Certifications</h3>
            <div style={styles.certsList}>
              {certifications.map((c, i) => (
                <div 
                  key={i} 
                  style={{
                    ...styles.certItem,
                    cursor: c.link ? 'pointer' : 'default',
                  }}
                  onClick={() => c.link && window.open(c.link, '_blank')}
                >
                  <div style={styles.certHeader}>
                    <span style={styles.certIssuer}>{c.issuer}</span>
                    <span style={styles.certDate}>{c.date}</span>
                  </div>
                  <h4 style={styles.certTitle}>{c.title}</h4>
                  {c.desc && <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>{c.desc}</p>}
                  {c.link && (
                    <span style={{ fontSize: '11px', color: 'var(--accent-color)', display: 'block', marginTop: '6px', fontWeight: '500' }}>
                      Verify Certificate &gt;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Shell Terminal */}
          <div style={styles.terminalCol}>
            <h3 style={styles.subHeading}>&gt; Cognitive Shell</h3>
            <div style={styles.terminalBox}>
              <div style={styles.terminalBody}>
                {terminalLogs.map((log, i) => (
                  <div key={i} style={styles.logLine}>{log}</div>
                ))}
                <div ref={terminalEndRef} />
              </div>
              <form onSubmit={handleCommandSubmit} style={styles.inputForm}>
                <span style={styles.prompt}>$&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command (help, skills)..."
                  style={styles.terminalInput}
                />
              </form>
            </div>
          </div>
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
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    marginBottom: '64px',
  },
  serviceCard: {
    backgroundColor: 'var(--bg-panel)',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'all 0.2s ease',
  },
  serviceIcon: {
    fontSize: '32px',
  },
  serviceTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
  },
  serviceDesc: {
    fontSize: '14px',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '40px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  subHeading: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '24px',
  },
  certsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  certItem: {
    backgroundColor: 'var(--bg-panel)',
    border: '1px solid var(--border-color)',
    borderRadius: '10px',
    padding: '20px 24px',
    borderLeft: '3px solid var(--accent-color)',
  },
  certHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    marginBottom: '6px',
  },
  certIssuer: {
    color: 'var(--accent-color)',
  },
  certDate: {
    opacity: 0.6,
  },
  certTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
  },
  terminalCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  terminalBox: {
    backgroundColor: '#070709',
    border: '1px solid var(--border-color)',
    borderRadius: '12px',
    padding: '20px',
    height: '320px',
    display: 'flex',
    flexDirection: 'column',
  },
  terminalBody: {
    flexGrow: 1,
    overflowY: 'auto',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--accent-color)',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '12px',
  },
  logLine: {
    whiteSpace: 'pre-wrap',
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '12px',
  },
  prompt: {
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    color: 'var(--accent-color)',
    fontWeight: 'bold',
  },
  terminalInput: {
    flexGrow: 1,
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#ffffff',
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    caretColor: 'var(--accent-color)',
  },
};

export default MetricsSection;
