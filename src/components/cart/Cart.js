import React, { Component } from "react";
import { connect } from "react-redux";

export class Cart extends Component {
  render() {
    return <div>In progress</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
