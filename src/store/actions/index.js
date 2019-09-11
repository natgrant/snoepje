export const ADD_TO_CART = "ADD_TO_CART";
export const NAVIGATE = "NAVIGATE";

export const addToCart = (id, quantity) => {
  return {
    type: "ADD_TO_CART",
    id,
    quantity
  };
};

export const navigate = destination => {
  return {
    type: "NAVIGATE",
    destination
  };
};
