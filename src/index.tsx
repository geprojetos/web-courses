import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration } from "react-grid-system";
import "./styles/reset.scss";
import "./styles/_fonts.scss";
import "./assets/fonts/IconsCourses.css";
import "./styles/global.scss";
import App from "./App";

// sm, md, lg, xl, xxl
setConfiguration({
  gridColumns: 12,
  gutterWidth: 30,
  breakpoints: [576, 768, 992, 1200, 1600], // sm md lg xl xxl
  containerWidths: [540, 740, 960, 1140, 1540],
  maxScreenClass: "xl",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
