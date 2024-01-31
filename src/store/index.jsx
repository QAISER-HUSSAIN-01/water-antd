import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme";
export const store = configureStore({
  reducer: {
    theme,
  },
});
