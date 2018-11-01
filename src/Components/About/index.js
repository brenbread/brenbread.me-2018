import React, { Component } from 'react';
import { Card, CardText, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import Ionicon from 'react-ionicons'
import './index.css';

class About extends Component {
  render() {
    let arrowList = () => {
      return (
        <Ionicon icon="md-arrow-dropright" color="#66FCF1"/>
      )
    }
    return (
      <div>
      <Row>
        <Col className="text-left" sm="12" md={{ size: 6, offset: 3 }}>
          <h1>About Me</h1>
          <Card body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
              <Row>
                 <Col>
                   <CardText>
                     Hey! I'm a Computer Engineering major @<a href="https://cmpe.sjsu.edu/" target="_blank" rel="noopener noreferrer">SJSU</a> who enjoys software and hardware development.
                   </CardText>
                   <CardText>
                     I currently work as a web developer for <a href="https://sce.engr.sjsu.edu/" target="_blank" rel="noopener noreferrer">SJSU's Software & Computer Engineering Society</a> developing the new homepage of the website using React.
                   </CardText>
                   <CardText>
                     I'm also currently working as a web developer at SJSU contributing to <a href="https://github.com/kammce/Telemetry" target="_blank" rel="noopener noreferrer">Telemetry</a>, a web application that interacts with serial devices such as the SJOne/SJTwo board, Arduino, and FPGA devices.
                   </CardText>
                 </Col>
                 <Col>
                   <img src={require('../../assets/img/bren.jpeg')} />
                 </Col>
              </Row>
              <br />
              <CardText>
                Aside from that, I'm a partnered streamer on <a href="https://twitch.tv/brenbread" target="_blank" rel="noopener noreferrer">Twitch</a> and, nowadays, I stream on a very rare basis. I also enjoy listening to electronic music, playing rhythm games (like Sound Voltex and Dance Dance Revolution), <a href="https://soundcloud.com/brenbread" target="_blank" rel="noopener noreferrer">music production</a>, and watching some anime.
              </CardText>
              <CardText>
                I have experience with:
              </CardText>
              <Row>
                <Col xs="6">
                  <ListGroup>
                     <ListGroupItem>{arrowList()}C & C++</ListGroupItem>
                     <ListGroupItem>{arrowList()}Java</ListGroupItem>
                     <ListGroupItem>{arrowList()}JavaScript</ListGroupItem>
                     <ListGroupItem>{arrowList()}HTML & CSS</ListGroupItem>
                     <ListGroupItem>{arrowList()}Python</ListGroupItem>
                 </ListGroup>
                </Col>
                <Col xs="6">
                  <ListGroup>
                     <ListGroupItem>{arrowList()}React</ListGroupItem>
                     <ListGroupItem>{arrowList()}Node</ListGroupItem>
                     <ListGroupItem>{arrowList()}HTML5</ListGroupItem>
                     <ListGroupItem>{arrowList()}Nginx</ListGroupItem>
                     <ListGroupItem>{arrowList()}MySQL</ListGroupItem>
                 </ListGroup>
                </Col>
              </Row>
            </Card>
        </Col>
      </Row>
    </div>
    );
  }
}

export default About;
