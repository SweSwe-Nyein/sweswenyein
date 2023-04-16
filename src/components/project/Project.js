import React from 'react';
import IMG1 from '../../assets/images/shweshops.png';
import IMG2 from '../../assets/images/seinnandaw.png';
import IMG3 from '../../assets/images/kathit.png';

import './project.css';

const Project = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'ShweShops',
      img: IMG1,
      description:
        'An E-commerce Platform where you can buy gold and jewelry from stores all over Myanmar in one place',
      technologies: 'Laravel | VueJs | MySQL | MongoDB',
      link: 'https://shweshops.com/',
    },
    {
      id: 2,
      title: 'SeinNanDaw',
      img: IMG2,
      description:
        'Sein Nan Daw\'s Website written together with a senior developer',
      technologies: 'Laravel | JavaScript',
      link: 'https://seinnandaw.com/',
    },
    {
      id: 3,
      title: 'KathitFashion',
      img: IMG3,
      description: 'Online Fashion Store',
      technologies: 'Laravel | JavaScript',
      link: 'https://kathitfashion.com/',
    }
  ];
  return (
    <section id="project">
      <h3>My Recent</h3>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <a href={pro.link} className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p className='tech'>{pro.technologies}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;