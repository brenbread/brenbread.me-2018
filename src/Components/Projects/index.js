import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Row, Col } from 'reactstrap';
import Ionicon from 'react-ionicons';
import './index.css';

class Projects extends Component {
  render() {
    let arrowList = () => {
      return (
        <Ionicon icon="md-arrow-dropright" color="#66FCF1"/>
      )
    }
    return (
      <div>
      <Row className="telemetry">
        <Col className="text-left" sm="12" md={{ size: 6, offset: 3 }}>
          <h1>Stuff I Worked On</h1>
          <hr />
          <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <a href="https://github.com/kammce/telemetry" target="_blank" rel="noopener noreferrer">
              <CardImg top width="100%" src={require('../../assets/img/telemetry.png')} alt="Telemetry" />
            </a>
            <CardBody>
              <h3><a href="https://github.com/kammce/telemetry" target="_blank" rel="noopener noreferrer">Telemetry</a>&nbsp;<span className="subtext">June 2018 - Present</span></h3>
              <h4>JavaScript, Flask</h4>
              <CardText>{arrowList()}Software for inspecting, visualizing and modifying variables within a embedded processors.</CardText>
              <CardText>{arrowList()}Contributed local command caching, upload file via serial, and launching application on a different port.</CardText>
            </CardBody>
          </Card>
        </Col>
        </Row>
        <hr/>
          <Row className="website">
            <Col className="text-left" sm="12" md={{ size: 6, offset: 3 }}>
              <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                <a href="/">
                  <CardImg top width="100%" src={require('../../assets/img/homepage-v1.png')} alt="Homepage" />
                </a>
                <CardBody>
                  <h3><a href="https://github.com/brenbread/brenbread.me-2018" target="_blank" rel="noopener noreferrer">This Website!</a>&nbsp;<span className="subtext">October 2018</span></h3>
                  <h4>React, Nginx</h4>
                  <CardText>{arrowList()}Used to showcase projects like this one!</CardText>
                  <CardText>{arrowList()}Deployed on an Ubuntu server using Nginx and Linode cloud services</CardText>
                </CardBody>
              </Card>
            </Col>
            </Row>
        <hr/>
        <Row className="sdvx-calc">
          <Col className="text-left" sm="6" md={{ size: 6, offset: 3 }}>
          <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <a href="/sdvx" target="_blank" rel="noopener noreferrer">
              <CardImg top width="100%" src={require('../../assets/img/sdvx-score.png')} alt="SDVX" />
            </a>
            <CardBody>
              <h3><a href="/sdvx" target="_blank" rel="noopener noreferrer">Sound Voltex Calculators</a>&nbsp;<span className="subtext">October 2018 - Present</span></h3>
              <h4>React</h4>
              <CardText>{arrowList()}Web application for players of the arcade game SOUND VOLTEX (SDVX) used to calculate score, grade, and volforce (coming soon).</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr />
      <Row className="arcade-manager">
        <Col className="text-left" sm="6" md={{ size: 6, offset: 3 }}>
        <Card style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
          <a href="https://github.com/brenbread/cmpe138-arcade-db-project" target="_blank" rel="noopener noreferrer">
            <CardImg top width="100%" src={require('../../assets/img/arcade.png')} alt="Arcade" />
          </a>
          <CardBody>
            <h3><a href="https://github.com/brenbread/cmpe138-arcade-db-project" target="_blank" rel="noopener noreferrer">Arcade Manager</a>&nbsp;<span className="subtext">March 2018 - May 2018</span></h3>
            <h4>MySQL, Express, React, Node</h4>
            <CardText>{arrowList()}Web application for a database systems class that emulates a management system for an arcade. The application supports inventory/facilities management as well as emulating credit transactions for games.</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
      </div>
    );
  }
}

export default Projects;
