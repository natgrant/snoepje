import React, { Fragment } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";
import { addToCart } from "../../store/actions";

const ProductList = ({ products }) => {
  return (
    <Fragment>
      {products &&
        products.map(product => {
          return <ListItem product={product} key={product.id} />;
        })}
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
