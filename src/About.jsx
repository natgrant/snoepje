import React, { Fragment } from "react";

import Header from "./Header";

export default function About() {
  return (
    <Fragment>
      <Header />
      <div className="about-container container has-text-right">
        <div className="about-text">
          <p>
            <strong>SNOEPje</strong> is here to deliver lovingly brewed natural
            drinks, each batch is individually crafted using the best quality
            ingredients nature has to offer.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
