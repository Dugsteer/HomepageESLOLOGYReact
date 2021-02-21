import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdsTop from "./AdsTop";
import AdsBottom from "./AdsBottom";
import HomePageContent from "./HomePageContent";
import Links from "./Links";

class Wrapper extends React.Component {
  render(props) {
    return (
      <div id="wrapper" className="wrapper">
        <Sidebar myClass={this.props.myClass} />
        <AdsTop />
        <HomePageContent />

        <AdsBottom />
        <Links
          image1={
            <iframe
              width="290"
              height="160"
              src="https://www.youtube.com/embed/Fn-GRtN3MKU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          }
          figcaption={
            <span>
              Learn how your class can play{" "}
              <a href="talk-minute.html">Talk for a Minute</a> over on our{" "}
              <a href="https://www.youtube.com/channel/UCvl0weUrlWDhQOimqfRmZUA">
                YouTube
              </a>{" "}
              channel, where you can watch out for more upcoming videos.
            </span>
          }
          image2={
            <a href="memory-halloween.html">
              <img src="./images/HalloweenMatching.jpg" alt=""></img>
            </a>
          }
          figcaption2={
            <figcaption>
              <a href="memory-halloween.html">Hankering for Halloween?</a> Click
              on the graves!
            </figcaption>
          }
        />
      </div>
    );
  }
}

export default Wrapper;
