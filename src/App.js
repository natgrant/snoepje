import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// components
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
