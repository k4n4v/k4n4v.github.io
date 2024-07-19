import React from 'react'
import './about.css'
import { me } from '../../assets'
import { FaAward, FaUsers, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={me} alt='memoji' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experince</h5>
              <small>3+ working experince</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima deleniti voluptatem consequuntur omnis, nihil totam, illum nulla tenetur consequatur sed maiores mollitia reprehenderit suscipit quibusdam voluptates saepe, laborum minus ipsam.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About