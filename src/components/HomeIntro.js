import React from "react";

export default class HomeIntro extends React.Component {
  render() {
    return (
      <div className="introduction">
        <div className="introduction__img" id="ghostly">
          <img src="./images/london.png" alt="A picture of London"></img>
        </div>
        <div className="introduction__text">
          <h1>Welcome to Esl-ology.com</h1>
          <p>
            Here you can find free tools for English lessons that can be used
            online and in the classroom. There are flashcards, memory games,
            hangman, grammar mazes and more, all designed to help your classes.
            More material will be added regularly, so please check back to see
            what's new! And click around for hidden fun.
          </p>
        </div>
      </div>
    );
  }
}
