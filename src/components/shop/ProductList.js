import React, { Fragment } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { addToCart } from "../../store/actions";

const ProductList = props => {
  console.log("product list", props);
  return (
    <Fragment>
      {props.products &&
        props.products.map(product => {
          return (
            <Fragment>
              <ListItem
                product={product}
                key={product.id}
                props={props.addToCart}
              />
            </Fragment>
          );
        })}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
