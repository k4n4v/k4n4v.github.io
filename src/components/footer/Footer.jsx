import React from 'react'
import './footer.css'

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className='footer__note'>
        <a href='https://github.com/k4n4v/Personal-Website' target="_blank" rel="noopener noreferrer">Built by Kanav Sharma</a> 
      </div>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/kanav-s/' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/k4n4v' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer