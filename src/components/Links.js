import React from "react";

export default class HomeContentTile extends React.Component {
  render() {
    return (
      <div className="links">
        <h2 className="links__text">A few more ideas for your class today.</h2>
        <div className="links__images">
          <div className="links__images-1 figure">
            <figure className="iclass">{this.props.image1}</figure>
            <figcaption>{this.props.figcaption}</figcaption>
          </div>

          <div className="links__images-1 figure">
            {this.props.image2}
            {this.props.figcaption2}
          </div>
        </div>
      </div>
    );
  }
}
