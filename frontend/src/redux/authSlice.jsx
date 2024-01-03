const { createSlice } = require("@reduxjs/toolkit");

const authUser = createSlice({
  name: "auth",
  initialState: {
    isUser: true,
    isAdmin: true,
  },
  reducers: {
    isLoggedIn: (state) => {
      state.isUser = true;
    },
  },
});

export default authUser.reducer;
export const { isLoggedIn } = authUser.actions;
