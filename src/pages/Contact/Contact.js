import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact-section'>
      <a href="mailto:kanav@uoguelph.ca" target="_blank" rel="noopener noreferrer"Email>
        <img src="/images/email.png" alt="Email"/>
        <p>Email</p>
      </a>
      <a href="https://github.com/k4n4v" target="_blank" rel="noopener noreferrer"Github >
        <img src="/images/github.png" alt="GitHub"/>
        <p>GitHub</p>
      </a>
      <a href="https://www.linkedin.com/in/kanav-s/" target="_blank" rel="noopener noreferrer"LinkedIn>
        <img src="/images/linkedin.png" alt="LinkedIn"/>
        <p>LinkedIn</p>
      </a>
    </div>
  );
}
