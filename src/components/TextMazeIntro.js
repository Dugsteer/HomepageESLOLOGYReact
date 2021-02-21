import React from "react";

export default class TextMazeIntro extends React.Component {
  render() {
    return (
      <div className="textmaze-introduction">
        <div className="textmaze-introduction__img" id="textmazepic">
          <img src="./images/minimaze.png" alt="A picture of a maze"></img>
        </div>
        <div className="textmaze-introduction__text">
          <h1>TEXT MAZES</h1>
          <p>
            Text mazes are a fun alterative to word searches and make great
            warmers or mini breaks. In a traditional text maze students must
            find all the letters in a paragraph of text — working horizontally
            and vertically. Here we start with text mazes that cover vocabulary
            related to vehicles, clothes and Christmas. There will be more to
            come! Click on the mazes to download or print them — probably just
            print page 1 as the answer is on page 2! Happy text mazing!
          </p>
        </div>
      </div>
    );
  }
}
