import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";

const CartItem = ({ products, cart }) => {
  let getItemFromId = id => {
    const cartItem = products.find(cartItem => cartItem.id === id);
    return cartItem.name;
  };
  const name = getItemFromId(cart);
  return <p>{name}</p>;
};

const mapStateToProps = state => {
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
)(CartItem);
