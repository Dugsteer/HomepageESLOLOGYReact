import React from "react";
import itemsArray from "./itemsArray";

export default class SideTitle extends React.Component {
  render() {
    return (
      <div>
        {itemsArray.map((item) => (
          <div>{item[0]}</div>
        ))}
      </div>
    );
  }
}
