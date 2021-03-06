import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoryModule from "./modules/category";

export const store = configureStore({
  reducer: {
    category: categoryModule,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
