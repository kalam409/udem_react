import React, { useState } from "react";
import "./About.css";
const About = () => {
  const [abouts] = useState([
    {
      image: "http://trydo.rainbowit.net/assets/images/about/about-1.jpg",
      title: "About",
      desc: `There are many variations of passages of Lorem Ipsum available, but the majority 
            have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to 
            use a passage of Lorem Ipsum`,
    },
  ]);
  const [subAbouts] = useState([
    {
      title: "Who we are",
      desc: "There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      title: "Who we are",
      desc: "There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.",
    },
  ]);
  return (
    <>
      <div className="mt-5">
        {abouts.map((about, i) => (
          <div key={i} className="about container">
            <section>
              <img src={about.image} alt="" />
            </section>
            <section className="aboutText">
              <div>
                <h2>{about.title}</h2>
                <p>{about.desc}</p>
              </div>
              <div>
                <section className="about__list mt-5">
                  {subAbouts.map((subAbout, i) => (
                    <div key={i}>
                      <h3>{subAbout.title}</h3>
                      <p>{subAbout.desc}</p>
                    </div>
                  ))}
                </section>
              </div>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
