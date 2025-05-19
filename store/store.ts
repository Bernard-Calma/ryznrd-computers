import { configureStore } from "@reduxjs/toolkit";
import buildReducer from "./features/buildSlice";

export const store = configureStore({
    reducer: {
        build: buildReducer,
    }
});