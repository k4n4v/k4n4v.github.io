import React from 'react'
import './experience.css'
import { experiences } from "../../constants/experiences.js"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Timeline</h5>
      <h2>Experiences</h2>
      <VerticalTimeline lineColor='var(--color-white)'>
        {
          experiences.map(({ id, title, company_name, company_url, location, icon, iconbg, date, description }) => (
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
              lineColor="red"
            >
              <h3 className="experience__title">{title}</h3>
              <a href={company_url} target="_blank" rel="noopener noreferrer">
                <h4 className="experience__company">{company_name}</h4>
              </a>
              {/*<h4 className='experience__location'>{location}</h4>*/}
              <h5 className='experience__description'>{description}</h5>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience