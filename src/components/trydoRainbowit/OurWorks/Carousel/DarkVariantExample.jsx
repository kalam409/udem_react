import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./DarkVariantExample.css";
import { Link } from "react-router-dom";
function DarkVariantExample() {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Development",
      desc: " Getting tickets to the big show",
    },
    // {
    //   id: 2,
    //   img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    //   title: "Development",
    //   desc: " Getting tickets to the big show",
    // },
    // {
    //   id: 3,
    //   img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    //   title: "Development",
    //   desc: " Getting tickets to the big show",
    // },
    // {
    //   id: 4,
    //   img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    //   title: "Development",
    //   desc: " Getting tickets to the big show",
    // },
    // {
    //   id: 5,
    //   img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    //   title: "Development",
    //   desc: " Getting tickets to the big show",
    // },
  ]);
  return (
    <div>
      {items.map((item, id) => (
        <div key={id}>
          <Carousel variant="dark" className="slide">
            <Carousel.Item>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption>
                <p>{item.title}</p>
                <h4>{item.desc}</h4>
                <Link to="/protfolio-details"><Button variant="primary" className="click mt-2">
                  Click Now
                </Button>{" "}</Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption>
                <p>{item.title}</p>
                <h4>{item.desc}</h4>
                <Button variant="primary" className="click mt-2">
                  Click Now
                </Button>{" "}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption>
                <p>{item.title}</p>
                <h4>{item.desc}</h4>
                <Button variant="primary" className="click mt-2">
                  Click Now
                </Button>{" "}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption>
                <p>{item.title}</p>
                <h4>{item.desc}</h4>
                <Button variant="primary" className="click mt-2">
                  Click Now
                </Button>{" "}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          ;
        </div>
      ))}
    </div>
  );
}

export default DarkVariantExample;
