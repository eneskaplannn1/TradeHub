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
      console.log(action.payload);
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    verifyAccount(state, action) {
      state.verifyUserEmail = action.payload;
    },
  },
});

export const { logUserIn, logout, verifyAccount } = userSlice.actions;

export default userSlice.reducer;
