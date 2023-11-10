import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CaerSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
});

export default store;
