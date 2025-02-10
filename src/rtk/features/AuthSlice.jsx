import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL
const API_URL = "/api/v1/login";

// Load token from localStorage
const storedToken = localStorage.getItem("token");

// Async thunk for user login
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL, credentials, {
                headers: { "Content-Type": "application/json" },
            });

            const userData = response.data;
            localStorage.setItem("token", userData.token); // Save token to localStorage

            return userData;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);

// Create auth slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: storedToken || null, // Load token from localStorage
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token"); // Remove token on logout
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Export actions & reducer
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
