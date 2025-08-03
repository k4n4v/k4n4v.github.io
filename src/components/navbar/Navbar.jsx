import React, { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineFolderOpen } from "react-icons/ai";
import './navbar.css'

const sections = [
  { id: '#', selector: 'header' },
  { id: '#about', selector: 'about' },
  { id: '#experience', selector: 'experience' },
  { id: '#portfolio', selector: 'portfolio' }
];

const Navbar = () => {
  const [active, setActive] = useState('#');

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    
    if (sectionId === '#') {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const section = sections.find(s => s.id === sectionId);
      if (section) {
        const element = document.getElementById(section.selector);
        if (element) {
          const offsetTop = element.offsetTop - 80; // Account for navbar height
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = '#';
      let found = false;
      for (const section of sections.slice(1)) { // skip header
        const el = document.getElementById(section.selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            found = true;
            break;
          }
        }
      }
      // Only set to '#' if above the first section
      if (!found) {
        const firstSection = document.getElementById(sections[1].selector);
        if (firstSection && window.scrollY < firstSection.offsetTop - 80) {
          current = '#';
        } else {
          // Stay on last section if between sections
          current = active;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <nav>
      <button onClick={() => scrollToSection('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></button>
      <button onClick={() => scrollToSection('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser /></button>
      <button onClick={() => scrollToSection('#experience')} className={active === '#experience' ? 'active' : ''}><AiOutlineBook /></button>
      <button onClick={() => scrollToSection('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></button>
    </nav>
  )
}

export default Navbar