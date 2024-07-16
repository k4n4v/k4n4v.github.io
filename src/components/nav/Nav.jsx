import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineFolderOpen, AiOutlineMail } from "react-icons/ai";

import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><AiOutlineBook /></a>
      <a href="#portfolio"><AiOutlineFolderOpen /></a>
      <a href="#contact"><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav