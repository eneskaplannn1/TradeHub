import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    products: [
      {
        brand: "Maybelline",
        category: "cosmetic",
        price: 7.99,
        productDesc: "Maybelline New York Mascara",
        productId: "651da76a1d1dc9be6197c219",
        quantity: 2,
      },
      {
        brand: "Nike",
        category: "sneakers",
        price: 129.99,
        productDesc: "Nike Air Max 270 Sneakers",
        productId: "651da76a1d1dc9be6197c1c5",
        quantity: 1,
      },
    ],
    totalPrice: null,
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
      } else {
        state.cart.products.push(action.payload);
        state.cart.totalPrice += Number(action.payload.price);
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
      } else {
        item.quantity -= 1;
        state.cart.totalPrice -= Number(item.price);
      }
      //   state.cart.filter((product) => {
      //     return product._id !== action.payload;
      //   });
    },
    clearCart(state) {
      state.cart = initialState;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = productSlice.actions;

export default productSlice.reducer;
