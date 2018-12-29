import React, { Component } from 'react';
import './../Assets/main.scss';
import Header from '../Header/Header';
import Body from './Body';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
