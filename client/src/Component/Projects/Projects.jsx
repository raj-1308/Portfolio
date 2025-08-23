import React from "react";
import { motion } from "framer-motion";
import "./projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Xiper - Social Media Platform",
      description:
        "A unique social media app similar to Instagram/Twitter, focusing on real-time communication and community building.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "#",
    },
    {
      title: "Xipper - E-commerce Clothing Website",
      description:
        "A fully functional clothing e-commerce platform offering customizable and high-quality apparel for men, women, and kids.",
      tech: ["React", "Redux", "MongoDB", "Stripe API"],
      link: "#",
    },
    {
      title: "ERP System for Furniture Manufacturing",
      description:
        "A cloud-based ERP solution for a furniture business, including CRM, Quotation, Project Management, Inventory, Accounts, and API integrations.",
      tech: ["ERPNext", "FastAPI", "React", "MongoDB"],
      link: "#",
    },
    {
      title: "Digital Trial Room",
      description:
        "An innovative virtual try-on web app for apparel retail stores using QR code scanning, camera try-on, and Tailwind UI.",
      tech: ["React", "TailwindCSS", "MongoDB", "Express.js"],
      link: "#",
    },
    {
      title: "Python Games Collection",
      description:
        "A series of interactive games built with Python, including Chess, Snake, and Puzzle games, designed with Pygame and AI elements.",
      tech: ["Python", "Pygame"],
      link: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #00c8ff" }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
