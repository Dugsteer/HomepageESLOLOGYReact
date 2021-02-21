import React from "react";
import ReactDOM from "react-dom";
import Approuter from "./components/AppRouter";
// import QuestionsMaze from "./components/Questions";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./components/script";

ReactDOM.render(<Approuter />, document.getElementById("app"));
