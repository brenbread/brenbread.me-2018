import React, {Component} from 'react';
import {Button, Row, Col} from 'reactstrap';
import Typed from 'react-typed';
import './index.css';

class Landing extends Component {

  render() {
    let typedStrings = [
      "I'm a software + hardware developer.^2000",
      "I worked with JavaScript, HTML, &amp; CSS.^2000",
      "I worked with C++, C, &amp; Python.^2000",
      "I worked with MySQL, Express, React, &amp; Node.^2000",
      "I'm always learning.^2000",
      "I identify as a piece of bread.^2000",
      "I'm allergic to peanuts^1000 &amp; the world...^2000"
    ];

    return (<div className="landing">
      <Row>
        <Col className="text-left" xm="6" md={{
            size: 6,
            offset: 3
          }}>
          <span>Hi there! My name is</span>

          <h1 className="main-text">Bren Santos</h1>

          <span className="typed">
            <span>&amp;</span>&nbsp;
            <Typed strings={typedStrings} typeSpeed={60} backSpeed={20} startDelay={2500} loop="loop"></Typed>
          </span>
          <p>I'm a computer engineering student @<a href="https://cmpe.sjsu.edu/" target="_blank" rel="noopener noreferrer">SJSU</a>
            &nbsp;based in San Jose, CA with experience in front-end &amp; back-end web development. I have a passion for creating useful, &amp; visually appealing websites &amp; applications.</p>
          <p>I have done work on projects such as&nbsp;
            <a href="https://github.com/kammce/Telemetry" target="_blank" rel="noopener noreferrer">Telemetry</a>
            &nbsp;(a web application that interacts with serial devices), &amp; currently developing the new homepage for&nbsp;
            <a href="http://sce.engr.sjsu.edu/">SCE</a>.</p>
          <p>Currently seeking internship opportunities for Spring/Summer 2019!</p>
          <Button outline="outline" className="get-in-touch-button" href="https://www.linkedin.com/in/brensantos17/" target="_blank" rel="noopener noreferrer">Get In Touch!</Button>
        </Col>
      </Row>
    </div>)
  }
}

export default Landing;
