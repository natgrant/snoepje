import React, { Fragment, useState } from "react";

const AddToCart = () => {
  const [item, setItem] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <Fragment>
      <div className="container form-container">
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
        <p className="stock in-stock">In stock</p>
        <form onSubmit={handleSubmit}>
          <div className="field input-field is-grouped">
            <div className="control">
              <div>
                <input
                  className="input"
                  type="number"
                  min="1"
                  max="5"
                  value={item}
                  onChange={e => setItem(e.target.value)}
                />
              </div>
            </div>

            <div className="control">
              <button className="button is-danger" type="submit">
                Add to Cart
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddToCart;
