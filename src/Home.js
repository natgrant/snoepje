import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <section class="hero is-large landing-page">
          <div class="hero-body">
            <div class="container" />
          </div>
        </section>
        <div class="columns">
          <div class="column">First column</div>
          <div class="column">Second column</div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
