import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
