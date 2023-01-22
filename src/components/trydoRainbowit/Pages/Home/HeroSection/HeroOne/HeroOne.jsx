import React, { useState } from 'react';
import './HeroOne.css';
const HeroOne = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: 'http://trydo.rainbowit.net/assets/images/icons/icon-01.png',
      title: 'Business Strategy',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    },
    {
      id: 2,
      image: 'http://trydo.rainbowit.net/assets/images/icons/icon-02.png',
      title: 'Website Development',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    },
    {
      id: 3,
      image: 'http://trydo.rainbowit.net/assets/images/icons/icon-03.png',
      title: 'Marketing & Reporting',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
    },
  ])
    return (
      <div className='container mt-5'>
        <h1 className="heroTitle">A DIGITAL AGENCY.</h1>
        <section className='mt-5'>
          <article className='projects'>
            {
              projects.map((project) => 
              <div key={project.id}>
                <img src={project.image} alt="" />
                <h3 className='mt-4'>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              )
            }
          </article>
        </section>
      </div>
    );
};

export default HeroOne;