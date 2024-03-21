import { createSlice } from "@reduxjs/toolkit";
const ReduxSlice = createSlice({
  name: "ReduxSlice",
  initialState: {
    userID: localStorage.getItem("userID")
      ? localStorage.getItem("userID")
      : [],
    userName: localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : [],
    Token: localStorage.getItem("Token") ? localStorage.getItem("Token") : "",
  },
  reducers: {
    UserLoggedIn(state, action) {
      state.userID = action.payload.currentUser._id;
      state.userName = action.payload.currentUser.username;
      state.Token = action.payload.token;
      localStorage.setItem("userID", state.userID);
      localStorage.setItem("userName", state.userName);
      localStorage.setItem("Token", state.Token);
    },

    UserLoggedOut() {
      localStorage.removeItem("userID");
      localStorage.removeItem("Token");
      localStorage.removeItem("userName");
    },
  },
});
export const { UserLoggedIn, UserLoggedOut } = ReduxSlice.actions;
export default ReduxSlice.reducer;
