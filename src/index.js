import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss"; 
import "./Assets/GlobalStyles/Reset.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CCPageRoute from "./Constanst/CCPageRoute.Routes";
import { mergedStore } from "./Store/merged/Merged.Store";
import Header from "./Components/Global/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById("code-challenge-root"),
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={mergedStore}>{<Header />}</Provider>
      <CCPageRoute />
    </BrowserRouter>
  </React.StrictMode>,
);
