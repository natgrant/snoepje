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
          <h2 className="title has-text-centered shop-title">
            WHAT'S IN STORE
          </h2>
        </div>
        <div className="columns is-centered is-vcentered">
          <div className="column has-text-centered  container">
            <figure className="image product-image is-inline-block">
              <img
                alt="turmeric chai"
                src="https://img.taste.com.au/PSoW8I3U/taste/2017/05/golden-turmeric-chai-latte1980x1320-127032-1.jpg"
              />
            </figure>
            <div className="middle">
              <h3 className="product-name text" onClick="#">
                SHOP NOW
              </h3>
            </div>
          </div>
          <div className="column container">
            <div className="product-desc">
              <p>
                <strong>HEALING TURMERIC CHAI</strong>
              </p>
              <p>
                For those days where you need a wee pick-me-up, this turmeric
                and giner infused chai is sure to hit the spot{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="columns is-centered is-vcentered">
          <div className="column container">
            <div className="product-desc has-text-right">
              <p>
                <strong>GUT LOVE KOMBUCHA</strong>
              </p>
              <p>
                Loaded with probiotics, our kombucha is made with blends of
                green and black tea, making it a delicious drink to enjoy and
                feel good about{" "}
              </p>
            </div>
          </div>
          <div className="column has-text-centered  container">
            <figure className="image product-image is-inline-block">
              <img
                alt="kombucha"
                src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              />
            </figure>
            <div className="middle">
              <h3 className="product-name text" onClick="#">
                SHOP NOW
              </h3>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
