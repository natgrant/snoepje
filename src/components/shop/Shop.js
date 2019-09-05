import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

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
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps,
  null
)(Shop);
