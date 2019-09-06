import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import navigateReducer from "./navigateReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  navigate: navigateReducer
});

export default rootReducer;
