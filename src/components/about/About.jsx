import './about.css'
import { me } from '../../assets'

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
          <p>Hey there and welcome to my corner of the internet! I’m currently a software developer at Boeing, originally from Toronto but now in Montreal. I graduated with a Bachelor of Engineering in Computer Engineering from the University of Guelph, and now spend my days writing code that sometimes works on the first try. I’m into all things tech, love attempting to solve problems, and I’m always down to learn something new or hear cool ideas.</p>
          <p>When I’m not staring at VS Code, you can find me messing around with my DJ controller (still very much a work in progress), throwing heavy circles around (aka lifting weights), binge-watching car and F1 videos on YouTube, out playing basketball, golf, volleyball, or just enjoying nature. Basically anything that makes me look athletic or gives me a break from the screen.</p>
          <div className="about__cards">
            <article className='about__card'>
            <span className='about__icon'>🎓</span>
              <h5>Computer Engineering</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <span className='about__icon'>🧑‍💻</span>
              <h5>Software Developer</h5>
              <small>@ Boeing</small>
            </article>
            <article className='about__card'>
              <span className='about__icon'>🌎</span>
              <h5>Montreal, Canada</h5>
              <small></small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About