const { createSlice } = require("@reduxjs/toolkit");

const authUser = createSlice({
  name: "auth",
  initialState: {
    isUser: false,
    isAdmin: false,
    user: {},
  },
  reducers: {
    set(state, action) {
   
      state.isUser = action.payload.isUser;
      state.isAdmin = action.payload.isAdmin;
      state.user = action.payload.user;
    
   },
    isLoggedIn: (state) => {
      state.isUser = true;
    },
  },
});

export default authUser.reducer;
export const { isLoggedIn, set } = authUser.actions;
