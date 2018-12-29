import React, { Component } from 'react';
import About from '../Header/About';
import Posts from '../Posts/Posts';
import Contact from '../Contact/Contact';

class Body extends Component {
  render () {
    return (
      <div id='main'>
        <About />
        <Posts />
        <Contact />
      </div>
    );
  }
}

export default Body;
