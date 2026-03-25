import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Code, Database, Cpu, Menu, X, Smartphone, Terminal, GraduationCap, ChevronRight, BookOpen, Trophy, Sun, Moon, Send, FileText } from 'lucide-react';
import './App.css';
import profileImg from './profile.jpg';
import resumePdf from '../details/Korada_Venkata_Karthik_Resume.pdf';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Check connection.");
    }
  };

  const skills = [
    { category: 'Programming', list: 'Python, Java, C, JavaScript' },
    { category: 'Web Development', list: 'HTML, CSS, React.js, Bootstrap' },
    { category: 'Frameworks', list: 'Node.js, Express.js, Django, Flask' },
    { category: 'AI & Data', list: 'NumPy, Pandas, Matplotlib, TensorFlow' },
    { category: 'Databases', list: 'MySQL, MongoDB' },
    { category: 'Tools', list: 'Git, GitHub, VS Code, Jupyter, N8N, Airtable' }
  ];

  const projects = [
    {
      title: 'Policy Conflict & Intelligence Platform',
      desc: 'AI-powered platform to detect conflicts and duplicates in policy documents using OCR and NLP similarity detection.',
      tech: 'React, Node.js, AI Microservices',
      icon: <Database size={32} />
    },
    {
      title: 'CivicLens – Smart Issue Reporting',
      desc: 'Platform for reporting civic issues with Google Maps integration and AI-generated descriptions from GPS-tagged images.',
      tech: 'React, Google Maps API, AI/ML',
      icon: <Smartphone size={32} />,
      github: 'https://github.com/KARTHIK-11-05/civic-eye'
    },
    {
      title: 'Business Management System',
      desc: 'MEAN stack application for SMBs to manage inventory, product details, and damaged product alerts.',
      tech: 'MongoDB, Express, Angular, Node',
      icon: <Terminal size={32} />
    },
    {
      title: 'Car Showroom Management',
      desc: 'Full-stack application to manage car inventory, tracking availability, pricing, and showroom operations.',
      tech: 'MEAN Stack, REST APIs',
      icon: <Code size={32} />,
      github: 'https://github.com/KARTHIK-11-05/Car-Showroom-Mean-'
    }
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">KV<span>K</span></a>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#summary" onClick={() => setIsMenuOpen(false)}>Summary</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero full-screen">
        <div className="container hero-container">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-name">KORADA VENKATA <span>KARTHIK</span></h1>
            <p className="hero-tag">B.Tech Student (CSE - AI & ML) | Parul University</p>
            <div className="hero-social">
              <a href="https://github.com/KARTHIK-11-05" target="_blank" rel="noreferrer" className="btn-github"><Github size={20} /> GitHub</a>
              <a href="https://www.linkedin.com/in/korada-venkata-karthik-a70702326/" target="_blank" rel="noreferrer" className="btn-linkedin"><Linkedin size={20} /> LinkedIn</a>
              <a href={resumePdf} download="Korada_Venkata_Karthik_Resume.pdf" className="btn-resume"><FileText size={20} /> Resume</a>
              <a href="https://leetcode.com/u/korada_venkata_karthik/" target="_blank" rel="noreferrer" className="btn-leetcode"><Code size={20} /> LeetCode</a>
              <a href="https://www.hackerrank.com/profile/koradavenkataka1" target="_blank" rel="noreferrer" className="btn-hackerrank"><Terminal size={20} /> HackerRank</a>
              <a href="https://codolio.com/profile/K.V.Karthik" target="_blank" rel="noreferrer" className="btn-codolio"><Cpu size={20} /> Codolio</a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-img-container"
          >
            <div className="circle-image">
              <img src={profileImg} alt="Korada Venkata Karthik" />
              <div className="circle-border"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="summary" className="section-padding full-screen flex-center">
        <div className="container">
          <h2 className="section-title">Professional <span>Summary</span></h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="summary-box glass"
          >
            <p>Motivated 3rd-year B.Tech student (CSE - AI & ML) with strong foundations in Data Structures, Algorithms, and full-stack development. Experienced in building AI-driven and scalable web applications using Python, JavaScript, and modern frameworks. Passionate about solving real-world problems and developing efficient systems.</p>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section-padding secondary-bg full-screen flex-center">
        <div className="container">
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card-text glass"
              >
                <h4>{skill.category}</h4>
                <p>{skill.list}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding full-screen flex-center">
        <div className="container">
          <h2 className="section-title">Key <span>Projects</span></h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                viewport={{ once: true }}
                className="project-row glass"
              >
                <div className="project-icon-box">{project.icon}</div>
                <div className="project-detail">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div>
                    <span className="tech-badge">{project.tech}</span>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-github-link">
                        <Github size={18} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-padding secondary-bg full-screen flex-center">
        <div className="container">
          <h2 className="section-title">Education & <span>Achievements</span></h2>
          <div className="edu-achieve-grid">
            <div className="edu-box">
              <h3><BookOpen size={24} /> Education</h3>
              <div className="edu-item glass">
                <h4>Parul University (2023 - 2027)</h4>
                <p>B.Tech in CSE (AI & ML) | CGPA: 8.22</p>
              </div>
              <div className="edu-item glass">
                <h4>Viswa Jyothi Junior College (2021 - 2023)</h4>
                <p>Intermediate (12th) | 82.9%</p>
              </div>
            </div>
            <div className="achieve-box">
              <h3><Trophy size={24} /> Achievements</h3>
              <div className="achieve-item glass">
                <p>Active NCC Cadet</p>
              </div>
              <div className="achieve-item glass">
                <p>Participated in multiple Hackathons and Team Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding full-screen flex-center">
        <div className="container">
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="contact-container">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="contact-info-grid"
            >
              <div className="contact-item glass">
                <Mail className="contact-icon" />
                <div>
                  <p className="contact-label">Personal Email</p>
                  <a href="mailto:koradavenkatakarthik@gmail.com">koradavenkatakarthik@gmail.com</a>
                </div>
              </div>
              <div className="contact-item glass">
                <GraduationCap className="contact-icon" />
                <div>
                  <p className="contact-label">Official Email</p>
                  <a href="mailto:2303031460093@paruluniversity.ac.in">2303031460093@paruluniversity.ac.in</a>
                </div>
              </div>
              <div className="contact-item glass">
                <Smartphone className="contact-icon" />
                <div>
                  <p className="contact-label">Location</p>
                  <p>Srikakulam, Andhra Pradesh, India</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="contact-form glass"
              onSubmit={handleEmailSubmit}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="footer-mini">
        <div className="container">
          <p>&copy; 2024 KORADA VENKATA KARTHIK. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
