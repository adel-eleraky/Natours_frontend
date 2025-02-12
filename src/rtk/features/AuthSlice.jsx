import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API Base URL
const API_URL = "http://localhost:3000/api/v1";

// Load token from localStorage
const storedToken = localStorage.getItem("token");

// Async thunk for user login
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API_URL}/users/login`, credentials, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            });

            const data = response.data;
            console.log(data)
            return data;
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data || "Login failed");
        }
    }
);

//Async thunk to get logged-in user
export const getLoggedInUser = createAsyncThunk("auth/loggedInUser", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/users/me`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;
        return data
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response?.data || "Login failed");
    }
})

//Async thunk to logout user
export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${API_URL}/users/logout`, { withCredentials: true });

        const data = response.data;
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.response?.data || "Logout failed");
    }
})

//Async thunk to register user
export const registerUser = createAsyncThunk("auth/register", async (credentials, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/users/signup`, credentials,
            {
                headers: { "Content-Type": "application/json"},
                withCredentials: true
            });

        const data = response.data;
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err.response?.data || "register failed");
    }
})

// Create auth slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "",
        message: "",
        user: null,
        loading: false,
        errors: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.errors = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.status = action.payload.status
                state.message = action.payload.message
                state.user = action.payload.data.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action.payload)
                state.loading = false;
                state.status = action.payload.status
                state.message = action.payload.message
                state.errors = action.payload.errors;
            })
            .addCase(getLoggedInUser.pending, (state, action) => {
                state.loading = true
                state.errors = null
            })
            .addCase(getLoggedInUser.fulfilled, (state, action) => {
                state.loading = false
                state.status = action.payload.status
                state.user = action.payload.data.doc
            })
            .addCase(getLoggedInUser.rejected, (state, action) => {
                state.loading = false
                state.status = action.payload.status
                state.errors = action.payload.error
                state.message = action.payload.message
            })
            .addCase(logoutUser.pending, (state, action) => {
                state.loading = true
                state.errors = null
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false
                state.status = action.payload.status
                state.user = null
                state.message = action.payload.message
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false
                state.status = action.payload.status
                state.errors = action.payload.error
                state.message = action.payload.message
            })
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true
                state.errors = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.status = action.payload.status
                state.user = action.payload.data.user
                state.message = action.payload.message
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.status = action.payload.status
                state.errors = action.payload.errors
                state.message = action.payload.message
            })
    },
});

// Export actions & reducer
export default authSlice.reducer;
