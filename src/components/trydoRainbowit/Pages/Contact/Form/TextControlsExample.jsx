import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./TextControlsExample.css";
function TextControlsExample() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(name, email, phone, subject, message)
  // }
  // const changeHandler = (event) => {
  //   setName(event.target.value);
  //   setEmail(event.target.value);
  //   setPhone(event.target.value);
  //   setSubject(event.target.value);
  //   setMessage(event.target.value);
  // }
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, phone, subject, message);
        // make a post request or any other logic here
    }
  return (
    <div>
      <section>
        <div>
          <h1>Contact Us</h1>
          <p className="contact__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            non placeat atque ipsa, odit aliquam illo veniam maxime dolores
            recusandae nisi sint totam nobis.
          </p>
        </div>
        <div>
          {/* <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="mb-3"
              value={name} 
              onChange={(e) => changeHandler(event)}
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="email" placeholder="name@example.com"
              value={email}
              onChange={(e) => changeHandler(event)}
              />
            </Form.Group>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              className="mb-3"
              value={phone}
              onChange={(e) => changeHandler(event)}
            />
            <Form.Control type="text" placeholder="Subject" className="mb-3" />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              value={subject}
              onChange={(e) => changeHandler(event)}
            >
              <Form.Control as="textarea" rows={3} placeholder="your message" 
              value={message}
              onChange={(e) => changeHandler(event)}
              />
            </Form.Group>
          </Form> */}
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="mb-3"
              value={name} onChange={(e) => setName(e.target.value)}
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="email" placeholder="name@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              className="mb-3"
              value={phone} onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Control type="text" placeholder="Subject" className="mb-3" />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              value={subject} onChange={(e) => setSubject(e.target.value)}
            >
              <Form.Control as="textarea" rows={3} placeholder="your message" 
              value={message} onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button className="submit__button" type="submit">SUBMIT NOW</Button>
          </Form>
        </div>
      </section>
      <section>{/*  */}</section>
    </div>
  );
}

export default TextControlsExample;
