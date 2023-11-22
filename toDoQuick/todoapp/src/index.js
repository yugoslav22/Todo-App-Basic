import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createRoot } from "react-dom/client";
const root = document.getElementById("root");
const rootContainer = createRoot(root);


rootContainer.render(
  <React.StrictMode>
   
      <App />
   
  </React.StrictMode>
);
