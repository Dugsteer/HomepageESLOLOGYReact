import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Footer from "./Footer";

class AppRouter extends React.Component {
  state = {
    myClass: "sidebar",
  };
  toggle =() => {
this.state.myClass === "sidebar" ?
       this.setState({ myClass: "sidebar block" }) :
       this.setState({myClass: "sidebar"})
  }
  render() {

    return (
      <div>
        <BrowserRouter>
          <Navbar toggle={this.toggle} />
          <Wrapper myClass={this.state.myClass} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRouter;
