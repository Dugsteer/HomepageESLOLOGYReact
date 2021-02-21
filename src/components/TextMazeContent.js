import React from "react";
import TextMazeItem from "./TextMazeItem";
import TextMazeIntro from "./TextMazeIntro";

export default function TextMazeContent() {
  return (
    <div>
      <TextMazeIntro />
      <div className="main">
        <TextMazeItem
          title="Vehicles Text Maze"
          url="./docs/VehiclesTextMaze.pdf"
          img="images/VehiclesTextMaze.jpg"
          className="textmaze-1"
        />
        <TextMazeItem
          title="Christmas Text Maze"
          url="./docs/ChristmasTextMaze.pdf"
          img="images/ChristmasTextMaze.jpg"
          className="textmaze-2"
        />
        <TextMazeItem
          title="Clothes Text Maze"
          url="./docs/Clothes.pdf"
          img="./images/ClothesTextMaze.jpg"
          className="textmaze-3"
        />
        <TextMazeItem
          title="Clothes Text Maze"
          url="./docs/Clothes.pdf"
          img="./images/ClothesTextMaze.jpg"
          className="textmaze-4"
        />
        <TextMazeItem
          title="Clothes Text Maze"
          url="./docs/Clothes.pdf"
          img="./images/ClothesTextMaze.jpg"
          className="textmaze-5"
        />
        <TextMazeItem
          title="Clothes Text Maze"
          url="./docs/Clothes.pdf"
          img="./images/ClothesTextMaze.jpg"
          className="textmaze-6"
        />
      </div>
    </div>
  );
}
