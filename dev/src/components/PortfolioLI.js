import React from 'react';
//import $ from 'jquery';

class PortfolioLI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };

    this.toggleHover = this.toggleHover.bind(this);
    //this.imgClickHandler = this.imgClickHandler.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  // imgClickHandler() {
  //   //window.location.assign(`https://github.com/CaribouBlue/${this.props.title}`);
  //   //this.props.history.push(`/portfolio/${this.props.title.toLowerCase()}`);
  // }

  getRender() {
    if (this.state.hover) {
      return (
        <h2
          className="pli-title"
        >
          {this.props.title}
        </h2>
      );
    }
  }

  render() {
    return (
      <a
        href={`https://github.com/CaribouBlue/${this.props.title}`}
      >
        <div
          className="pli"
        >
          {this.getRender()}
          <img
            className="thumbnail"
            onMouseOver={this.toggleHover}
            onMouseLeave={this.toggleHover}
            //onClick={this.imgClickHandler}
            src={this.props.thumbnail}
            alt={this.props.thumbnailAlt || ""}
          />
        </div>
      </a>
    );
  }
};

export default PortfolioLI;