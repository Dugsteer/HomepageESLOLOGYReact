import React from "react";

import { Link } from "react-router-dom";

export default class TextMazeItem extends React.Component {
  render(props) {
    return (
      <div className={this.props.className}>
        <h2 className="download">{this.props.title}</h2>
        <div className="pdf-class">
          <a href={this.props.url}>
            <img src={this.props.img} alt={this.props.title}></img>
          </a>
        </div>
      </div>
    );
  }
}
