import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import PortfolioLI from './PortfolioLI';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };

    this.toggleHam = this.toggleHam.bind(this);
  }

  componentDidMount() {
    $(document).ready(() => {
      // initial animations
      $('.page-title').animate({ opacity: 1}, 1000, 'swing');
      $('.pli-grid').animate({ opacity: 1}, 1000, 'swing');
      $('#top').animate({ opacity: 1 })
      setTimeout(() => $('#mid').animate({ opacity: 1 }), 100);
      setTimeout(() => $('#bottom').animate({ opacity: 1 }), 200);

      // event listeners
      //$('#ham').on('click', this.toggleHam);

    });
  }

  toggleHam(e) {
    if (!this.state.menu){
      this.setState({ menu: true });
      $('#top').animate({ opacity: 0 })
      setTimeout(() => $('#mid').animate({ opacity: 0 }, () => {
        $('.drop-down').css({ visibility: 'visible' }).animate({ opacity: 1})
      }), 100);
      setTimeout(() => $('#bottom').animate({ opacity: 0 }, () => {
        $('#X').animate({ opacity: 1 });
      }), 200);
    } else {
      this.setState({ menu: false });
      setTimeout(() => $('.drop-down').css({ visibility: 'hidden' }).animate({ opacity: 0}), 200);
      $('#X').animate({ opacity: 0 }, () => {
        $('#bottom').animate({ opacity: 1 })
        setTimeout(() => $('#mid').animate({ opacity: 1 }), 100);
        setTimeout(() => $('#top').animate({ opacity: 1 }), 200);
      });
    }
  }

  render() {
    const portfolio = [
      {
        thumbnail: 'project-thumbnails/halfwaze.png',
        title: 'Halfwaze',
      },
      {
        thumbnail: 'project-thumbnails/hokono.png',
        title: 'Hokono',
      },
      {
        thumbnail: 'project-thumbnails/Halfwaze.png',
        title: 'Halfwaze',
      },
    ];
    return (
      <div
        className="portfolio"
      >
        <div
          className="menu"
        >
          <div
            id="ham"
            onClick={this.toggleHam}
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
              alt=""
            />
          </div>
        </div>
        <div
          className="drop-down"
        >
          <Link
            to={'/'}
          >Home</Link>
{
          // <p>About</p>
          // <p>Blog</p>
          // <Link
          //   to={'/'}
          // >Contact</Link>
}
        </div>
        <h1
          className="page-title"
        >Portfolio</h1>
        <div
          className="pli-grid"
        >
          {
            portfolio.map(item => (
              <PortfolioLI
                thumbnail={item.thumbnail}
                title={item.title}
                history={this.props.history}
              />
            ))
          }
        </div>
      </div>
    );
  }
};

export default Portfolio;