import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // must match exact filename
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLock } from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

export default function About() {
  const skills = [
    { icon: <FaReact />, label: "React.js", color: "#61dafb" },
    { icon: <SiJavascript />, label: "JavaScript", color: "#f0db4f" },
    { icon: <FaNodeJs />, label: "Node.js", color: "#3c873a" },
    { icon: <SiMongodb />, label: "MongoDB", color: "#4DB33D" },
    { icon: <FaDatabase />, label: "Database", color: "#ff6f61" },
    { icon: <FaPython />, label: "Python", color: "#306998" },
    { icon: <FaLock />, label: "Cybersecurity", color: "#00c8ff" }
  ];

  return (
    <section className="about-section" id="about">
      {/* Neon Particle Background */}
      <div className="about-bg"></div>

      <div className="about-container">
        {/* Left Text Section */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-intro">
            Hi, I’m <span className="highlight">Raj Pandey</span>, a <strong>Web Developer</strong> and <strong>Cybersecurity Enthusiast</strong>.  
            I specialize in building secure, scalable, and professional digital experiences.  
            With expertise in <span className="highlight">React, Node.js, MongoDB</span> and a strong foundation in cybersecurity, I ensure my applications are efficient and safeguarded against modern digital threats.
          </p>

          {/* Skills Section */}
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={index}
                  whileHover={{ scale: 1.1, boxShadow: `0 0 25px ${skill.color}` }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <p>{skill.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
