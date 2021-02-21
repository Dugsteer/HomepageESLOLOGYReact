import React from "react";

export default class Navbar extends React.Component {
  state = {
    title: undefined,
  };

  render(props) {
    return (
      <div>
        <div className="nav-bar" id="navbar">
          <a href="/" className="nav-bar__logo">
            <svg className="icon-header nav-bar__logo-img">
              <use
                xlinkHref="./images/sprite2.svg#Buho"
                // onclick="scrollUp()"
              ></use>
            </svg>{" "}
          </a>
          <h3 className="nav-bar__title">Esl-Ology.Com</h3>
          <div className="nav-bar__title-page">
            <span className="nav-bar__title-page-main" id="pageTitle"></span>
          </div>
          <div className="nav-bar__links">
            <a href="/" className="nav-bar__link link3">
              Home
            </a>
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="20"
              onClick={this.props.toggle}
              id="menu"
              className="menu"
            >
              <rect width="100" height="12"></rect>
              <rect y="30" width="100" height="12"></rect>
              <rect y="60" width="100" height="12"></rect>
            </svg>{" "}
          </div>
        </div>
      </div>
    );
  }
}
