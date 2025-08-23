import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>Raj Pandey</h3>
          <p>
            Web Developer | Full Stack Developer | Cybersecurity Enthusiast <br />
            Building scalable and elegant digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="footer-contact">
          <h4>Connect with me</h4>
          <div className="social-icons">
            <a href="https://github.com/raj-1308" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raj-pandey-894701298/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/Rajpandey1308" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="mailto:rajpandey6365@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Raj Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
