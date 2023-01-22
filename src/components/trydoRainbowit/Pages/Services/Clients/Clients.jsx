import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Clients.css";
const Clients = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-1.jpg",
      desc: "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "AKLIMA - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 2,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-2.jpg",
      desc: "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "FATIMA ASRAFY - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 3,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-3.jpg",
      desc: "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "JANNAT TUMPA - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 4,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-4.jpg",
      desc: "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "JOHNS DUE - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 5,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-5.jpg",
      desc: "John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "JOHN DOE - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 6,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-6.jpg",
      desc: "Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "AMAR ORTHI - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 7,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-7.jpg",
      desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "FATIMA MA - COO, AMERIMAR ENTERPRISES, INC.",
    },
    {
      id: 8,
      image:
        "http://trydo.rainbowit.net/assets/images/client/testimonial-8.jpg",
      desc: "Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
      author: "JON CUMMINS - COO, AMERIMAR ENTERPRISES, INC.",
    },
  ]);
  const [desc, setDesc] = useState()
  const clickHandler = (id) => {
    const filter = clients.filter(obj=>obj.id === id);
    setDesc(filter[0].desc);
  };

  console.log('desc', desc);
  return (
    <div className="mt-5">
      <div className="mt-5 mb-5">
        <section>
            {
                desc && <div className="container">
                <h3 className="comment__desc text-center">{desc}</h3>
                <p className="mt-5 mb-5 text-center comment__author">
                  Author
                </p>
              </div>
            }
      
        </section>
      </div>
      <div className="mt-5 d-flex justify-content-evenly">
        {clients.map((client, i) => (
          // <button><img src={client.image} alt="" /></button>
          <div>
            <Button
              key={i}
              className="client__button align-item-center"
              onClick={() => clickHandler(client.id)}
            >
              <img src={client.image} alt="" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
