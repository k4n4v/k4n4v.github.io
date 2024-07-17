import React from 'react'
import './header.css'
import CTA from './CTA'
import MEMOJI from '../../assets/memoji.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kanav Sharma</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MEMOJI} alt='me' />
        </div>
        <a href="mailto:kanav.12@hotmail.com" className='email'>kanav.12@hotmail.com</a>
        </div>
    </header>
  )
}

export default Header