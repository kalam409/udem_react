import React, { useState } from "react";
import DarkVariantExample from "./Carousel/DarkVariantExample";
// import Carousel from "./Carousel/Carousel";
import "./OurWorks.css";
const OurWorks = () => {
  const [works, setWorks] = useState([
    {
      title: "Our Works",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    },
  ]);
  return (
    <div className="mt-5">
      <section className="work mt-5 mb-5">
        {works.map((work, i) => (
          <div key={i}>
            <h1>{work.title}</h1>
            <div className="d-flex">
              <p className="mt-4 work__list">{work.desc}</p>
              <p></p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <DarkVariantExample />
      </section>
    </div>
  );
};

export default OurWorks;
