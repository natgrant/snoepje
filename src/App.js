import React, { Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

// components
import Home from "./Home";
import About from "./About";
import Shop from "./components/shop/Shop";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Cart from "./components/cart/Cart";

const App = props => {
  return (
    <Fragment>
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/shop" component={Shop} /> */}
        {props.navigate === "listing" ? <Shop /> : <Cart />}
        <Footer />
      </Router>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    navigate: state.navigate
  };
};

export default connect(mapStateToProps)(App);
