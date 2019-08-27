import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// components
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </Fragment>
  );
}

export default App;
