const { configureStore } = require("@reduxjs/toolkit");
import menuStatusReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    menuStatus: menuStatusReducer,
  },
});
