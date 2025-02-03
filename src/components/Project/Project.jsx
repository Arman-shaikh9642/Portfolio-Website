import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Project One</h3>
          <p>A web app built with React, designed to enhance user experience.</p>
        </div>
        <div className="project">
          <h3>Project Two</h3>
          <p>A portfolio website built to showcase my skills and work.</p>
        </div>
        <div className="project">
          <h3>Project Three</h3>
          <p>A mobile-responsive landing page for a client project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
