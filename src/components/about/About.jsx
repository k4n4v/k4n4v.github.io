import React from 'react'
import './about.css'
import { me } from '../../assets'
import { FaAward, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={me} alt='me' />
          </div>
        </div>

        <div className='about__content'>
          <p>Hey, I'm glad you found my site! I am a recent graduate based in Toronto with a degree in Computer Engineering who enjoys coding and solving problems.  I'm passionate about technology and eager to learn new things, always open-minded and interested in hearing others' stories and ideas. Outside of tech, I enjoy DJing (I’m still learning), lifting weights, watching car videos on YouTube, and playing sports like basketball, volleyball, swimming, and many more.</p>
          <div className="about__cards">
            <article className='about__card'>
            <span className='about__icon'>🎓</span>
              <h5>Computer Engineer</h5>
              <small>Bachalor of Engineering</small>
            </article>
            <article className='about__card'>
              <span className='about__icon'>🔍</span>
              <h5>~1.5 YOE</h5>
              <small>About 1.5 years of internship experinces</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About