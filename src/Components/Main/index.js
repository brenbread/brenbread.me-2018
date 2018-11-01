//Dependencies
import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import {Row, Col} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll'; //animation
import Sticky from 'react-stickynode'; //sticky navbar
import './index.css';
import "animate.css/animate.min.css"; //div animations

//Page Components
import About from '../About';
import Contact from '../Contact';
import Experience from '../Experience';
import Footer from '../Footer';
import Landing from '../Landing';
import NavBar from '../NavBar';
import Projects from '../Projects';

class Main extends Component {
  /* TODO: Navbar sticky on scroll-up
    else if (status.status === Sticky.STATUS_RELEASED) {
      //console.log("Navbar is released");
    }

    else if (status.status === Sticky.STATUS_ORIGINAL) {
      //console.log("Navbar is at original spot");
    }
  }

  handleNavigation = (e) => {
    const window = e.currentTarget;
    //up scroll
    if(this.prev > window.scrollY) {
      this.setState({ showNavbarOnUp: true });
      return true;
    }
    //down scroll
    else if(this.prev < window.scrollY) {
      this.setState({ showNavbarOnUp: false });
      return false;
    }
    this.prev = window.scrollY;
  }

  */

  render() {
    /* TODO: Improved sticky navbar later */
    // let showNavbarOnUp = this.state.showNavbarOnUp;
    return (<div className="Main">
      <Sticky bottomBoundary=".break-container"
        innerZ={1}
        onStateChange={this.handleNavbarState}
        shouldFreeze={this.showNavbarOnUp}>
        <Animated className="navbar-container"
          animationIn="fadeInRight" animationOut="fadeOut"
          animationInDelay={200}
          animationOutDelay={200}
          isVisible={true}>
          <NavBar/>
        </Animated>
      </Sticky>
    <Row className="break-container">
      <Col className="text-left" xm="6" md={{
          size: 6,
          offset: 3
        }}>
      </Col>
    </Row>
      <header
        className="Main-header">
        <Animated
          animationIn="fadeInLeft"
          animationInDelay={400}>
          <Landing/>
        </Animated>
      </header>
      <div className="Main-container">
        <div id="about">
          <ScrollAnimation
            className="about"
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={400}>
            <About/>
          </ScrollAnimation>
        </div>
        <div id="experience">
          <ScrollAnimation
            className="experience"
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={400}>
              <Experience/>
          </ScrollAnimation>
        </div>
        <div id="projects">
        <ScrollAnimation
          className="projects"
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={400}>
            <Projects/>
        </ScrollAnimation>
      </div>
      <div id="contact">
          <ScrollAnimation
            className="contact"
            animateIn="fadeInLeft"
            animateOnce={true}
            delay={400}>
              <Contact/>
          </ScrollAnimation>
        </div>
      </div>
      <Footer/>
    </div>);
  }
}

export default Main;
