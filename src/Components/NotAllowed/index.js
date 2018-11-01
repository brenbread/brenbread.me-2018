import React, {Component} from 'react';
import Typed from 'react-typed';
import './index.css';

class NotAllowed extends Component {

  render() {
    let typedStrings = [
      "403 not allowed...^1000 😶",
    ];

    return (
    <header className="not-found">
        <h1 className="not-found-type">
          <Typed strings={typedStrings} typeSpeed={60} backSpeed={20} startDelay={2000} loop={false}></Typed>
        </h1>
        <h3>
          You probably shouldn't be here...&nbsp;
          <a href="/">Go back.</a>
        </h3>
    </header>
  )
  }
}

export default NotAllowed;
