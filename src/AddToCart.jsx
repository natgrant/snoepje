import React, { Fragment } from "react";

export default function AddToCart() {
  return (
    <Fragment>
      <div class="container form-container">
        <div className="title">
          <h2 className="product-title">TURMERIC CHAI</h2>
        </div>
        <form>
          <div class="field field-size">
            <div class="control">
              <div class="select">
                <select>
                  <option className="is-muted">Which Mylk?</option>
                  <option>Coconut</option>
                  <option>Almond</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <div class="select">
                <select>
                  <option>Choose Size</option>
                  <option>250ml</option>
                  <option>500ml</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <div>
                <input
                  class="input"
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Quantity"
                />
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-danger is-rounded">Add to Cart</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
