import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <section className="hero is-large landing-page">
          <div className="hero-body">
            <div className="container" />
          </div>
        </section>
        <div className="product-header">
          <h2 className="title has-text-centered shop-title">SHOP NOW</h2>
        </div>
        <div className="columns">
          <div className="column has-text-centered">
            <figure className="image product-image is-inline-block is-256x256">
              <img
                alt="turmeric chai"
                src="https://img.taste.com.au/PSoW8I3U/taste/2017/05/golden-turmeric-chai-latte1980x1320-127032-1.jpg"
              />
            </figure>
          </div>
          <div className="column has-text-centered">
            <figure className="image product-image is-inline-block is-256-256">
              <img
                alt="turmeric chai"
                src="https://img.taste.com.au/PSoW8I3U/taste/2017/05/golden-turmeric-chai-latte1980x1320-127032-1.jpg"
              />
            </figure>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
