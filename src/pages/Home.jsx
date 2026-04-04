import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Services from '../sections/Services';
import Works from '../sections/Works';
import Journey from '../sections/Journey';
import Hackathons from '../sections/Hackathons';
import Certifications from '../sections/Certifications';
import Testimonials from '../sections/Testimonials';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
