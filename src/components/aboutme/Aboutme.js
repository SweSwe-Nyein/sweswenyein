import React from 'react';
import ME from '../../assets/images/programmer.png';
// import { FaAward } from 'react-icons/fa';

import './aboutme.css';

const Aboutme = () => {
  return (
    <section id="about">
      <h3>Get to know</h3>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div>
          <div className="about_image">
            <img src={ME} alt="A Programmer" />
          </div>
        </div>
        <div>
          <p>
            I am currently working as a full-stack web developer
            in Myanmar Online Technology. I've got experience in
            front-end development, back-end development, and
            quality analysis. I love learning new things and
            enhancing my skills every day. I also love sharing
            experiences and teaching computer science to kids.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;