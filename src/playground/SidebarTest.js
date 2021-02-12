import React from "react";
import SideTitle from "./SideTitle";
let plants, animal, tools;

const itemsArray = [
  ["animal", "dog", "cat"],
  ["tools", "hammer", "saw"],
  ["tree", "shrub", "leaf"],
];

export default class SidebarTest extends React.Component {
  render() {
    return (
      <div>
        <SideTitle />
        {itemsArray.map((item) =>
          item.splice(1).map((item) => <div>{item}</div>)
        )}
      </div>
    );
  }
}

// {
//   itemsArray.map((value) => {
//     let blue = <div>{value[0]}</div>;

//     return value.slice(1).map((item) => {
//       return (
//         <div>
//           <div>{blue}</div> <div key={item}>{item}</div>
//         </div>
//       );
//     });
//   });
// }
