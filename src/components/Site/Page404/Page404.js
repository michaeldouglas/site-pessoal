import React, { Component } from 'react';
import './scss/base.scss';

class Page404 extends Component {
  render () {
    return (
      <div id='page404'>
        <iframe
          title='404'
          src='http://wayou.github.io/t-rex-runner/'
          className='game z-depth-2'
        >
          Your browser doesn't support iFrames.
        </iframe>
      </div>
    );
  }
}
export default Page404;
