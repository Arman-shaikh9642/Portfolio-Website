import React, { useEffect, useState } from 'react';
import './About.css';
import aboutImage from '../../assets/arman.jpg'; 

const About = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        
        
        <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div>

        
        <div className="about-content">
          <h2>About <span className="highlight">Me</span></h2>
          <p>
            I am a <b>passionate frontend developer</b> with a deep love for coding and creativity.  
            My journey in <b>web development</b> started with curiosity,  
            and now, I specialize in <b>building responsive, dynamic, and user-friendly websites</b>.
          </p>
          
          {}
          <h3>My Skills</h3>
          <div className="skills-grid">
            <span>⚡ HTML</span>  
            <span>⚡ CSS</span>  
            <span>⚡ JavaScript</span>  
            <span>⚡ React.js</span>  
            <span>⚡ Node.js</span>  
            <span>⚡ Python</span>  
            <span>⚡ UI/UX Design</span>  
            <span>⚡ Responsive Web Apps</span>  
          </div>

          
          <button className="btn" onClick={() => setShowProjects(!showProjects)}>
            {showProjects ? "Hide Projects" : "View My Projects"}
          </button>

          
          {showProjects && (
            <div className="projects">
  <h3>My Projects</h3>
  
  <div className="project">
    <h4>🚀 Portfolio Website</h4>
    <p>A sleek personal website </p>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
  </div>

  <div className="project">
    <h4>🔥 E-Commerce Website</h4>
    <p>A full-stack online store </p>
    <a href="https://arman-shaikh9642.github.io/My-Portfolio-Website/" target="_blank" rel="noopener noreferrer">Live Demo</a>
  </div>

  <div className="project">
    <h4>📊 Dashboard UI</h4>
    <p>A responsive admin dashboard </p>
    <a href="https://your-dashboard-link.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
  </div>
</div>

          )}

        </div>

      </div>
    </section>
  );
};

export default About;
