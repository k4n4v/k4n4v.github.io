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
      <a href="/#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="/#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="/#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="/#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><AiOutlineFolderOpen /></a>
    </nav>
  )
}

export default Navbar