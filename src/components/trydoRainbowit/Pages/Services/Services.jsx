import React, { useState } from "react";
import { Link } from "react-router-dom";
import OurWorks from "../../OurWorks/OurWorks";
import Clients from "./Clients/Clients";
import OurFun from "./OurFun/OurFun";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([
    {
      title: "Services",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      custom: "Request Custom Service",
    },
  ]);
  // services list
  const [lists, setLists] = useState([
    {
      id: 1,
      image: "http://trydo.rainbowit.net/assets/images/icons/icon-01.png",
      title: "Business Strategy",
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      id: 2,
      image: `http://trydo.rainbowit.net/assets/images/icons/icon-02.png`,
      title: "Website Development",
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      id: 3,
      image: `http://trydo.rainbowit.net/assets/images/icons/icon-01.png`,
      title: "Marketing & Reporting",
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      id: 4,
      image: `http://trydo.rainbowit.net/assets/images/icons/icon-02.png`,
      title: "Mobile App Development",
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
  ]);
  return (
    <div className="container">
      <div className="services row">
        <div className="col-lg-4">
          {services.map((service, i) => (
            <div key={i} className="service">
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <Link to="/services" className="custom">
                <h5 className="mt-5">{service.custom}</h5>
                <hr />
              </Link>
            </div>
          ))}
        </div>
        <div className="col-lg-8">
          <Link to="/services">
            <div className="list">
              {lists.map((list, id) => (
                <div className="card container">
                  <section key={id} className="card-body">
                    <img src={list.image} alt="" />
                    <h3 className="card-title mt-4">{list.title}</h3>
                    <p className="card-text">{list.desc}</p>
                  </section>
                </div>
              ))}
            </div>
          </Link>
        </div>
        <OurWorks />
      </div>
      <OurFun />
      <Clients />
    </div>
  );
};

export default Services;
