import React from 'react';
import './About.css';
import me from '../../assets/me.jpg';
import Sidebar from '../../components/Sidebar/Sidebar';
import EXPERIENCES from '../../assets/experiences';
import DayOfWeek from '../../components/DayOfWeek/DayOfWeek';

export default function About() {
  return (
    <div className="about">
        <Sidebar
            items={EXPERIENCES.map((exp) => (
            <Experience
                {...exp}
                dates={[exp.dates.start, exp.dates.end]}
            />
            ))}
        ></Sidebar>
      <div className="intro-container about-intro-container">
        <p className="heading">Hey.</p>
        <br />
        <div className="info-section">
          <div className="text">
            <p>I am a fourth year Computer Engineering (Co-op) student studying at the University of Guelph. I have a passion for technology and enjoy exploring how things work!</p>
            <br />
            <p>Some of my interests:</p>
            <li>Backend Development</li>
            <li>Building computers</li>
            <li>Video games</li>
            <li>Traveling</li>
            <li>Basketball</li>
            <br />
            <p>Things I want to learn more about:</p>
            <li>Machine learning</li>
            <li>Cloud computing</li>
            <li>Web development frameworks</li>
            <li>DJing</li>
            <br />
            <br />
            <DayOfWeek></DayOfWeek>
            <div className="contact">
              <a href="mailto:kanav@uoguelph.ca" target="_blank" rel="noopener noreferrer">Email</a>
              <a href="https://github.com/k4n4v" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/kanav-s/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <img src={me} className="pic" alt="pic of me" />
        </div>
      </div>
    </div>
  );
}

function Experience({ company, dates, description, position, link }) {
    return (
      <div className="experience-container">
        <div className="experience-header">
          <a href={link} target="_blank" rel="noreferrer">
            <b>{company}</b>
          </a>
          <p className="experience-dates">{dates.join(' - ')}</p>
        </div>
        <p className="experience-position">{position}</p>
        <br />
        <p>{description}</p>
      </div>
    );
  }
  