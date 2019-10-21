import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    let addedItems = this.props.cart.length ? (
      this.props.cart.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="item-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="item-desc">
              <CartItem cart={item.id} />
              <p>{item.description}</p>
              <p>
                <b>Price: ${item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>

              <button className="button">Remove</button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Nothing to see here</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  null
)(Cart);
