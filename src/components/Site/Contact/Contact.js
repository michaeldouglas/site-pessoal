import React, { Component } from 'react';

class Contact extends Component {
  render () {
    return (
      <section id='three'>
        <h2>Entre em contato</h2>
        <p>
          Entre em contato para treinamento, consultoria e entre outros
          assuntos:
        </p>
        <div className='row'>
          <div className='7u 12u$(small)'>
            <form method='post' action='#'>
              <div className='row uniform 50%'>
                <div className='6u 12u$(xsmall)'>
                  <input type='text' name='name' id='name' placeholder='Nome' />
                </div>
                <div className='6u$ 12u$(xsmall)'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                  />
                </div>
                <div className='12u$'>
                  <textarea
                    name='message'
                    id='message'
                    placeholder='Mensagem'
                    rows='4'
                  />
                </div>
              </div>
            </form>
            <ul className='actions'>
              <li>
                <input type='submit' value='Enviar Mensagem' />
              </li>
            </ul>
          </div>
          <div className='4u$ 12u$(small)'>
            <ul className='labeled-icons'>
              <li>
                <h3>
                  <i class='fas fa-location-arrow' />
                </h3>
                Avenida José André de Moraes
                <br />
                Taboão Da Serra
                <br />
                Brasil
              </li>
              <li>
                <h3>
                  <i className='fas fa-mobile' />
                </h3>
                55 11 94914-9472
              </li>
              <li>
                <h3 className='icon fa-envelope-o'>
                  <span className='label'>Email</span>
                </h3>
                <a href='/'>michaeldouglas010790@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
