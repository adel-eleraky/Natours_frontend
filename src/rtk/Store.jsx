import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./features/TourSlice.jsx";

const store = configureStore({
    reducer: {
        tours: toursReducer,
    },
});

export default store;
