import React, { Fragment } from "react";

export default function Nav() {
  return (
    <Fragment>
      <div>
        <nav
          class="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <a class="navbar-item brand-title" href="#">
              SNOEPje
            </a>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">Home</a>
              <a class="navbar-item">About</a>
              <a class="navbar-item">Shop</a>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-danger is-rounded is-outlined">
                  <i class="fas fa-shopping-cart" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
