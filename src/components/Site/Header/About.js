import React, { Component } from 'react';

class About extends Component {
  render () {
    return (
      <section id='one'>
        <header className='major'>
          <h2>Sobre Michael Douglas</h2>
        </header>
        <p>
          Michael Douglas é graduado em gestão de tecnologia da informação e
          procura sempre estar próximo à comunidade, ajudando com cursos, posts
          e livros. Sempre que pode, tenta estar presente em palestras, buscando
          não só palestrar, como também estar mais próximo da comunidade, pois é
          apaixonado por <strong> Open Source e tecnologia </strong> em qualquer
          nível que estejam presentes. Compartilha seu conhecimento em seu site
          pessoal
          <strong> (http://michaelaraujo.net) </strong> e nas comunidades
          Laravel, PHP, Tech Microsoft e JavaScript. É profissional{' '}
          <strong>Zend Certified Engineer 5.5</strong> e{' '}
          <strong> MTA Microsoft </strong>, já lecionou como instrutor 4 Linux,
          Webschool-io, gerente de tecnologia da informação e criador do Laravel{' '}
          <strong>PagSeguro</strong>
          <a href='https://github.com/michaeldouglas/laravel-pagseguro'>
            {' '}
            (https://github.com/michaeldouglas/laravel-pagseguro).
          </a>
        </p>
        <ul className='actions'>
          <li>
            <a href='/' className='button'>
              Livros <i className='fas fa-book-reader' />
            </a>
          </li>
          <li>
            <a href='https://pt.slideshare.net/mdba2007' className='button'>
              Palestras <i className='fas fa-graduation-cap' />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UCshtOFXi4VNuqUxYNolH54A'
              className='button'
            >
              YouTube <i className='fab fa-youtube' />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default About;
