import React, { Fragment } from "react";

export default function AddToCart() {
  return (
    <Fragment>
      <div class="container form-container">
        <div className="title">
          <h2 className="product-title">
            TURMERIC CHAI W/ COCONUT MYLK | 250ML
          </h2>
          <p className="price">$4.99</p>
        </div>
        <div className="prod-desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            officiis voluptas exercitationem ipsa culpa a iure. Minima, maxime.
            Quos animi expedita aperiam corrupti modi error obcaecati suscipit
            praesentium, exercitationem possimus.
          </p>
        </div>
        <p class="stock in-stock">In stock</p>
        <form>
          <div class="field input-field is-grouped">
            <div class="control">
              <div>
                <input class="input" type="number" min="1" max="5" value="1" />
              </div>
            </div>

            <div class="control">
              <button class="button is-danger">Add to Cart</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
