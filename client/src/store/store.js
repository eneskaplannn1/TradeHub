import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authentication/authSlice";
import cartReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
