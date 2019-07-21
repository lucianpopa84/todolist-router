import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function Root() {
  return (
    <Router>
      <Route path={"/:filter?"} component={App} />
    </Router>
  );
}

export default Root;
