import React, { Fragment } from "react";

const ListItem = ({ product }) => {
  return (
    <Fragment>
      <div className="container form-container">
        <div className="title">
          <h2 className="product-title">
            {product.name} | {product.size}ML
          </h2>
          <p className="price">${product.price}</p>
        </div>
        <div className="prod-desc">
          <p>{product.description}</p>
          {product.stock === "true" ? (
            <p className="stock in-stock">In stock</p>
          ) : (
            <p className="stock in-stock">Hold tight! we're out of stock</p>
          )}
        </div>
        <div className="field input-field is-grouped">
          <div className="control">
            <div>
              <input
                className="input"
                type="number"
                min="1"
                max="5"
                value="1"
              />
            </div>
          </div>
          <div className="control">
            <button
              className="button is-danger"
              onClick={() => this.props.addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListItem;
