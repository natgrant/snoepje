import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import navigateReducer from "./navigateReducer";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  navigate: navigateReducer,
  firestore: firestoreReducer
});

export default rootReducer;
