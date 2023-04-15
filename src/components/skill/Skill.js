import React from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';
import './skill.css';

const Skill = () => {
  return (
    <section id="skill">
      <h3>The Skills I Have</h3>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>Full-Stack</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>VueJs</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>ReactJs</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>Laravel</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <BsBookmarkCheck className="experience__details-icon" />
              <h4>Web Sockets</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;