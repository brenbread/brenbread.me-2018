import React, { Component } from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import Ionicon from 'react-ionicons'
import './index.css';

class Experience extends Component {
  render() {
    let arrowList = () => {
      return (
        <Ionicon icon="md-arrow-dropright" color="#66FCF1"/>
      )
    }
    return (
      <Row>
        <Col className="text-left" xs="6" sm={{ offset: 3 }}>
          <h1>Experience</h1>
          <hr />
            <Card body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                <Row>
                    <h2>Web Developer <span className="subtext">@ Software & Computer Engineering Society</span></h2>
                </Row>
                <span>August 2018 - Present</span>
                <Row>
                  <ListGroup>
                     <ListGroupItem>{arrowList()}Currently developing the new homepage for SCE using React</ListGroupItem>
                  </ListGroup>
                </Row>
              </Card>
          <Card body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
              <Row>
                  <h2>Web Developer Intern <span className="subtext">@ SJSU</span></h2>
              </Row>
                  <span>June 2018 - Present</span>
                  <Row>
                  <ListGroup>
                     <ListGroupItem>{arrowList()}Designed &amp; developed new features on <a href="https://github.com/kammce/Telemetry">Telemetry</a>, a web application used to interact with serial devices that is used by many SJSU Computer Engineering students</ListGroupItem>
                     <ListGroupItem>{arrowList()}Implemented ability for application to locally cache serial commands, upload file via serial, &amp; launch application on a different port</ListGroupItem>
                     <ListGroupItem>{arrowList()}Created design documents containing details of the implementation of each new feature</ListGroupItem>
                     <ListGroupItem>{arrowList()}Collaborated on GitHub repository to add new features</ListGroupItem>
                 </ListGroup>
              </Row>
            </Card>
        </Col>
        <Col className="text-left" xs="6" sm={{ offset: 3 }}>
          <Card body inverse style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <Row>
              {/* <img src={require('../../assets/img/telemetry.png')} /> */}
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Experience;
