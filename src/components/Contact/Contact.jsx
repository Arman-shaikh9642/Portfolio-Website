import React, { useEffect } from 'react';
import './Contact.css'; 

const Contact = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.setProperty('--mouse-x', `${x}%`);
      document.body.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {}
        <div className="contact-info">
          <h2>Contact <span className="highlight">Me</span></h2>
          <p>If you would like to get in touch with me, feel free to reach out via the contact details below!</p>

          <div className="contact-details">
            <p><strong>Email:</strong> example@example.com</p>
            <p><strong>Phone:</strong> +1234567890</p>
            <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
          </div>
          
          {}
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>

        {}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form action="submit" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
