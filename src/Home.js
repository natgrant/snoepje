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
        <div className="columns is-centered is-vcentered">
          <div className="column has-text-centered container">
            <figure className="image product-image is-inline-block">
              <img
                alt="turmeric chai"
                src="https://img.taste.com.au/PSoW8I3U/taste/2017/05/golden-turmeric-chai-latte1980x1320-127032-1.jpg"
              />
            </figure>
            <div className="middle">
              <h3 className="product-name text" onClick="#">
                Turmeric Chai with Coconut Mylk
              </h3>
            </div>
          </div>
          <div className="column has-text-centered container">
            <figure className="image product-image is-inline-block">
              <img
                alt="turmeric chai"
                src="https://images.unsplash.com/photo-1459933083533-46381576caa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              />
            </figure>
            <div className="middle">
              <h3 className="product-name text" onClick="#">
                Turmeric Chai with Almond Mylk
              </h3>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
