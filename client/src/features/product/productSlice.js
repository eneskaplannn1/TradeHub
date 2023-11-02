import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {
        products: [],
        totalPrice: 0,
      },
  search: {
    searchResults: [],
    searchKey: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const item = state.cart.products.find(
        (product) => product.productId === action.payload.productId
      );
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
      state.cart = { products: [], totalPrice: 0 };
    },
    setCartData(state, action) {
      state.cart = action.payload;
    },
    setSearchResults(state, action) {
      state.search.searchResults = action.payload.searchResults;
      state.search.searchKey = action.payload.searchKey;
    },
    clearSearchResults(state) {
      state.searchResults = [];
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  setCartData,
  clearCart,
  setSearchResults,
  clearSearchResults,
} = productSlice.actions;

export default productSlice.reducer;
