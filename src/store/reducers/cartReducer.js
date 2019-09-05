import { ADD_TO_CART } from "../actions";

const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getNewCart(state, action.id);

    default:
      return state;
  }
};

const getNewCart = (cart, id) => {
  let exists = false;

  const newCart = cart.map(product => {
    if (product.id === id) {
      product.quantity += 1;
      exists = true;
    }
    return product;
  });

  if (exists) {
    return newCart;
  } else {
    newCart.push({ id: id, quantity: 1 });
    return newCart;
  }
};

export default cartReducer;
