import React, { useState } from 'react';
import './About.css';
const About = () => {
    const [abouts, setAbouts] = useState([
        {
            image: 'http://trydo.rainbowit.net/assets/images/about/about-1.jpg',
            title: 'About',
            desc: `There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to 
            use a passage of Lorem Ipsum`,
        },
    ])
    return (
      <>
        <div>
          {abouts.map((about, i) => (
            <div key={i} className="about">
              <section>
                <img src={about.image} alt="" srcset="" />
              </section>
              <section className='aboutText'>
                <div>
                  <h2>{about.title}</h2>
                  <p>{about.desc}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </>
    );
};

export default About;