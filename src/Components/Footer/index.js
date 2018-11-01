import React, { Component } from 'react';
import Social from '../Social';

class Footer extends Component {
  render() {
    return (
      <footer className="subtext">
        Designed and built by <a href="https://github.com/brenbread/brenbread.me-2018">Bren Santos (brenbread)</a>
        <Social/>
      </footer>
    );
  }
}

export default Footer;
