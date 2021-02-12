import React from "react";
import Sidebar from "./Sidebar";
import AdsTop from "./AdsTop";
import AdsBottom from "./AdsBottom";

const Wrapper = () => (
  <div id="wrapper" className="wrapper">
    <Sidebar />
    <AdsTop />
    <AdsBottom />
  </div>
);

export default Wrapper;
