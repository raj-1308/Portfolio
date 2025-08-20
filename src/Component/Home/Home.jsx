import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./home.css";
import rajImg from "../../assets/white.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home" id="home">
      {/* Neon Particle Background */}
      <div className="neon-bg"></div>

      <div className="home-container">
        {/* Left Section - Text */}
        <motion.div
          className="home-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="home-title">
            Hello, I'm <span className="highlight">Raj Pandey</span>
          </h1>

          {/* Typewriter Effect */}
          <h2 className="typewriter">
            <TypeAnimation
              sequence={[
                "Web Developer 💻", 2000,
                "Full Stack Developer 🌐", 2000,
                "Cybersecurity Enthusiast 🔐", 2000,
              ]}
              wrapper="span"
              speed={50}
              className="typing-text"
              repeat={Infinity}
            />
          </h2>

          <p className="tagline">
            Building scalable, elegant, and user-friendly digital experiences.
          </p>
          <p className="description">
            Passionate about creating modern applications with clean UI and smooth UX.
            Skilled in <strong>React</strong>, <strong>Node.js</strong>, databases, and cloud integrations.
            Enthusiastic about <strong>cybersecurity</strong> and secure coding practices.
          </p>

          {/* Buttons */}
          <div className="btn-group">
            <motion.a
              href="#contact"
              className="btn primary-btn"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00c8ff" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="cv.html"
              className="btn secondary-btn"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00c8ff" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/raj-1308" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/raj-pandey-894701298/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Rajpandey1308" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          className="home-img"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={rajImg}
            alt="Raj Pandey"
            className="profile-img"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 0px 60px rgba(0, 200, 255, 0.9)",
              rotate: 2,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
