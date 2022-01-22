import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";

const Razorpay = require("razorpay");
// const express = require("express");
// const app = express();

const razorpay = new Razorpay({
  key_id: "rzp_test_OkBJXTrvUWRclM",
  key_secret: "SxfJ2QsYezXXkIGQVz9xBpxo",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
