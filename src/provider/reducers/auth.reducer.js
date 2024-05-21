import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AUTH_API from "../../api/auth.api";

export const HANDLE_LOGIN = createAsyncThunk("handle-login", async (content) => {
    console.log(content)
    return content;
})


export const HANDLE_REGISTER = createAsyncThunk("handle-register", async (content) => {
    console.log(content)
    return content;
})



export const REQUEST_OTP = createAsyncThunk("request-otp", async (content) => {
    console.log(content)
    return content;
})



export const HANDLE_RESET_PASSWORD = createAsyncThunk("handle-reset-password", async (content) => {
    console.log(content)
    return content;
})





const AUTH_REDUCER = createAsyncThunk({
    name: "Authentication reducer",
    initialState: { loading: false, msg: "", authenticated: false },
    reducers: null,
    extraReducers: (builder) => {
        builder.addCase(HANDLE_LOGIN.pending, (action, state) => {
            state.loading = true;

        })
        builder.addCase(HANDLE_LOGIN.fulfilled, (action, state) => {
            state.loading = false;
            state.authenticated = true;
        })
        builder.addCase(HANDLE_LOGIN.rejected, (action, state) => {
            state.loading = false;
            state.authenticated = false;
            console.log(state.payload)
        })
    },
})



export default AUTH_REDUCER.reducers;
