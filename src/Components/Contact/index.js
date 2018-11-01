import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1>Contact</h1>
          At the moment, I'm actively looking for opportunities for <span>Summer 2019</span> so drop a message on my <a href="https://www.linkedin.com/in/brensantos17/">LinkedIn</a> if you want to talk!
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <br/>
          <Button outline className="get-in-touch-button" href="https://www.linkedin.com/in/brensantos17/" target="_blank" rel="noopener noreferrer">Get In Touch!</Button>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Contact;
