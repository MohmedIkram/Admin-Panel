import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppBarData from "./AppBarData";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <AppBarData /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
