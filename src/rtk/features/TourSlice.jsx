import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL
const API_URL = "http://localhost:3000/api/v1/tours";

// Fetch all tours using Axios
export const fetchTours = createAsyncThunk("tours/fetchTours", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data.docs; // Assuming tours are inside `data.docs`
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch tours");
    }
});

// Fetch single tour by ID
export const fetchTourById = createAsyncThunk("tours/fetchTourById", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data.data.doc;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch tour");
    }
});

// Create tour slice
const toursSlice = createSlice({
    name: "tours",
    initialState: {
        tours: [],
        tour: null,
        loading: true,
        error: null,
    },
    reducers: {}, // No need for sync reducers now
    extraReducers: (builder) => {
        builder
            .addCase(fetchTours.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTours.fulfilled, (state, action) => {
                state.loading = false;
                state.tours = action.payload;
            })
            .addCase(fetchTours.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchTourById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTourById.fulfilled, (state, action) => {
                state.loading = false;
                state.tour = action.payload;
            })
            .addCase(fetchTourById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default toursSlice.reducer;
