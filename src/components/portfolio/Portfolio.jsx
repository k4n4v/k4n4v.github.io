import React from 'react'
import './portfolio.css'
import { RxOpenInNewWindow } from "react-icons/rx";
import { projects } from "../../constants/projects.js"
import { FiFolder } from "react-icons/fi";


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          projects.map(({id, title, description, tags, source_code_link}) => {
            return (
            <article key={id} className='portfolio__item'>
                <div className='portfolio__item-cta'>
                  <FiFolder className='portfolio__icon'/>
                  <div className='portfolio__links'>
                    <a href={source_code_link} target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow/></a>
                  </div>
                </div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <div className='tags'>
                  {tags.map(tag => (
                    <h4 key={tag.name} className='tag'>#{tag.name}</h4>
                  ))}
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;