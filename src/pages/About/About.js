import React from 'react';
import './About.css';
import me from '../../assets/me.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="intro-container about-intro-container">
        <p className="heading">Hello, I'm Kanav.</p>
        <br />
        <div className="info-section">
          <div className="text">
            <p>
                I am currently a 4th year computer engineering student at the Univeristy of Guelph.
            </p>
            <br />
            <p>
                Sometimes it's just better not to be seen. That's how Harry had always lived his life.
                He prided himself as being the fly on the wall and the fae that blended into the crowd. 
                That's why he was so shocked that she noticed him.
            </p>
            <br />
            <div className="contact">
              <a href="mailto:kanav@uoguelph.ca">Email</a>
              <a href="https://github.com/k4n4v">GitHub</a>
              <a href="https://www.linkedin.com/in/kanav-s/">LinkedIn</a>
            </div>
          </div>
          <img src={me} className="pic" alt="pic of me" />
        </div>
      </div>
    </div>
  );
}
