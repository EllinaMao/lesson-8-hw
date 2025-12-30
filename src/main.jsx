import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/styles/global.css";
import "./assets/styles/layout.css";
import "./assets/styles/navigation.css";
import "./assets/styles/pages.css";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);