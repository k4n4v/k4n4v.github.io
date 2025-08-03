import React from 'react';
import './header.css';
import { memoji } from "../../assets";
import HeaderSocials from './HeaderSocials';
import RESUME from '../../assets/resume.pdf'


const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__text">
          <h5>Hello👋</h5>
          <h1>I'm Kanav Sharma.</h1>
          <h5 className='text-light'>Software developer who writes code that sometimes works on the first try.</h5>
          <div className='cta'>
            <a href={RESUME} target="_blank" rel="noreferrer" className='btn btn-primary'>Resume</a>
            <a href="mailto:kanav.12@hotmail.com" className='btn'>Email</a>
          </div>
        </div>
        <div className="me">
          <img src={memoji} alt='memoji' />
        </div>
        <HeaderSocials />
        <a href="mailto:kanav.12@hotmail.com" className='email'>kanav.12@hotmail.com</a>
      </div>
    </header>
  );
};

export default Header;
