import React, { Component, Fragment } from "react";
import Nav from "./Nav";

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
      </Fragment>
    );
  }
}
