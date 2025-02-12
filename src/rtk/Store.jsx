import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./features/TourSlice.jsx";
import authSlice from './features/AuthSlice';

const store = configureStore({
    reducer: {
        tours: toursReducer,
        auth: authSlice
    },
});

export default store;
