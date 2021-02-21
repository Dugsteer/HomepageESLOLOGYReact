import React from "react";

export default class HomeContentTile extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <figure className="content-6__img">
          <a href={this.props.url}>
            <img
              src={this.props.image}
              alt={this.props.alt}
              className="content__img"
            />
          </a>
        </figure>

        <div className="content-6__text">
          <h2 className="content-title">{this.props.title}</h2>
          <p className="content-1__text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}
