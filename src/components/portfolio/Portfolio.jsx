import React from 'react';
import './portfolio.css';
import { RxOpenInNewWindow } from "react-icons/rx";
import { projects } from "../../constants/projects.js";
import { FiFolder } from "react-icons/fi";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          [...projects].reverse().map(({ id, type, title, description, tags, source_code_link, image }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-header'>
                  <FiFolder className='portfolio__icon' />
                  {source_code_link && (
                    <div className='portfolio__links'>
                      <a href={source_code_link} target="_blank" rel="noopener noreferrer">
                        <RxOpenInNewWindow />
                      </a>
                    </div>
                  )}
                </div>
                <div className='portfolio__content'>
                  <div className='portfolio__item-info'>
                    <h5>{type}</h5>
                    <h3>{title}</h3>
                    <h5>
                      {description.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h5>
                    <div className='tags'>
                      {tags.map(tag => (
                        <h4 key={tag.name} className='tag'>{tag.name}</h4>
                      ))}
                    </div>
                  </div>
                  {image && (
                    <div className='portfolio__item-image'>
                      <img src={image} alt={title} />
                    </div>
                  )}
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;
