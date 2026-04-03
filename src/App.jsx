import React from 'react';
import SmoothScroller from './components/SmoothScroller';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Works from './sections/Works';
import Journey from './sections/Journey';
import Hackathons from './sections/Hackathons';
import Certifications from './sections/Certifications';
import Testimonials from './sections/Testimonials';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <SmoothScroller>
      <div className="grain-overlay"></div>
      <CustomCursor />
      <PageLoader />
      
      <main className="app-main">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Works />
        <Journey />
        <Hackathons />
        <Certifications />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </SmoothScroller>
  );
}

export default App;
