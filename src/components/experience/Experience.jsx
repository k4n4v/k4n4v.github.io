import React from 'react'
import './experience.css'
import { experiences } from "../../constants/experiences.js"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <section id='experience' className='experience-section'>
      <h5>My Timeline</h5>
      <h2>Experiences</h2>
      <VerticalTimeline lineColor='var(--color-white)'>
        {
          [...experiences].reverse().map(({ id, title, company_name, company_url, location, icon, iconbg, date, descriptions, achievements }) => (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'var(--color-bg-variant)', color: 'var(--color-white)' }}
              contentArrowStyle={{ borderRight: '7px solid  var(--color-bg-variant)' }}
              date={<span className="experince__date">{date}</span>}
              iconStyle={{ background: iconbg, color: '#fff' }}
              icon={
                <div className='experince__icon'>
                  <img
                    src={icon}
                    alt={company_name}
                    className="icon-image"
                  />
                </div>
              }
            >
              <h3 className="experience__title">{title}</h3>
              <a className="experience__company" href={company_url} target="_blank" rel="noopener noreferrer">
                <h4>{company_name}</h4>
              </a>
              <div className="experience__content">
                <ul className="experience__descriptions">
                  {descriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                {achievements && achievements.length > 0 && (
                  <div className="experience__achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                      {achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience