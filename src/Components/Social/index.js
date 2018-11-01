import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

class Social extends Component {
  render() {
    return (
      <div>
        <span className="social-icons">
          <a href="https://twitter.com/brenbread_" target="_blank" rel="noopener noreferrer"><Ionicon icon="logo-twitter" color="white"/></a>
        </span>
        <span className="social-icons">
          <a href="https://linkedin.com/in/brensantos17" target="_blank" rel="noopener noreferrer"><Ionicon icon="logo-linkedin" color="white"/></a>
        </span>
        <span className="social-icons">
          <a href="https://github.com/brenbread" target="_blank" rel="noopener noreferrer"><Ionicon icon="logo-github" color="white"/></a>
        </span>
        <span className="social-icons">
          <a href="https://twitch.tv/brenbread" target="_blank" rel="noopener noreferrer"><Ionicon icon="logo-twitch" color="white"/></a>
        </span>
      </div>
    );
  }
}

export default Social;
