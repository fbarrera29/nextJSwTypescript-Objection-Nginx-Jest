import { createSlice } from "@reduxjs/toolkit";
import Auth from "../models/auth";
import { RootState } from "./store";

const initialAuthState: Auth = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
