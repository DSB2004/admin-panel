import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AUTH_API from "../../api/auth.api";
import SetCredentials from "../../utils/set_credentials.util";
export const HANDLE_LOGIN = createAsyncThunk("handle-login", async (content) => {
    const response = await AUTH_API.post("/login", content);
    await SetCredentials(response.data.body)
    return response.data;
});

export const HANDLE_REGISTER = createAsyncThunk("handle-register", async (content) => {
    const response = await AUTH_API.post("/register", content);
    return response.data; // Ensure you return the response data
});

export const REQUEST_OTP = createAsyncThunk("request-otp", async (content) => {
    const response = await AUTH_API.post("/request-otp", content);
    return response.data; // Ensure you return the response data
});

export const HANDLE_RESET_PASSWORD = createAsyncThunk("handle-reset-password", async (content) => {
    const response = await AUTH_API.post("/reset-password", content);
    return response.data; // Ensure you return the response data
});

const AUTH_REDUCER = createSlice({
    name: "Authentication reducer",
    initialState: { loading: false, msg: "" },
    reducers: {},
    extraReducers: (builder) => {
        // handle-login
        builder.addCase(HANDLE_LOGIN.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(HANDLE_LOGIN.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(HANDLE_LOGIN.rejected, (state) => {
            state.loading = false;
        });

        // handle-register
        builder.addCase(HANDLE_REGISTER.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(HANDLE_REGISTER.fulfilled, (state, action) => {
            // console.log("at builder: ", action.payload); // Logging action.payload
            state.loading = false;
        });
        builder.addCase(HANDLE_REGISTER.rejected, (state) => {
            state.loading = false;
        });

        // request-otp
        builder.addCase(REQUEST_OTP.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(REQUEST_OTP.fulfilled, (state, action) => {
            console.log("at builder: ", action.payload); // Logging action.payload
            state.loading = false;
        });
        builder.addCase(REQUEST_OTP.rejected, (state) => {
            state.loading = false;
        });

        // handle-reset-password
        builder.addCase(HANDLE_RESET_PASSWORD.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(HANDLE_RESET_PASSWORD.fulfilled, (state, action) => {
            console.log("at builder: ", action.payload); // Logging action.payload
            state.loading = false;
        });
        builder.addCase(HANDLE_RESET_PASSWORD.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default AUTH_REDUCER.reducer;
