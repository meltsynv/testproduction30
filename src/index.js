import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HttpsRedirect from "react-https-redirect";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/scrollToTop";

ReactDOM.render(
  <HttpsRedirect>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </HttpsRedirect>,
  document.getElementById("root")
);

serviceWorker.unregister();
