import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>HTML</h3>
          <p>Building semantic web pages with the power of HTML.</p>
        </div>
        <div className="skill">
          <h3>CSS</h3>
          <p>Styling websites to create visually appealing designs.</p>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <p>Creating interactive and dynamic web pages with JavaScript.</p>
        </div>
        <div className="skill">
          <h3>React</h3>
          <p>Building modern, reactive web applications with React.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
