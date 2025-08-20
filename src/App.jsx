import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Skills from "./Component/Skills/Skill";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      easing: "ease-in-out", 
      once: true,       // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
