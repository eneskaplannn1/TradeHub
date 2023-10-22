import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {
        products: [],
        totalPrice: 0,
      },
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      //   state.cart.push(action.payload);
      const item = state.cart.products.find(
        (product) => product.productId === action.payload.productId
      );
      //   console.log(item);
      //   console.log(action.payload);
      if (item) {
        item.quantity++;
        state.cart.totalPrice += Number(item.price);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart.products.push(action.payload);
        state.cart.totalPrice += Number(action.payload.price);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeProductFromCart: (state, action) => {
      // console.log(action.payload);
      const item = state.cart.products.find((product) => {
        // console.log(product.productId);
        // console.log(action.payload.product.productId);
        return product.productId === action.payload.product.productId;
      });

      if (action.payload.all) {
        state.cart.products = state.cart.products.filter(
          (product) => product.productId !== action.payload.product.productId
        );
        state.cart.totalPrice -= Number(item.price) * Number(item.quantity);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        if (item.quantity === 1) {
          state.cart.products = state.cart.products.filter(
            (product) => product.productId !== action.payload.product.productId
          );
          state.cart.totalPrice -= Number(item.price);
        } else {
          item.quantity -= 1;
          state.cart.totalPrice -= Number(item.price);
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    clearCart(state) {
      // console.log(1);
      state.cart = { products: [], totalPrice: 0 };
    },
    setCartData(state, action) {
      state.cart = action.payload;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  setCartData,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
