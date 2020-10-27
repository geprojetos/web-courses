import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration } from "react-grid-system";
import "./styles/reset.scss";
import "./styles/_fonts.scss";
import App from "./App";

// sm, md, lg, xl, and xxl
setConfiguration({
  breakpoints: [576, 768, 992, 1200, 1600],
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
