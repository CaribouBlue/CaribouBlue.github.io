import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import '../styles/app.css';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    menu: false,
  }

  this.toggleHam = this.toggleHam.bind(this);
}

  componentWillMount() {
    $(document).ready(() => {
      // initial animations
      $('.name-title').animate({ opacity: 1, top: 0 }, 1000, 'swing');
      $('.name-subtitle').animate({ opacity: 1, top: 0 }, 1000, 'swing');
      $('.logo-img').animate({ opacity: 1, }, 1000, 'swing');

      // listeners
      $('.logo-img').on('mouseover', (e) => $(e.target).animate({ height: '6.7vmin' }, 100));
      $('.logo-img').on('mouseleave', (e) => $(e.target).animate({ height: '7vmin' }, 100));

      $('#ham').on('click', this.toggleHam);
    });
  }

  toggleHam(e) {
    if (!this.state.menu){
      this.setState({ menu: true });
      $('#top').animate({ opacity: 0 })
      setTimeout(() => $('#mid').animate({ opacity: 0 }, () => {
        $('.drop-down').animate({ opacity: 1})
      }), 100);
      setTimeout(() => $('#bottom').animate({ opacity: 0 }, () => {
        $('#X').animate({ opacity: 1 });
      }), 200);
    } else {
      this.setState({ menu: false });
      setTimeout(() => $('.drop-down').animate({ opacity: 0}), 200);
      $('#X').animate({ opacity: 0 }, () => {
        $('#bottom').animate({ opacity: 1 })
        setTimeout(() => $('#mid').animate({ opacity: 1 }), 100);
        setTimeout(() => $('#top').animate({ opacity: 1 }), 200);
      });
    }
  }

  render() {
    return (
      <div
        className="app"
      >
        <p
          className="support-warning"
        >
          {
            CSS.supports('display', 'grid') ? 
            null : 
            'You\'re using a browser that does not support grid display. Please update your browser to view this website properly.'
          }
        </p>
        <div
          className="menu"
        >
          <div
            id="ham"
          >
            <div
              id="top"
            ></div>
            <div
              id="mid"
            ></div>
            <div
              id="bottom"
            ></div>
            <img
              id="X"
              src="close-button.svg"
            />
          </div>
        </div>
        <div
          className="drop-down"
        >
        <Link
          to={'/'}
        >Under Construction</Link>
{
          // <p>About</p>
          // <p>Blog</p>
          // <Link
          //   to={'/'}
          // >Contact</Link>
}
        </div>
        <h1
          className="name-title"
        >Alec Draymore</h1>
        <div
          className='spacer-box'
        >
          <div
            className='spacer'
          />
        </div>
        <h2
          className="name-subtitle"
        >software engineer</h2>
        <div
          className="interactions-box"
        >
          <a
            href={'https://github.com/CaribouBlue'}
          >
            <img
              className="logo-img"
              src="logo-github.svg"
            />
          </a>
          <span />
          <a
            href="https://www.linkedin.com/in/draymorealec/"
          >
            <img
              className="logo-img"
              src="logo-linkedin.svg"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
