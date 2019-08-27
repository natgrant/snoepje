import React, { Fragment } from "react";

export default function Nav() {
  return (
    <Fragment>
      <div>
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item brand-title" href="#/">
              SNOEPje
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="#/">
                Home
              </a>
              <a className="navbar-item" href="#/about">
                About Us
              </a>
              <a className="navbar-item">Shop</a>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-danger is-rounded is-outlined">
                  <i className="fas fa-shopping-cart" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
