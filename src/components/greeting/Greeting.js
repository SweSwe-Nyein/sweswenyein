import React from 'react';

import './greeting.css';
// import CV from '../../assets/CV.pdf';
import ME from '../../assets/images/me.jpg';

const Greeting = () => {
  return (
    <section id="home">
      <div className="container greeting__container">
        <div>
          <h2 className='greet'><span class="wave">👋</span> Hello I'm</h2>
          <h1>Swe Swe Nyein</h1>
          <h2 className="text-light role">Full-stack Web Developer</h2>
          <div className="cta">
            {/* <a href={CV} download className="btn">
              Download CV
            </a> */}
            <a href="https://drive.google.com/file/d/13VHA9z9KQ6gTvymZ_VSCF4iCXnTRV7sd/view?usp=share_link" className="btn" target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Reach Me
            </a>
          </div>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;