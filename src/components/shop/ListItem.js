import React, { Fragment, useState } from "react";

const ListItem = props => {
  const [quantity, setQuantity] = useState(1);
  const product = props.product;

  return (
    <Fragment>
      <div className="column has-text-centered container flex-row-item">
        <figure className="image product-image is-inline-block">
          <img alt={product.name} src={product.image} />
        </figure>
        <div className="middle">
          <div className="product-desc has-text-left">
            <p className="product-title">{product.name}</p>
            <p>{product.blurb}</p>
          </div>
        </div>
      </div>
      <div className="column container form-container flex-row-item">
        <div className="title">
          <h2 className="product-title">
            {product.name} | {product.size}ML
          </h2>
          <p className="price">${product.price}</p>
        </div>
        <div className="prod-desc">
          <p>{product.description}</p>
          {product.stock === true ? (
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
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="control">
            <button
              href="#"
              className="button is-danger"
              onClick={() => props.addToCart(product.id, quantity)}
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
