import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  user: null,
  verifyUserEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialSlice,
  reducers: {
    logUserIn(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    verifyAccount(state, action) {
      state.verifyUserEmail = action.payload;
    },
    updateUsersFavorites(state, action) {
      const productId = action.payload.id;

      if (state.user.favorites.includes(productId)) {
        const index = state.user.favorites.indexOf(productId);
        if (index !== -1) {
          state.user.favorites.splice(index, 1);
        }
      } else {
        state.user.favorites.push(productId);
      }
    },
  },
});

export const { logUserIn, logout, verifyAccount, updateUsersFavorites } =
  userSlice.actions;

export default userSlice.reducer;
