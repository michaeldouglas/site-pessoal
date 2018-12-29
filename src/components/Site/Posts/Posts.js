import React, { Component } from 'react';

class Posts extends Component {
  render () {
    return (
      <section id='two'>
        <h2>Posts</h2>
        <div className='row'>
          <article className='6u$ 12u$(xsmall) work-item'>
            <a href='/' className='image fit thumb'>
              <img
                src={
                  'https://s3-sa-east-1.amazonaws.com/site.pessoal/img-posts/react.png'
                }
                alt=''
              />
            </a>
            <div className='textPost' onClick={() => alert('OI')}>
              <h3>Criando um app Rect</h3>
              <p>Aprenda a como criar um app react.</p>
              <p className='nivel'>Nível - Iniciante </p>
            </div>
          </article>
        </div>
        <ul className='actions'>
          <li>
            <a href='/' className='button'>
              Todos os posts
            </a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Posts;
