import React, { Fragment } from "react";

import Header from "./Header";

export default function About() {
  return (
    <Fragment>
      <Header />
      <div className="about-container container has-text-centered">
        <div className="about">About</div>
      </div>
    </Fragment>
  );
}
