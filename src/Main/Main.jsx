import React, { useState,useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useCheckScreenSize from '../utils/useCheckScreenSize';
import { MainVisual, Introduction, About, Skills, Works, Contact } from '../pages';
import CopyRight from '../components/CopyRight';
import Footer from '../components/Footer';

const Main = () => {
  const isBreakpoint = useCheckScreenSize('breakpoint');
  const [activeSection, setActiveSection] = useState('Home');

  const mainVisualRef = useRef(null);
  const introductionRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;

      if (isBreakpoint) {
        if (scrollPos === 0) {
          setActiveSection('Home');
        } else if (scrollPos >= introductionRef.current.offsetTop - 130 && scrollPos < introductionRef.current.offsetTop + introductionRef.current.offsetHeight) {
          setActiveSection('Introduction');
        } else if (aboutRef.current && scrollPos >= aboutRef.current.offsetTop && scrollPos < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
          setActiveSection('About');
        } else if (skillsRef.current && scrollPos >= skillsRef.current.offsetTop  && scrollPos < skillsRef.current.offsetTop + skillsRef.current.offsetHeight) {
          setActiveSection('Skills');
        } else if (worksRef.current && scrollPos >= worksRef.current.offsetTop && scrollPos < worksRef.current.offsetTop + worksRef.current.offsetHeight) {
          setActiveSection('Works');
        } else if (contactRef.current && scrollPos >= contactRef.current.offsetTop && scrollPos < contactRef.current.offsetTop + contactRef.current.offsetHeight) {
          setActiveSection('Contact');
        }
      } else {
        // Set the activeSection based on scroll position
        if (mainVisualRef.current && scrollPos >= mainVisualRef.current.offsetTop && scrollPos < mainVisualRef.current.offsetTop + mainVisualRef.current.offsetHeight) {
          setActiveSection('Home');
        } else if (introductionRef.current  && scrollPos >= introductionRef.current.offsetTop && scrollPos < introductionRef.current.offsetTop + introductionRef.current.offsetHeight) {
          setActiveSection('Introduction');
        } else if (aboutRef.current && scrollPos >= aboutRef.current.offsetTop && scrollPos < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
          setActiveSection('About');
        } else if (skillsRef.current && scrollPos >= skillsRef.current.offsetTop && scrollPos < skillsRef.current.offsetTop + skillsRef.current.offsetHeight) {
          setActiveSection('Skills');
        } else if (worksRef.current && scrollPos >= worksRef.current.offsetTop && scrollPos < worksRef.current.offsetTop + worksRef.current.offsetHeight) {
          setActiveSection('Works');
        } else if (contactRef.current && scrollPos >= contactRef.current.offsetTop && scrollPos < contactRef.current.offsetTop + contactRef.current.offsetHeight) {
          setActiveSection('Contact');
        } 
        
      }
    };

    console.log("Active Section:", activeSection);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBreakpoint, activeSection]);

  let textColor, borderColor;   
  switch(activeSection) {
    case 'Contact':
      textColor = 'text-accent';
      borderColor = 'border-accent'
      break;
    default:
      textColor = 'text-primary';
      borderColor = 'border-primary'
  }

  return (
   <BrowserRouter>
      <main>
          <Navbar activeSection={activeSection} />
          <CopyRight textColor={textColor} borderColor={borderColor}/>
          <div ref={mainVisualRef}>
            <MainVisual introductionRef={introductionRef} />
          </div>
            {!isBreakpoint && <div ref={introductionRef}><Introduction /></div>}
          <div ref={aboutRef}><About  /></div>
          <div ref={skillsRef}><Skills  /></div>
          <div ref={worksRef}><Works  /></div>
          <div ref={contactRef}><Contact  /></div>
          <Footer />
      </main>
    </BrowserRouter>
  )
}

export default Main