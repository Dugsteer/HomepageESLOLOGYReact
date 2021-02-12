import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarListItem from "./SidebarListItem";

const items = [
  { name: "animals", url: "animals.com" },
  { name: "fun", url: "fun.com" },
];

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-list">
          <SidebarItem
            title="Fun"
            icon="./images/sprite2.svg#joystick"
            name="NEW: Text Mazes"
            url="text-maze.html"
            name2="Questions Maze"
            url2="questions-maze.html"
            name3="'To Be' Maze"
            url3="to-be-maze.html"
            name4="Name Three... "
            url4="name-three-things.html"
            name5="Boardgame Player"
            url5="boardgame-player.html"
            name6="Talking Game"
            url6="talking-game.html"
            name7="Triple Verb Match"
            url7="triple-memory.html"
            name8="Class Timer"
            url8="class-timer.html"
          />
          <SidebarItem
            title="Animals"
            icon="./images/sprite3.svg#elephant"
            name="Flashcards"
            url="flashcard-animals.html"
            name2="Memory"
            url2="matching-animal.html"
            name3="Bingo"
            url3="bingo-animals.html"
          />
          <SidebarItem
            title="Clothes"
            icon="./images/sprite.svg#pants"
            name="Flashcards"
            url="flashcard-clothes.html"
            name2="Memory"
            url2="matching-clothes.html"
            name3="Bingo"
            url3="bingo-clothes.html"
          />
        </div>
      </div>
    );
  }
}
