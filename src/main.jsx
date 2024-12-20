import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
