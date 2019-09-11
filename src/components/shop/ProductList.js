import React, { Fragment } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { addToCart, navigate } from "../../store/actions";

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
                addToCart={props.addToCart}
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
    addToCart: (id, quantity) => {
      dispatch(addToCart(id, quantity));
      dispatch(navigate("cart"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
