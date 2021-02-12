import React from "react";
import { Link } from "react-router-dom";

export default class SidebarListItem extends React.Component {
  render(props) {
    return (
      <li>
        <Link to={this.props.url} exact={true}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}
