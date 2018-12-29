import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer id='footer'>
        <div class='inner'>
          <ul class='icons'>
            <li>
              <a href='https://twitter.com/mdba_araujo'>
                <i className='fab fa-twitter' />
              </a>
            </li>
            <li>
              <a href='https://github.com/michaeldouglas'>
                <i className='fab fa-github' />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/mdba.araujo'>
                <i className='fab fa-facebook' />
              </a>
            </li>
            <li>
              <a href='https://social.msdn.microsoft.com/profile/michael%20douglas%20barbosa%20araujo'>
                <i class='fab fa-microsoft' />
              </a>
            </li>
            <li>
              <a
                href='mailto:michaeldouglas010790@gmail.com'
                class='icon fa-envelope-o'
              >
                <span class='label'>Email</span>
              </a>
            </li>
          </ul>
          <ul class='copyright'>
            <li>&copy; Michael Douglas</li>
            <li>
              Layout: <a href='http://html5up.net'>HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
