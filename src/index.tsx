import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./Redux/RootReduser";
import { BrowserRouter as Router } from "react-router-dom";
import './i18n';
import store from './Redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
