import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; 
import { appApi } from "api/api-slicer";
import { authSlice } from "stores/auth-store";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [appApi.reducerPath]: appApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware),
})

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>