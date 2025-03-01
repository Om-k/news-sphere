import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/allFiltersSlice";
import preferenceReducer from "./features/preferenceSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    preference: preferenceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
