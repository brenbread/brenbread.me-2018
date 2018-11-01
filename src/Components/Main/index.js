//Dependencies
import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Sticky from 'react-stickynode'; //sticky navbar
import ScrollToTop from 'react-scroll-up';
import Ionicon from 'react-ionicons';
import './index.css';

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
    <ScrollToTop showUnder={160}>
      <Ionicon icon="md-arrow-dropup-circle" color="white" fontSize="6vh" />
    </ScrollToTop>
      <Sticky bottomBoundary=".break-container"
        innerZ={1}
        onStateChange={this.handleNavbarState}
        shouldFreeze={this.showNavbarOnUp}>
          <NavBar/>
      </Sticky>
    <Row className="break-container">
      <Col className="text-left" xm="6" md={{
          size: 6,
          offset: 3
        }}>
      </Col>
    </Row>
      <header className="Main-header">
          <Landing/>
      </header>
      <div className="Main-container">
        <div id="about">
          <About/>
        </div>
        <div id="experience">
          <Experience/>
        </div>
      <div id="projects">
          <Projects/>
      </div>
      <div id="contact">
          <Contact/>
        </div>
      </div>
      <Footer/>
    </div>);
  }
}

export default Main;
