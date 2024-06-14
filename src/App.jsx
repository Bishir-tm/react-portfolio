import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './App.css';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
const App = () => {

  return (
    <div className="border-0 p-0 m-0">
              <div className="bg-opacity-50 bg-primary" >
        <Navbar />    
        <HeroSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
