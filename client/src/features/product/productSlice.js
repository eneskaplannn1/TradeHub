import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   //productId
    //   //brand
    //   //prodDesc
    //   //category
    //   //quantity
    //   //price
    // },
  ],
  totalPrice: null,
  customer: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      //   state.cart.push(action.payload);
      const item = state.cart.find(
        (product) => product.productId === action.payload.productId
      );
      //   console.log(item);
      //   console.log(action.payload);
      if (item) {
        item.quantity++;
        state.totalPrice += item.quantity * item.quantity;
      } else {
        state.cart.push(action.payload);
        state.totalPrice += action.payload.quantity * action.payload.price;
      }
    },
    removeProductFromCart: (state, action) => {
      const item = state.cart.find(
        (product) => product.productId === action.payload.productId
      );
      if (item.quantity === 1) {
        state.cart = state.cart.filter((product) => product.id !== item.id);
        state.totalPrice -= item.price;
      } else {
        item.quantity -= 1;
        state.totalPrice -= item.price;
      }
      //   state.cart.filter((product) => {
      //     return product._id !== action.payload;
      //   });
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.customer = null;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = productSlice.actions;

export default productSlice.reducer;
