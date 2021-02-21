import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContent from "./HomeContent";
import HomeIntro from "./HomeIntro";
import TextMazeContent from "./TextMazeContent";

export default class HomePageContent extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomeContent} exact={true} />
          <Route path="/text-maze" component={TextMazeContent} />
        </Switch>
      </div>
    );
  }
}
