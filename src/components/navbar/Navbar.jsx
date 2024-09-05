import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineFolderOpen, /*AiOutlineMail*/ } from "react-icons/ai";
import { useState } from 'react';

import './navbar.css'

const Navbar = () => {
  
  const [ active, setActive ] = useState('#')

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