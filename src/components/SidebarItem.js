import React from "react";
import SidebarListItem from "./SidebarListItem";

export default class SidebarItem extends React.Component {
  render(props) {
    return (
      <div className="first-sub">
        <div className="sidebar__subtitle">
          <h2>{this.props.title}</h2>
          <svg className="sidebar__icon">
            <use xlinkHref={this.props.icon}></use>
          </svg>
        </div>
        <div className="sidebar__subtitle-list">
          <SidebarListItem name={this.props.name} url={this.props.url} />
          <SidebarListItem name={this.props.name2} url={this.props.url2} />
          <SidebarListItem name={this.props.name3} url={this.props.url3} />
          <SidebarListItem name={this.props.name4} url={this.props.url4} />
          <SidebarListItem name={this.props.name5} url={this.props.url5} />
          <SidebarListItem name={this.props.name6} url={this.props.url6} />
          <SidebarListItem name={this.props.name7} url={this.props.url7} />
          <SidebarListItem name={this.props.name8} url={this.props.url8} />
        </div>
      </div>
    );
    x;
  }
}
