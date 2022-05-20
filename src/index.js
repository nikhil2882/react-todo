import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./models/reducers";

import "./style.css";

import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.body
);
