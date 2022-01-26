import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import './i18n';
import store from './Redux/Store';
import Header from "./components/Header/Header";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <App/>
                </Suspense>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
