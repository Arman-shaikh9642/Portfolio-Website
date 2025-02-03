import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import resume from '../../assets/resume.pdf'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        <div className="logo">
          <Link to="/" className="logo-link">
            AS
          </Link>
        </div>

       
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
            <Link to="/Blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {}
        <div className="auth-buttons">
          <a href={resume} download className="btn resume">
            Download My Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
