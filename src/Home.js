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
        <div className="product-header">
          <h2 className="title has-text-centered shop-title">SHOP NOW</h2>
        </div>
        <div class="columns">
          <div class="column">
            <figure class="image is-128x128">
              <img
                alt="bottle of chai"
                src="https://unsplash.com/photos/wCml4tvK-Yg"
              />
            </figure>
          </div>
          <div class="column">
            <img
              alt="bottle of chai"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
