import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AuthState {
  isAuthenticated: Boolean;
}

const initialAuthState: AuthState = {
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
