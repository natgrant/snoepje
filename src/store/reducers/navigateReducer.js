export const NAVIGATE = "NAVIGATE";

const navigateReducer = (state = "listing", action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.destination;
    default:
      return state;
  }
};

export default navigateReducer;
