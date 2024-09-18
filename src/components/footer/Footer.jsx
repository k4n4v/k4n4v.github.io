import React, { useState, useEffect } from 'react';
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { fetchLastUpdatedDate } from '../../utils/github'; 

const Footer = () => {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    const getLastUpdatedDate = async () => {
      const date = await fetchLastUpdatedDate('k4n4v', 'k4n4v.github.io', 'gh-pages');
      setLastUpdatedDate(date);
    };
    getLastUpdatedDate();
  }, []);

  return (
    <footer>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/kanav-s/' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/k4n4v' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      </div>
      <div className='footer__note'>
        <a href='https://github.com/k4n4v/k4n4v.github.io' target="_blank" rel="noopener noreferrer">Built by Kanav Sharma</a> 
        <p className='last-updated'>
          Last Updated: {lastUpdatedDate}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
