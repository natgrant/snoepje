import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import ProductList from "./ProductList";
import ShopHeader from "./ShopHeader";

class Shop extends Component {
  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <ShopHeader />
        <div className="columns is-centered is-vcentered flex-row-container">
          <ProductList products={products} />
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.firestore.ordered.products
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([
    {
      collection: "products"
    }
  ])
)(Shop);
