import React, { Component } from 'react';
import Footer from './../Footer/Footer';
import avatar from './../Assets/images/EUAvatar.png';

class Header extends Component {
  render () {
    return (
      <header id='header'>
        <div className='inner'>
          <a href='/' className='image avatar'>
            <img src={avatar} alt='' />
          </a>
          <h1>
            <strong>Michael Douglas Barbosa Araujo</strong>,
            <br />
            Zend Certified Engineer 5.5 e MTA Microsoft.
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
