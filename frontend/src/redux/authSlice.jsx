const { createSlice } = require("@reduxjs/toolkit");

const authUser = createSlice({
  name: "auth",
  initialState: {
    isUser: false,
    isAdmin: true,
    user: {},
  },
  reducers: {
    set(state, action) {
     state = action.payload
     return
   },
    isLoggedIn: (state) => {
      state.isUser = true;
    },
  },
});

export default authUser.reducer;
export const { isLoggedIn, set } = authUser.actions;
