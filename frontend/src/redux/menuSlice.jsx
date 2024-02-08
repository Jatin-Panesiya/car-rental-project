const { createSlice } = require("@reduxjs/toolkit");

export const menuStatusReducer = createSlice({
  name: "menuStatus",
  initialState:false,
  reducers: {
    setStatus: (_, action) => {
      return action.payload;
    },
  },
});

export const { setStatus } = menuStatusReducer.actions;                       
export default menuStatusReducer.reducer;
