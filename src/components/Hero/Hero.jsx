import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Typed from 'typed.js';
import armanImage from '../../assets/arman.jpg';

const Hero = () => {
  useEffect(() => {
    const typed = new Typed('#typed-text', {
      strings: [
        'Frontend Developer',
        'React Developer',
        'JavaScript Enthusiast',
        'UI/UX Explorer',
        'Creative Coder',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    
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
      typed.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      {}
      <div className="background-effect"></div>
      
      <div className="hero-content">
        {}
        <div className="hero-text">
          <h2>Hi, I'm <span className="highlight">Arman</span></h2>
          <h3>
            I'm a <span id="typed-text"></span>
          </h3>
          <p>
            I specialize in crafting **beautiful, functional, and responsive** web applications. 
            With a passion for **modern UI/UX**, I focus on delivering seamless digital experiences.  
            Always exploring new technologies, I strive to push the limits of creativity in web development.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn primary">Explore More</Link>
            <Link to="/contact" className="btn secondary">Get in Touch</Link>
          </div>
        </div>

        {}
        <div className="hero-image">
          <img src={armanImage} alt="Arman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;