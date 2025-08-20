import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg"></div>

      <div className="contact-container">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I’d love to hear from you! Whether it’s a project, collaboration, job opportunity, 
          or just a friendly chat.
        </motion.p>

        <div className="contact-wrapper">
          {/* Left Side - Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3>Contact Information</h3>
            <p>📍 Mumbai, India</p>
            <p>📧 rajpandey6365@gmail.com</p>
            <p>📞 +91 98765 43210</p>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="mailto:rajpandey6365@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="btn-submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00c8ff" }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
