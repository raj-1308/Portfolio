import React, { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
    closed: { x: "-100%", opacity: 0 },
  };

  return (
    <motion.nav
      className="navbar-container"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-inner container">
        {/* Logo */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
        >
          <span className="logo-gradient">RajX</span>
        </motion.div>

        {/* Desktop Links */}
        <ul className="nav-links d-none d-md-flex">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <div className={`hamburger d-md-none ${active ? "active" : ""}`} onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        className="mobile-menu d-md-none"
        initial="closed"
        animate={active ? "open" : "closed"}
        variants={menuVariants}
      >
        <li onClick={() => setActive(false)}><a href="#home">Home</a></li>
        <li onClick={() => setActive(false)}><a href="#about">About</a></li>
        <li onClick={() => setActive(false)}><a href="#projects">Projects</a></li>
        <li onClick={() => setActive(false)}><a href="#skills">Skills</a></li>
        <li onClick={() => setActive(false)}><a href="#contact">Contact</a></li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
