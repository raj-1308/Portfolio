import React from "react";
import { motion } from "framer-motion";
import "./skill.css";

const skillsData = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 88 },
  { name: "React", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "Python", percent: 75 },
];

const Skill = () => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const color = "#00c8ff"; // Single color for all skills

  return (
    <section className="skill-section" id="skills">
      <div className="skill-overlay"></div>
      <div className="skill-container">
        <motion.h2
          className="skill-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My Skills
        </motion.h2>

        <div className="skill-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="skill-circle">
                <svg>
                  {/* Background Circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="rgba(0,200,255,0.1)"
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Animated Progress Circle */}
                  <motion.circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke={color}
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{
                      strokeDashoffset:
                        circumference - (circumference * skill.percent) / 100,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: index * 0.15,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  />
                </svg>
                <div className="skill-percent">{skill.percent}%</div>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
