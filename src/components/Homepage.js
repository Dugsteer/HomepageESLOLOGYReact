import React from "react";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default class Homepage extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Wrapper />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
