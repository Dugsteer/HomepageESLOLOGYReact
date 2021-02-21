import React from "react";
import HomeContentTile from "./HomeContentTile";
import HomeIntro from "./HomeIntro";

export default function HomeContent() {
  return (
    <div>
      <HomeIntro />
      <div className="content">
        <HomeContentTile
          className="content-4"
          title="Sports Bingo Cards"
          url="bingo-sports.html"
          text="Print out random sets of bingo cards for a quick, fun way to back up learning vocabulary sets. Use the online caller to see which comes next."
          image="./images/BingoSports.jpg"
          alt="A sports bingo card"
        />
        <HomeContentTile
          className="content-5"
          title="Text Mazes"
          url="/text-maze"
          text="A classic alternative to word searches. Can you find all the words one after another in the grid? Who will complete the maze first?"
          image="./images/VehiclesTextMaze.jpg"
          alt="An ESL text maze"
        />
        <HomeContentTile
          className="content-6"
          title="Play Any Boardgame"
          url="boardgame-player.html"
          text="Load any ESL teaching boardgame into a window so that students can play online or onscreen. With draggable pieces and die."
          image="./images/Boardgame.jpg"
          alt="An online boardgame"
        />
        <HomeContentTile
          className="content-7"
          title="Photo Flashcards"
          url="flashcard-animals.html"
          text="A great way to present or revise vocabulary sets with a class, either with traditional flashcards or 'hover cards', available with images and with photos."
          image="./images/AnimalFlash.jpg"
          alt="An ESL clownfish flashcard"
        />
        <HomeContentTile
          className="content-8"
          title="Grammar Mazes"
          url="questions-maze.html"
          text="All of the (upcoming) grammar mazes help student awareness of grammar mistakes. The aim is to have a clean run all the way through!"
          image="./images/QuestionsMaze.jpg"
          alt="A screenshot from an ESL grammar maze"
        />
        <HomeContentTile
          className="content-9"
          title="Matching Cards"
          url="matching-food.html"
          text="There are three different sets of cards in each of our matching card games. How fast can you clear the board?"
          image="./images/MatchingFood.jpg"
          alt="A pelmanism style ESL game"
        />
      </div>
    </div>
  );
}
