import { ADD_TO_CART } from "../actions";

const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getNewCart(state, action.id, action.quantity);

    default:
      return state;
  }
};

const getNewCart = (cart, id, quantity) => {
  let exists = false;

  const newCart = cart.map(product => {
    if (product.id === id) {
      product.quantity += Number(quantity);
      exists = true;
    }
    return product;
  });

  if (exists) {
    return newCart;
  } else {
    newCart.push({ id: id, quantity: quantity });
    return newCart;
  }
};

export default cartReducer;
