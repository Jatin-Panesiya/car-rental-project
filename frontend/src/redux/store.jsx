const { configureStore } = require("@reduxjs/toolkit");
import menuStatusReducer from "./menuSlice";
import searchQueryReducer from "./searchQuery";
import authUser from "./authSlice";
export const store = configureStore({
  reducer: {
    menuStatus: menuStatusReducer,
    searchQuery: searchQueryReducer,
    auth: authUser,
  },
});
