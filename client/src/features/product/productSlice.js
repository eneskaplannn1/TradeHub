import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    products: [],
    totalPrice: 0,
    customer: null,
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
      const item = state.cart.products.find((product) => {
        // console.log(product);
        return product.productId === action.payload.productId;
      });

      if (item.quantity === 1) {
        state.cart.products = state.cart.products.filter(
          (product) => product.productId !== action.payload.productId
        );
        state.cart.totalPrice -= Number(item.price);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        item.quantity -= 1;
        state.cart.totalPrice -= Number(item.price);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
      //   state.cart.filter((product) => {
      //     return product._id !== action.payload;
      //   });
    },
    clearCart(state) {
      state.cart = initialState;
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
