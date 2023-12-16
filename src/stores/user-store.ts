import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; 
import { appApi } from "core/api-slicer";

export const store = configureStore({
    reducer: {
        [appApi.reducerPath]: appApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware),
})

setupListeners(store.dispatch);